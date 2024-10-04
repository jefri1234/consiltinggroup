"use client"
import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

function Login() {
    const [usuario, setUsuario] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [error, setError] = useState<string | null>(null);
    const router = useRouter()

    async function verificando(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const res = await fetch('../api/autenticacion', {
            method: "POST",
            body: JSON.stringify({ usuario, contrasena }),
            headers: {
                "Content-Type": "application/json",
            },
        })

        const resultado = await res.json();

        if (resultado.data?.token) {
            document.cookie = `token=${resultado.data.token}; path=/; secure`;

            if (resultado.alumno.tipoUser === "admin") {
                router.push('/pages/panel');
            } else if (resultado.alumno.tipoUser === "estudiante" || resultado.alumno.tipoUser === "profesor") {
                router.push(`/pages/aula?userfound=${resultado.alumno.id_usuario}`);
            }
        } else {
            setError(resultado.message);
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-950'>
            <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg">
                <h2 className='text-3xl font-semibold text-white text-center mb-6'>Bienvenido al Aula Virtual</h2>
                <p className="text-gray-400 text-center mb-4">Ingresa tus datos para acceder al contenido exclusivo</p>
                <form method='POST' action='#' onSubmit={verificando} className='space-y-4'>
                    <input
                        type="text"
                        placeholder="Usuario"
                        name='usuario'
                        autoComplete="username"
                        onChange={(e) => setUsuario(e.target.value)}
                        className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        name='contrasena'
                        autoComplete="current-password"
                        onChange={(e) => setContrasena(e.target.value)}
                        className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <input
                        type="submit"
                        value='Ingresar'
                        className='w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-all cursor-pointer'
                    />
                </form>
                {error && <p className="error-message text-red-500 text-center mt-5 font-bold">{error}</p>}
            </div>
        </div>
    )
}

export default Login;
