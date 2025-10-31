from fastapi import APIRouter
from .auth import router as auth_router
from .users import router as users_router

# Router principal de la API
api_router = APIRouter()

# Incluir routers
api_router.include_router(auth_router, prefix="/auth", tags=["auth"])
api_router.include_router(users_router, prefix="/users", tags=["users"])