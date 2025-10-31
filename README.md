# Proyecto Web Full Stack - Python + React

## 📁 Estructura del Proyecto

```
web-project/
├── backend/                 # Backend con Python FastAPI
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py         # Punto de entrada de la aplicación
│   │   ├── config.py       # Configuración de la aplicación
│   │   ├── database.py     # Configuración de base de datos
│   │   ├── models/         # Modelos de base de datos
│   │   ├── schemas/        # Esquemas Pydantic
│   │   ├── routes/         # Rutas/Endpoints de la API
│   │   ├── services/       # Lógica de negocio
│   │   └── utils/          # Utilidades
│   ├── requirements.txt    # Dependencias de Python
│   ├── .env.example        # Variables de entorno de ejemplo
│   └── README.md
│
├── frontend/               # Frontend con React
│   ├── public/
│   ├── src/
│   │   ├── components/    # Componentes reutilizables
│   │   ├── pages/         # Páginas de la aplicación
│   │   ├── services/      # Servicios para llamadas API
│   │   ├── utils/         # Funciones utilitarias
│   │   ├── styles/        # Estilos globales
│   │   ├── App.jsx        # Componente principal
│   │   └── main.jsx       # Punto de entrada
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
└── README.md              # Este archivo
```

## 🚀 Tecnologías Utilizadas

### Backend
- **FastAPI**: Framework moderno y rápido para APIs
- **SQLAlchemy**: ORM para base de datos
- **PostgreSQL**: Base de datos relacional (o SQLite para desarrollo)
- **Pydantic**: Validación de datos
- **JWT**: Autenticación con tokens

### Frontend
- **React 18**: Biblioteca de UI
- **Vite**: Build tool ultrarrápido
- **React Router**: Navegación
- **Axios**: Cliente HTTP
- **Tailwind CSS**: Framework de estilos

## 📦 Requisitos Previos

- Python 3.9+
- Node.js 18+
- PostgreSQL (opcional, se puede usar SQLite)
- Visual Studio Code

## 🎯 Características

- ✅ API RESTful completa
- ✅ Autenticación JWT
- ✅ CRUD de usuarios
- ✅ Validación de datos
- ✅ Manejo de errores
- ✅ CORS configurado
- ✅ Responsive design
- ✅ Arquitectura escalable