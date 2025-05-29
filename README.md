# React + FastAPI Template

A modern full-stack template featuring React for the frontend and FastAPI for the backend, bundled together in a single container using NGINX Unit.

## Features

- **React Frontend**
  - TypeScript support
  - TailwindCSS + shadcn/ui components
  - Fast refresh during development
  - Optimized production build

- **FastAPI Backend**
  - Python type hints
  - OpenAPI/Swagger documentation
  - Async support
  - Built-in state management example

- **Production Ready**
  - Single container deployment with NGINX Unit
  - Multi-stage Docker builds
  - Efficient caching for dependencies
  - Static file serving

## Prerequisites

- [just](https://github.com/casey/just) - Command runner
- [pnpm](https://pnpm.io) - Package manager for Node.js
- [uv](https://github.com/astral-sh/uv) - Python package installer

## Development

The project is set up for local development with hot-reload capabilities for both frontend and backend.

### Install development dependencies

```bash
just install
```

### Start the Backend

```bash
just dev back
```

The FastAPI server will start on http://localhost:8000 with API documentation available at http://localhost:8000/api/docs

### Start the Frontend

```bash
just dev front
```

The React development server will start on http://localhost:5173 and automatically proxy API requests to the backend.

## Production

Build and run the production container:

```bash
just build
just up
```

The application will be available at http://localhost:80 with:
- Frontend static files served directly
- All `/api/*` requests routed to the FastAPI application
- API documentation at http://localhost/api/docs

## Project Structure

```
.
├── api/                    # FastAPI backend
│   ├── __init__.py
│   └── server.py          # Main FastAPI application
├── gui/                    # React frontend
│   ├── assets/            # Static assets
│   ├── components/        # React components
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main React component
│   └── main.tsx          # React entry point
├── Dockerfile             # Multi-stage production build
├── unit.json              # NGINX Unit configuration
└── README.md             # This file
```

## License

MIT
