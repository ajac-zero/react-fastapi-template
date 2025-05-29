tag := 'react-fastapi-container'

# List available recipes
list:
    @just --list --unsorted

# Install all project dependencies
install:
    uv sync --dev
    pnpm i

alias i := install

# Build the unit container
build:
    docker build -t {{tag}} .

# Run the unit container on a specified port; Default port: 8080
start port='8080':
    docker run --rm -it -p {{port}}:80 {{tag}}

# Run the target in dev mode with hot reload; Available targets: ['front', 'back']
develop target:
    #!/usr/bin/env sh
    if [ "{{target}}" = "front" ]; then
        pnpm run dev
    elif [ "{{target}}" = "back" ]; then
        uv run uvicorn api.server:app --reload
    else
        echo "Invalid target: {{target}}. Use 'front' or 'back'."
        exit 1
    fi

alias dev := develop
