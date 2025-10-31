# Frontend - React + Vite

Frontend de la aplicación construido con React 18, Vite, React Router y Tailwind CSS.

## 🚀 Instalación y Configuración

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configuración

El frontend está configurado para conectarse al backend en `http://localhost:8000`.
Si necesitas cambiar esta URL, edita el archivo `src/services/api.js`.

### 3. Ejecutar en modo desarrollo

```bash
npm run dev
```

La aplicación estará disponible en: `http://localhost:5173`

### 4. Construir para producción

```bash
npm run build
```

Los archivos de producción se generarán en la carpeta `dist/`.

### 5. Vista previa de producción

```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
frontend/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── Navbar.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages/          # Páginas de la aplicación
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Dashboard.jsx
│   ├── services/       # Servicios para API
│   │   ├── api.js
│   │   ├── authService.js
│   │   └── userService.js
│   ├── utils/          # Utilidades
│   │   └── AuthContext.jsx
│   ├── styles/         # Estilos
│   │   └── index.css
│   ├── App.jsx         # Componente principal
│   └── main.jsx        # Punto de entrada
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎨 Características

- ✅ React 18 con hooks
- ✅ React Router para navegación
- ✅ Context API para estado global
- ✅ Tailwind CSS para estilos
- ✅ Axios para peticiones HTTP
- ✅ Rutas protegidas
- ✅ Autenticación JWT
- ✅ Diseño responsive

## 🔗 Rutas Disponibles

- `/` - Página de inicio
- `/login` - Inicio de sesión
- `/register` - Registro de usuario
- `/dashboard` - Panel de usuario (protegido)

## 🛠️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la build de producción
- `npm run lint` - Ejecuta el linter

## 📝 Notas

- Asegúrate de que el backend esté corriendo en `http://localhost:8000`
- Los tokens JWT se almacenan en localStorage
- El proxy de Vite redirige `/api` al backend automáticamente