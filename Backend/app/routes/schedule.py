from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas import schedule as schedule_schema
from app.models import schedule as schedule_model
from app.database import get_db
from typing import List

router = APIRouter()

@router.post("/", response_model=schedule_schema.Schedule)
async def create_schedule(schedule: schedule_schema.ScheduleCreate, db: Session = Depends(get_db)):
    db_schedule = schedule_model.Schedule(**schedule.dict())
    db.add(db_schedule)
    db.commit()
    db.refresh(db_schedule)
    return db_schedule

@router.get("/", response_model=List[schedule_schema.Schedule])
async def read_schedules(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    schedules = db.query(schedule_model.Schedule).offset(skip).limit(limit).all()
    return schedules
