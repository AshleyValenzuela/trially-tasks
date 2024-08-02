from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from ..crud import create_task, get_tasks, get_task, update_task, delete_task
from .. import schemas
from ..database import get_db

router = APIRouter()


@router.post("/", response_model=schemas.Task)
def create_task_endpoint(task: schemas.TaskCreate, user_id: int, db: Session = Depends(get_db)):
    return create_task(db=db, task=task, user_id=user_id)


@router.get("/", response_model=List[schemas.Task])
def read_tasks_endpoint(user_id: int, skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    tasks = get_tasks(db, user_id=user_id, skip=skip, limit=limit)
    serialized_tasks = []
    for task in tasks:
        try:
            print(f"Task ID: {task.id}, Status: {task.status}")
            serialized_task = schemas.Task.from_orm(task)
            serialized_tasks.append(serialized_task)
        except Exception as e:
            print(f"Error serializing task {task.id}: {e}")

    return serialized_tasks


@router.get("/{task_id}", response_model=schemas.Task)
def read_task_endpoint(task_id: int, db: Session = Depends(get_db)):
    db_task = get_task(db, task_id=task_id)
    if db_task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    return db_task


@router.put("/{task_id}", response_model=schemas.Task)
def update_task_endpoint(task_id: int, task: schemas.TaskCreate, db: Session = Depends(get_db)):
    db_task = update_task(db, task_id=task_id, task=task)
    if db_task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    return db_task


@router.delete("/{task_id}", response_model=schemas.Task)
def delete_task_endpoint(task_id: int, db: Session = Depends(get_db)):
    db_task = delete_task(db, task_id=task_id)
    if db_task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    return db_task
