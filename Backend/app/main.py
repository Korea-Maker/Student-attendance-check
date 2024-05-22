# backend/app/main.py
from fastapi import FastAPI
from app.database import engine, Base
from app.routes import user

app = FastAPI()

# 데이터베이스 테이블 생성
Base.metadata.create_all(bind=engine)

# 라우트 등록
app.include_router(user.router)

@app.get("/")
def read_root():
    return {"Hello": "World"}
