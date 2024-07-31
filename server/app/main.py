from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import crud as crud
import schemas as schemas
import models as models
from database import engine
from routers import tasks_router, users_router
import os

# Creates all database tables
models.Base.metadata.create_all(bind=engine)

# Initializes FastAPI app
app = FastAPI()

origins = os.getenv('CORS_ORIGINS', 'http://localhost:3000').split(',')

# Adds CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Includes the routers
app.include_router(tasks_router, prefix="/tasks", tags=["tasks"])
app.include_router(users_router, prefix="/users", tags=["users"])


@app.get("/")
def read_root():
    return {"Hello": "World of FastAPI"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
