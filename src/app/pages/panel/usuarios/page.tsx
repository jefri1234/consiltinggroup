import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import LogoutButton from '@/app/components/botonCerrarSesion'

async function page() {
  const prisma = new PrismaClient()

  async function listar() {
    return await prisma.user.findMany();
  }

  const usuarios = await listar();
  return (
    <div className="container mx-auto px-3">
      <h1 className="text-3xl font-bold mb-4 mt-5 text-center">Usuarios Registrados</h1>

      <div className="flex justify-between">
        <Link href='/pages/panel/usuarios/createusuario'
          className="p-3 bg-green-800 my-3 inline-block rounded-lg text-white font-bold">
          Crear Usuario
        </Link>
        <Link href='/pages/panel'
          className="p-3 bg-blue-800 my-3 inline-block rounded-lg text-white font-bold">
          Regresar a Panel
        </Link>
        <LogoutButton/>
      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4 text-left">ID</th>
              <th className="py-2 px-4 text-left">Tipo usuario</th>
              <th className="py-2 px-4 text-left">Usuario</th>
              <th className="py-2 px-4 text-left">Nombre</th>
              <th className="py-2 px-4 text-left">Apellido</th>
              <th className="py-2 px-4 text-left">Contraseña</th>
              <th className="py-2 px-4 text-left">Teléfono</th>

              <th className="py-2 px-4 text-left">ACCIONES</th>

            </tr>
          </thead>
          <tbody>
            {
              usuarios.map((user) => (
                <tr className="border-b" key={user.id}>
                  <td className="py-2 px-4">{user.id}</td>
                  <td className="py-2 px-4">{user.tipoUser}</td>
                  <td className="py-2 px-4">{user.usuario}</td>
                  <td className="py-2 px-4">{user.nombre}</td>
                  <td className="py-2 px-4">{user.apellido}</td>
                  <td className="py-2 px-4">{user.contrasena}</td>
                  <td className="py-2 px-4">{user.telefono}</td>
                  <td className="py-2 px-4">

                    <Link href={`/pages/panel/usuarios/${user.id}`} className="px-3 py-2 bg-blue-600 my-3 inline-block rounded-lg text-white font-bold mr-2">
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
export default page