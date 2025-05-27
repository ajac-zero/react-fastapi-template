FROM node:23-alpine AS frontend-builder

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm build

FROM ghcr.io/astral-sh/uv:python3.13-bookworm-slim AS backend-builder

ENV UV_COMPILE_BYTECODE=1 UV_LINK_MODE=copy

WORKDIR /app

RUN --mount=type=cache,target=/root/.cache/uv \
    --mount=type=bind,source=uv.lock,target=uv.lock \
    --mount=type=bind,source=pyproject.toml,target=pyproject.toml \
    uv sync --locked --no-dev

FROM unit:python3.13-slim AS runtime

WORKDIR /app

COPY --from=backend-builder --chown=app:app /app/.venv /venv

COPY --from=frontend-builder /app/dist ./gui

COPY api/ ./api

ENV PATH="/venv/bin:$PATH"

COPY unit.json /docker-entrypoint.d/config.json
