"use client"
import Link from 'next/link'
import React from 'react'
import { FormEvent } from 'react';
import { useState } from 'react'
import { useRouter } from 'next/navigation';


function page() {
  const [usuario, setUsuario] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [telefono, setTelefono] = useState('')

  const router= useRouter()

  async function creando(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const res = await fetch('../../../../api/createusuario',{
      method:'POST',
      body:JSON.stringify({usuario,nombre,apellido,contrasena,telefono}),
      headers:{
        "Content-Type":"application/json",
      },
    })
    //la respuesta de la api lo guardo aqui
    const usuarios = await res.json();
    if(usuarios.status==200){
      router.push('../usuarios')
    }


  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">  
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Registro de Usuario</h2>
      <form method='POST' action='#' onSubmit={creando}>
        <div className="mb-4">
          <label htmlFor="usuario" className="block text-gray-700 font-bold mb-2">
            Usuario
          </label>
          <input
            name='usuario'
            type="text"
            id="usuario"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Nombre de usuario"
            onChange={(e)=>setUsuario(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="nombre" className="block text-gray-700 font-bold mb-2">
            Nombre
          </label>
          <input
          name='nombre'
            type="text"
            id="nombre"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Nombre"
            onChange={(e)=>setNombre(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="apellido" className="block text-gray-700 font-bold mb-2">
            Apellido
          </label>
          <input
            name='apellido'
            type="text"
            id="apellido"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Apellido"
            onChange={(e)=>setApellido(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contrasena" className="block text-gray-700 font-bold mb-2">
            Contraseña
          </label>
          <input
            name='contrasena'
            type="password"
            id="contrasena"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Contraseña"
            autoComplete='password'
            onChange={(e)=>setContrasena(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="telefono" className="block text-gray-700 font-bold mb-2">
            Teléfono
          </label>
          <input
            name='telefono'
            type="tel"
            id="telefono"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Teléfono"
            onChange={(e)=>setTelefono(e.target.value)}
          />
        </div>


       
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mr-4"
          >
            Registrarse
          </button>
          <Link
            href='/pages/panel/usuarios'
            className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
          >
            regresar
          </Link>
        </div>
      </form>
    </div>
  </div>
  )
}

export default page