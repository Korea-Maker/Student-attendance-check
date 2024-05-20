from pydantic import BaseModel

class UserBase(BaseModel):
    email: str
    name: str

class UserCreate(UserBase):
    password: str
    role: str

class User(UserBase):
    id: int
    role: str
    signature_photo: str

    class Config:
        orm_mode = True
