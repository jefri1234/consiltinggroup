"use client"
import React from 'react'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function EditCurso({ params }: { params: { id: string } }) {

    const [nombre, setNombre] = useState('')
    const [description, setDescription] = useState('')
    const [Instructor, setInstructor] = useState('')
    const [duracion, setDuracion] = useState('')
    const router= useRouter()

    useEffect(() => {
        fetch('../../../../api/curso/'+params.id)
            .then((res )=> res.json())
            .then((data) => {
              setNombre(data.data.nombre)
              setDescription(data.data.description)
              setInstructor(data.data.Instructor)
              setDuracion(data.data.duracion)
            });
      }, [params.id]);//  Agregar params.id como dependencia 
          //Esto asegurará que el efecto se ejecute nuevamente si params.id cambia.

      const actualizar = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
       const actualizar= await fetch('../../../../api/curso/'+params.id,{
          method:"PUT",
          body:JSON.stringify({nombre,description,Instructor,duracion}),
          headers:{
            "Content-Type":"application/json"
          },
        });
        
        const cursoUpdate=await actualizar.json();
        console.log({cursoUpdate})
        router.push("/pages/panel/cursos/")
        router.refresh()
      }





  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">  
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Actualizar curso</h2>
      <form method='POST' action='#' onSubmit={actualizar}>
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-gray-700 font-bold mb-2">
            nombre
          </label>
          <input
            name='nombre'
            type="text"
            id="nombre"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Nombre de curso"
            onChange={(e)=>setNombre(e.target.value)}
            value={nombre}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            description
          </label>
          <input
          name='description'
            type="text"
            id="description"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholder="escribe description del curso"
            onChange={(e)=>setDescription(e.target.value)}
            value={description}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Instructor" className="block text-gray-700 font-bold mb-2">
            instructor
          </label>
          <input
            name='Instructor'
            type="text"
            id="Instructor"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholder="ingrese quien es el instructor"
            onChange={(e)=>setInstructor(e.target.value)}
            value={Instructor}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="duracion" className="block text-gray-700 font-bold mb-2">
            duracion
          </label>
          <input
            name='duracion'
            type="text"
            id="duracion"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholder="ingrese la duracion del curso"
            onChange={(e)=>setDuracion(e.target.value)}
            value={duracion}
          />
        </div>
       
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 mr-4"
          >
            actualizar
          </button>
          <Link
            href='/pages/panel/cursos'
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

export default EditCurso