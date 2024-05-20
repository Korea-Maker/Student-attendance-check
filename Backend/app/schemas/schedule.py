from pydantic import BaseModel
from datetime import datetime

class ScheduleBase(BaseModel):
    title: str
    description: str
    start_time: datetime
    end_time: datetime

class ScheduleCreate(ScheduleBase):
    pass

class Schedule(ScheduleBase):
    id: int

    class Config:
        orm_mode = True
