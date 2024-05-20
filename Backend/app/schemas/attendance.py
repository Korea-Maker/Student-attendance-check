from pydantic import BaseModel
from datetime import datetime

class AttendanceBase(BaseModel):
    student_id: int
    date: datetime
    status: str
    check_in_time: datetime
    check_out_time: datetime

class AttendanceCreate(AttendanceBase):
    pass

class Attendance(AttendanceBase):
    id: int
    student: dict

    class Config:
        orm_mode = True
