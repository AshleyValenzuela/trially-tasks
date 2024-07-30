import logging
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
import crud as crud
import schemas as schemas
import models as models
from database import SessionLocal, engine
from routers import tasks_router, users_router

# Create all database tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Dependency to get a database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Include the routers
app.include_router(tasks_router, prefix="/tasks", tags=["tasks"])
app.include_router(users_router, prefix="/users", tags=["users"])

@app.get("/")
def read_root():
    logger.info("Root endpoint called")
    return {"Hello": "World"}

import time
while True:
    time.sleep(100)
