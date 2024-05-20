from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()

class Attendance(Base):
    __tablename__ = 'attendance'
    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey('users.id'))
    date = Column(DateTime, index=True)
    status = Column(String)
    check_in_time = Column(DateTime)
    check_out_time = Column(DateTime)
    student = relationship("User")
