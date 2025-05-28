from contextlib import asynccontextmanager

from fastapi import FastAPI, APIRouter, Request
from pydantic import BaseModel

@asynccontextmanager
async def lifespan(app: FastAPI):
    app.state.counter = 0
    yield

app = FastAPI(lifespan=lifespan, docs_url="/api/docs", openapi_url="/api/openapi.json")

router = APIRouter(prefix="/api")

@router.get("/counter")
async def get_counter(request: Request):
    return {"counter": request.app.state.counter}

class Input(BaseModel):
    amount: int

@router.post("/counter")
async def add_to_counter(request: Request, input: Input):
    request.app.state.counter += input.amount

app.include_router(router)
