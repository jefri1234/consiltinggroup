import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import LogoutButton from '@/app/components/botonCerrarSesion'
import DownloadButton from "@/app/components/Dowloadbuttom";

async function page() {
    const prisma = new PrismaClient()

    async function listar() {
        return await prisma.userRegistrados.findMany();
    }

    const usuarios = await listar();
    return (
        <div className="container mx-auto px-3">
            <h1 className="text-3xl font-bold mb-4 mt-5 text-center">INSCRIPCION DE USARIOS REGISTRADOS</h1>

            <div className="flex justify-between">
                <Link href='/pages/panel'
                    className="p-3 bg-blue-800 my-3 inline-block rounded-lg text-white font-bold">
                    Regresar a Panel
                </Link>
                <LogoutButton />
                <DownloadButton/>
            </div>

            <div className="overflow-x-auto">

                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="py-2 px-4 text-left">ID-USUARIO</th>
                            <th className="py-2 px-4 text-left">Nombre</th>
                            <th className="py-2 px-4 text-left">Apellido</th>
                            <th className="py-2 px-4 text-left">Teléfono</th>
                            <th className="py-2 px-4 text-left">EMAIL</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            usuarios.map((user) => (
                                <tr className="border-b" key={user.id_user}>
                                    <td className="py-2 px-4 text-left">{user.id_user}</td>
                                    <td className="py-2 px-4">{user.nombre}</td>
                                    <td className="py-2 px-4">{user.apellido}</td>
                                    <td className="py-2 px-4">{user.telefono}</td>
                                    <td className="py-2 px-4">{user.email}</td>
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