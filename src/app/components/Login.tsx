"use client";
import React, { FormEvent, useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false); // Estado para la transición
  const [backgroundImageLoaded, setBackgroundImageLoaded] = useState(false); // Para controlar si la imagen de fondo se ha cargado
  const imageRef = useRef(null);

  // Usamos useEffect para controlar la visibilidad al cargar
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Cambia el estado de carga de la imagen una vez que la imagen de fondo está cargada
  const handleImageLoad = () => {
    setBackgroundImageLoaded(true);
  };

  async function verificando(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await fetch("../api/autenticacion", {
      method: "POST",
      body: JSON.stringify({ usuario, contrasena }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resultado = await res.json();

    if (resultado.data?.token) {
      document.cookie = `token=${resultado.data.token}; path=/; secure`;

      if (resultado.alumno.tipoUser === "admin") {
        router.push("/pages/panel");
      } else if (
        resultado.alumno.tipoUser === "estudiante" ||
        resultado.alumno.tipoUser === "profesor"
      ) {
        router.push(`/pages/aula?userfound=${resultado.alumno.id_usuario}`);
      }
    } else {
      setError(resultado.message);
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10 w-full"
      style={{
        backgroundImage: backgroundImageLoaded
          ? 'url("/img/ejecutivos-login.jpg")' // La imagen de fondo optimizada
          : 'url("/img/ejecutivos-login-placeholder.jpg")', // Imagen de baja calidad o placeholder
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`min-w-min bg-gray-900 rounded-xl shadow-lg flex flex-col justify-between items-center py-14 px-10 transition-all duration-1000 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Fondo oscuro semi-transparente
        }}
      >
        <div className="text-center flex flex-col items-center">
          <h1 className="text-4xl font-bold text-white mb-4">Bienvenido al Aula Virtual</h1>
          <p className="text-gray-200 mb-6">
            Ofrecemos una variedad de cursos y<br />
            diplomados a nivel nacional. Aprende<br />
            desde cualquier lugar y accede a contenido exclusivo.
          </p>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg pb-20"
         style={{
          backgroundColor: "rgba(0, 0, 0, 0.3)", // Fondo oscuro semi-transparente
        }}
        >
          <h2 className="text-3xl font-semibold text-white text-center mb-6">
            Inicia Sesión
          </h2>
          <p className="text-gray-100 text-center mb-4">
            Ingresa tus datos para acceder al contenido exclusivo
          </p>
          <form method="POST" action="#" onSubmit={verificando} className="space-y-4">
            <input
              type="text"
              placeholder="Usuario"
              name="usuario"
              autoComplete="username"
              onChange={(e) => setUsuario(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="password"
              placeholder="Contraseña"
              name="contrasena"
              autoComplete="current-password"
              onChange={(e) => setContrasena(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="submit"
              value="Ingresar"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-all cursor-pointer"
            />
          </form>
          {error && (
            <p className="error-message text-red-500 text-center mt-5 font-bold">
              {error}
            </p>
          )}
        </div>
      </div>

      {/* Usamos next/image para cargar la imagen y que sea cacheada */}
      <Image
        src="/img/ejecutivos-login.jpg" // Ruta de la imagen
        alt="Imagen de fondo"
        layout="fill" // Hace que ocupe todo el contenedor
        objectFit="cover" // Ajusta la imagen de fondo
        quality={100} // Calidad máxima
        priority={true} // Marca la imagen como prioridad de carga
        onLoadingComplete={handleImageLoad} // Controla cuando la imagen se ha cargado
        style={{ visibility: "hidden" }} // La imagen no se muestra directamente
        ref={imageRef}
      />
    </div>
  );
}

export default Login;
