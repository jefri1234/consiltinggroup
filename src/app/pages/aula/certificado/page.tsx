"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation"; // Importar el hook 'useRouter'
import { z } from "zod"; // Usando Zod para validación
import Image from "next/image";

function Certificado() {
  const dniRef = useRef<HTMLInputElement>(null); // Definir el tipo correctamente
  const [error, setError] = useState(""); // Estado para manejar errores
  const router = useRouter(); // Inicializamos useRouter para redirigir

  // Definimos el esquema de validación
  const dniSchema = z
    .string()
    .min(1, { message: "El DNI no puede estar vacío" })
    .length(8, { message: "El DNI debe ser un número de 8 dígitos" });

  function handleClick() {
    if (dniRef.current) { // Aseguramos que dniRef.current no sea null
      const valor = dniRef.current.value;
      const result = dniSchema.safeParse(valor);

      if (!result.success) {
        setError(result.error.errors[0].message); // Mostrar error si no pasa la validación
      } else {
        setError(""); // Limpiar errores
        // Redirigir a la ruta dinámica pasando el DNI en la URL
        router.push(`/pages/aula/certificado/${valor}`);
      }
    }
  }

  return (
    <div className="bg-gray-950 h-screen flex flex-wrap justify-center items-center text-white text-center gap-20 py-10">

      <div>
        <Image src="/img/logro.jpg" alt="Logo" width={500} height={500} className=" rounded-lg" />
      </div>

      <div className="flex flex-col gap-10 bg-gray-900 p-10 pb-14 rounded-s-xl">
        <div>
          <h1 className="text-3xl font-bold">Descarga tu certificado</h1>
          <p className="text-lg">Ingresa tu DNI para obtener tu certificado</p>
        </div>

        <form className="bg-gray-800 py-10 px-20 pb-20 flex flex-col text-white text-center rounded-lg">
          <div className="flex flex-col gap-5">
            <label className="text-xl">INGRESA TU DNI:</label>
            <input
              type="text"
              name="dni"
              ref={dniRef}
              className="text-gray-700 p-1 rounded-md text-center"
              placeholder="ingresa tu DNI"
              autoFocus
            />
          </div>

          {/* Mostrar el mensaje de error, si hay */}
          {error && <p className="text-red-500 mt-2">{error}</p>}

          <div>
            <button
              type="button"
              onClick={handleClick}
              className="bg-green-600 px-20 py-1 rounded-md max-w-min m-auto mt-2 hover:bg-green-700 transition-all"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Certificado;
