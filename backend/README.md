# Backend - FastAPI

Backend de la aplicación construido con FastAPI, SQLAlchemy y PostgreSQL/SQLite.

## 🚀 Instalación y Configuración

### 1. Crear entorno virtual

```bash
# En Windows
python -m venv venv
venv\Scripts\activate

# En Mac/Linux
python3 -m venv venv
source venv/bin/activate
```

### 2. Instalar dependencias

```bash
pip install -r requirements.txt
```

### 3. Configurar variables de entorno

Copia el archivo `.env.example` a `.env` y ajusta los valores:

```bash
cp .env.example .env
```

Edita el archivo `.env` con tus configuraciones.

### 4. Ejecutar la aplicación

```bash
# Opción 1: Con uvicorn directamente
uvicorn app.main:app --reload

# Opción 2: Con el script de Python
python -m app.main
```

La API estará disponible en: `http://localhost:8000`

## 📚 Documentación de la API

Una vez que la aplicación esté corriendo, puedes acceder a:

- **Swagger UI**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`

## 🔑 Endpoints Principales

### Autenticación

- `POST /api/v1/auth/register` - Registrar nuevo usuario
- `POST /api/v1/auth/login` - Login de usuario
- `GET /api/v1/auth/me` - Obtener usuario actual

### Usuarios

- `GET /api/v1/users/` - Listar usuarios
- `GET /api/v1/users/{id}` - Obtener usuario por ID
- `PUT /api/v1/users/{id}` - Actualizar usuario
- `DELETE /api/v1/users/{id}` - Eliminar usuario

## 🗄️ Base de Datos

Por defecto, la aplicación usa SQLite (`app.db`). Para usar PostgreSQL:

1. Instala PostgreSQL
2. Crea una base de datos
3. Actualiza `DATABASE_URL` en `.env`:
   ```
   DATABASE_URL=postgresql://usuario:password@localhost/nombre_db
   ```

## 🧪 Probar la API

Puedes probar la API con:

1. **Swagger UI** en `/docs`
2. **Postman** o **Insomnia**
3. **curl** desde la terminal:

```bash
# Registrar usuario
curl -X POST "http://localhost:8000/api/v1/auth/register" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "usuario@ejemplo.com",
    "username": "usuario",
    "password": "mipassword123",
    "full_name": "Usuario Ejemplo"
  }'

# Login
curl -X POST "http://localhost:8000/api/v1/auth/login" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "username=usuario&password=mipassword123"
```

## 📁 Estructura del Proyecto

```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py           # Punto de entrada
│   ├── config.py         # Configuración
│   ├── database.py       # Configuración de DB
│   ├── models/           # Modelos SQLAlchemy
│   ├── schemas/          # Schemas Pydantic
│   ├── routes/           # Endpoints de la API
│   ├── services/         # Lógica de negocio
│   └── utils/            # Utilidades
├── requirements.txt
├── .env.example
└── README.md
```