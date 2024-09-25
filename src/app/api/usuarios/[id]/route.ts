import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//difine the interfaz for the parameters
// Definición de la interfaz para los parámetros
//
interface Params {
    id: string;
    
}

export async function GET(request:NextRequest , {params}:{params:Params}){
    //find user 😀
    const user = await prisma.user.findUnique(
        {
            where:{
                id_usuario:Number(params.id)
            }
        }
    )
    //send the user foudn
    return NextResponse.json({
        status:200,
        message:"user find",
        data:user
    })
}

export async function PUT(request: NextRequest, { params }: { params: Params }) {
    try {
        // Convertir el cuerpo de la petición a JSON
        const data = await request.json();

        // Actualizar el usuario en la base de datos
        const UserUpdate = await prisma.user.update({
            where: { id_usuario: Number(params.id) },
            data: data
        });

        // Cerrar la conexión de Prisma
        await prisma.$disconnect();
        // Enviar respuesta con los datos actualizados
        return NextResponse.json({
            message: "Task updated",
            UserUpdate
        });

        
    } 
    catch (error) {
        // Manejo de errores
        console.error("Error updating task:", error);
        
        // Cerrar la conexión de Prisma en caso de error
        await prisma.$disconnect();

        return NextResponse.json(
            { message: "Error updating task"},
            { status: 500 }
        );
    }
}
