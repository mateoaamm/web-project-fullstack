from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime


# Schema base de Usuario
class UserBase(BaseModel):
    email: EmailStr
    username: str
    full_name: Optional[str] = None
    is_active: Optional[bool] = True
    is_superuser: Optional[bool] = False


# Schema para crear usuario
class UserCreate(UserBase):
    password: str


# Schema para actualizar usuario
class UserUpdate(BaseModel):
    email: Optional[EmailStr] = None
    username: Optional[str] = None
    full_name: Optional[str] = None
    password: Optional[str] = None
    is_active: Optional[bool] = None


# Schema para respuesta de usuario
class User(UserBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True


# Schema para usuario en DB (con password hash)
class UserInDB(User):
    hashed_password: str


# Schema para Token
class Token(BaseModel):
    access_token: str
    token_type: str


# Schema para datos del Token
class TokenData(BaseModel):
    username: Optional[str] = None