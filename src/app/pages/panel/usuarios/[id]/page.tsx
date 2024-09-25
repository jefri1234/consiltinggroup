"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function Page({ params }: { params: { id: string } }) {

  const [usuario, setUsuario] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [telefono, setTelefono] = useState('')
  const router =useRouter()

  useEffect(() => {
    fetch('../../../../api/usuarios/'+params.id)
        .then((res )=> res.json())
        .then((data) => {
          setUsuario(data.data.usuario)
          setNombre(data.data.nombre)
          setApellido(data.data.apellido)
          setContrasena(data.data.contrasena)
          setTelefono(data.data.telefono)
        });
  }, [params.id]);


  const update = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
   const actualizar= await fetch('../../../../api/usuarios/'+params.id,{
      method:"PUT",
      body:JSON.stringify({usuario,nombre,apellido,contrasena,telefono}),
      headers:{
        "Content-Type":"apllication/json"
      },
    });
    const userUpdate=await actualizar.json();
    console.log({userUpdate})
    router.push("/pages/panel/usuarios/")
    router.refresh()
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Actualizar Usuario</h2>
      <form onSubmit={update}>
        <div className="mb-4">
          <label htmlFor="usuario" className="block text-gray-700 font-bold mb-2">
            Usuario
          </label>
          <input
            type="text"
            id="usuario"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Nombre de usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            autoFocus
          />
        </div>

        <div className="mb-4">
          <label htmlFor="nombre" className="block text-gray-700 font-bold mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="apellido" className="block text-gray-700 font-bold mb-2">
            Apellido
          </label>
          <input
            type="text"
            id="apellido"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contrasena" className="block text-gray-700 font-bold mb-2">
            Contraseña
          </label>
          <input
            
            type="password"
            id="contrasena"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            autoComplete='contrasena'
          />
        </div>

        <div className="mb-4">
          <label htmlFor="telefono" className="block text-gray-700 font-bold mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mr-5"
          >
            Acutalizar
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

export default Page