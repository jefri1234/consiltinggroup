"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
function Login() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

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
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between">
        {/* Left section - Text and Image */}
        <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-4xl font-bold text-white mb-4">Bienvenido al Aula Virtual</h1>
          <p className="text-gray-400 mb-6">
            Ofrecemos una variedad de <span className="text-blue-500 font-semibold">cursos</span> y{" "}
            <span className="text-blue-500 font-semibold">diplomados</span> a nivel nacional. Aprende
            desde cualquier lugar y accede a contenido exclusivo.
          </p>
          <Image
            src="/img/persona-login.png"
            alt="persona-login"
            width={100}
            height={100}
            className="w-full max-w-lg h-auto md:max-w-md lg:max-w-lg xl:max-w-xl" 
          />
        </div>

        {/* Right section - Login Form */}
        <div className="md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg pb-20">
          <h2 className="text-3xl font-semibold text-white text-center mb-6">
            Inicia Sesión
          </h2>
          <p className="text-gray-400 text-center mb-4">
            Ingresa tus datos para acceder al contenido exclusivo
          </p>
          <form
            method="POST"
            action="#"
            onSubmit={verificando}
            className="space-y-4"
          >
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
    </div>
  );
}

export default Login;
