import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center text-white px-4">
        <h1 className="text-6xl font-bold mb-6">
          Bienvenido a Mi Proyecto Web
        </h1>
        <p className="text-2xl mb-8">
          Una aplicación moderna construida con Python y React
        </p>
        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Iniciar Sesión
          </Link>
          <Link
            to="/register"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition inline-block"
          >
            Registrarse
          </Link>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">⚡ Rápido</h3>
            <p>Backend construido con FastAPI para máximo rendimiento</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">🔒 Seguro</h3>
            <p>Autenticación JWT y validación de datos robusta</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">📱 Responsive</h3>
            <p>Diseño adaptable con Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;