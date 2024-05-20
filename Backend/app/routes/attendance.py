from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas import attendance as attendance_schema
from app.models import attendance as attendance_model
from app.database import get_db
from typing import List

router = APIRouter()

@router.post("/", response_model=attendance_schema.Attendance)
async def create_attendance(attendance: attendance_schema.AttendanceCreate, db: Session = Depends(get_db)):
    db_attendance = attendance_model.Attendance(**attendance.dict())
    db.add(db_attendance)
    db.commit()
    db.refresh(db_attendance)
    return db_attendance

@router.get("/", response_model=List[attendance_schema.Attendance])
async def read_attendance(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    attendance = db.query(attendance_model.Attendance).offset(skip).limit(limit).all()
    return attendance
