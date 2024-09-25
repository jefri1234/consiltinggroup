import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    // Obtener del cuerpo de la solicitud el id de un usuario
    const { userfound } = await request.json();

    // Verificar si userfound es un número
    if (typeof userfound !== 'number') {
      return NextResponse.json({ error: 'Invalid userfound value' }, { status: 400 });
    }

    // Obtener todos los cursos a los que el usuario está inscrito
    const cursos = await prisma.inscripcion.findMany({
      where: {
        id_usuario: userfound
      },
      include: {
        curso: true 
      },
      
    });

    // Extraer solo los detalles de los cursos
    const cursosDetails = cursos.map(inscripcion => inscripcion.curso);


    // Retornar la respuesta con los detalles de los cursos
    return NextResponse.json(cursosDetails);
  } 


  catch (error) {
    console.error('Error en la consulta:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

