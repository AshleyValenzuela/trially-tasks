from pydantic import BaseModel, validator
from typing import Optional
from datetime import date
from ..models import TaskStatus


class TaskBase(BaseModel):
    title: str
    description: Optional[str] = None
    status: TaskStatus
    due_date: Optional[date] = None

    @validator('status', pre=True, always=True)
    def validate_status(cls, value):
        if isinstance(value, TaskStatus):
            return value
        if isinstance(value, str):
            return TaskStatus(value)
        raise ValueError('Invalid status value', value)


class TaskCreate(TaskBase):
    pass


class Task(TaskBase):
    id: int
    user_id: int

    class Config:
        orm_mode = True
