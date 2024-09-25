import {PrismaClient } from "@prisma/client";
import Link from "next/link";


async function Cursos() {
  const prisma = new PrismaClient()

 async function listar(){
  return await prisma.curso.findMany();
  }

  const cursos= await listar();
    return (
    <div className="container mx-auto px-3">
    <h1 className="text-3xl font-bold mb-4 mt-5 text-center">Cursos Registrados</h1>

      <div className="flex justify-between">
      <Link href='/pages/panel/cursos/createcurso' 
      className="p-3 bg-green-800 my-3 inline-block rounded-lg text-white font-bold">
         Crear curso
      </Link>
      <Link href='/pages/panel' 
      className="p-3 bg-blue-800 my-3 inline-block rounded-lg text-white font-bold">
         Regresar a Panel
      </Link>
      </div>

    <div className="overflow-x-auto">

      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-2 px-4 text-left">ID</th>
            <th className="py-2 px-4 text-left">Nombre</th>
            <th className="py-2 px-4 text-left">Description</th>
            <th className="py-2 px-4 text-left">Instructor</th>
            <th className="py-2 px-4 text-left">duracion</th>
            <th className="py-2 px-4 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
          cursos.map((curso)=>(
          <tr className="border-b" key={curso.id_curso}>
            <td className="py-2 px-4">{curso.id_curso}</td>
            <td className="py-2 px-4">{curso.nombre}</td>
            <td className="py-2 px-4">{curso.description}</td>
            <td className="py-2 px-4">{curso.duracion}</td>
            <td className="py-2 px-4">
              
              <Link href={`/pages/panel/cursos/${curso.id_curso}`} className="px-3 py-2 bg-blue-600 my-3 inline-block rounded-lg text-white font-bold mr-2">
                editar
              </Link>
              <Link href='#' className="px-3 py-2 bg-red-600 my-3 inline-block rounded-lg text-white font-bold">
              eliminar
              </Link>
            </td>
          </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  </div>
    )
}
export default Cursos