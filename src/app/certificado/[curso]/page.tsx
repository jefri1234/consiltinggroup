"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation"; // Importar el hook 'useRouter'
import { z } from "zod"; // Usando Zod para validación
import Image from 'next/image';

// Definición del tipo Usuario
interface Usuario {
    curso: string;
}

//componente acepte una propiedad (props) de tipo className
const CertificateVerification = ({ params }: { params: { curso: string } }) => {
    const { curso } = params;

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
                router.push(`/certificado/${curso}/${valor}`);
            }
        }
    }

    return (
        <div className='flex flex-wrap justify-center items-center gap-10 py-20 px-10'>

            <div className="flex justify-center  mb-6">
                <Image
                    src="/img/ejecutivos.png"
                    alt="Persona feliz con laptop"
                    width={350}
                    height={350}
                    className="rounded-lg"
                />
            </div>

            <div className=" max-w-md text-center lg:text-left">
                <h1 className="text-xl md:text-2xl lg:text-3xl text-white font-bold mb-4">
                    Verificación de Certificado
                </h1>
                <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-4">
                    Todos nuestros certificados se encuentran debidamente registrados para la validación laboral.
                </p>

                {/* Input para DNI */}
                <form className="mb-6">
                    <input
                        type="text"
                        name="dni"
                        ref={dniRef}
                        placeholder="ingresa tu DNI"
                        className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white mb-4"
                    />
                    {/* Mostrar el mensaje de error, si hay */}
                    {error && <p className="text-red-500 pb-3 text-center">{error}</p>}

                    <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
                        type="button"
                        onClick={handleClick}
                    >
                        Buscar
                    </button>
                </form>

                {/* Mensaje de felicitaciones */}
                <p className="text-sm md:text-base lg:text-lg text-gray-300 mt-6">
                    ¡Felicitaciones por culminar tu curso! Tu esfuerzo y dedicación te han llevado hasta aquí.
                    Ya puedes obtener el puesto laboral que deseas y recuerda que este es solo el comienzo de tu éxito profesional.
                    ¡Sigue adelante y alcanza nuevas metas!
                </p>
            </div>

        </div>
    );
};

export default CertificateVerification;
