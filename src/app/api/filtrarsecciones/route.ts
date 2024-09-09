import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

//OBTENER TODAS LAS SECCIONES DEL CURSO CON idcurso

export async function POST(request: NextRequest) {
const { idcurso } = await request.json();


    // Verificar si userfound es un número
    if (typeof idcurso !== 'number') {
        return NextResponse.json({ error: 'Invalid idcurso value' }, { status: 500 });
      }

const secciones = await prisma.seccion.findMany({
    where: {
        id_seccion: idcurso
        }
})

console.log(secciones)


return NextResponse.json({
     message: 'Hello, world!',
     id:idcurso
    });
}