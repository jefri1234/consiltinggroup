import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    // Parsear el body para obtener el id del curso
    const { curso } = await request.json();
    
    // Convertir el id a número
    const cursoId = parseInt(curso, 10);

    // Verificar si el id es un número válido
    if (isNaN(cursoId)) {
      return NextResponse.json({
        message: "ID inválido",
      }, { status: 400 });
    }

    // HACIENDO UN CONSULTA A TABLA MATERIALES TRAEME TODO LOS MATERIALES 
    //QUE COICIDAN CON EL ID POR EJEMPLO 1 QUE ES MATEMATICA TRAERMR TODO LOS MATERIALES QUE TIENE MATEMATICA
    const cursoEncontrado = await prisma.material.findMany({
      where: {
        cursoId: cursoId,
      },
    });    

    if (!cursoEncontrado) {
      return NextResponse.json({
        message: "Curso no encontrado",
      }, { status: 404 });
    }


    return NextResponse.json({
      message: "materiales encontrado",
      curso: cursoEncontrado,
    });

  } catch (error) {
    return NextResponse.json({
      message: "Error al procesar la solicitud",
    }, { status: 500 });
  }
}
