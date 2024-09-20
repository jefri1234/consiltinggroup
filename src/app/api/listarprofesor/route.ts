import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { idprofe } = await request.json();
    //convertir profesor a numero
    const profesorNumber = parseInt(idprofe);
    console.log("profesorNumber en el servidor", profesorNumber)
    if (typeof profesorNumber !== 'number') {
      return NextResponse.json({ error: 'Invalid profesor value' }, { status: 400 });
    }


    const profe = await prisma.profesor.findUnique({
      where: {
        id_profesor: profesorNumber
      }
    });

    console.log("informacion del profesor", profe)
    return NextResponse.json(profe);
  } 

  catch (error) {
    console.error('Error fetching profesor:', error);
    return NextResponse.json({ error: 'Failed to fetch profesor' }, { status: 500 });
  }
}

