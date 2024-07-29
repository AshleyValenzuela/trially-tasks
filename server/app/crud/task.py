import models as models
import schemas as schemas
from sqlalchemy.orm import Session

def get_task(db: Session, task_id: int):
    return db.query(models.Task).filter(models.Task.id == task_id).first()

def get_tasks(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Task).offset(skip).limit(limit).all()

def create_task(db: Session, task: schemas.TaskCreate):
    db_task= models.Task(name=task.name, description=task.description)
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    return db_task
