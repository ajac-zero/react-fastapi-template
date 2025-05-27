from fastapi import FastAPI, APIRouter

router = APIRouter(prefix="/api")

@router.get("/hello")
async def say_hello():
    return {"text": "Hello!"}

app = FastAPI()
app.include_router(router)
