import models as models
import schemas as schemas
from sqlalchemy.orm import Session


def get_task(db: Session, task_id: int):
    return db.query(models.Task).filter(models.Task.id == task_id).first()


def get_tasks(db: Session, user_id: int, skip: int = 0, limit: int = 10):
    return db.query(models.Task).filter(models.Task.user_id == user_id).offset(skip).limit(limit).all()


def create_task(db: Session, task: schemas.TaskCreate, user_id: int):
    db_task = models.Task(**task.dict(), user_id=user_id)
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    return db_task


def update_task(db: Session, task_id: int, task: schemas.TaskCreate):
    db_task = db.query(models.Task).filter(
        models.Task.task_id == task_id).first()
    for key, value in task.dict().items():
        setattr(db_task, key, value)
    db.commit()
    db.refresh(db_task)
    return db_task


def delete_task(db: Session, task_id: int):
    db_task = db.query(models.Task).filter(
        models.Task.task_id == task_id).first()
    db.delete(db_task)
    db.commit()
    return db_task
