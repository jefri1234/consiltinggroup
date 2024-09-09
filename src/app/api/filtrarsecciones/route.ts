import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

//OBTENER TODAS LAS SECCIONES DEL CURSO CON idcurso

export async function POST(request: NextRequest) {
const { idcurso } = await request.json();

    const identificador = parseInt(idcurso)
    const secciones = await prisma.seccion.findMany({
        where: {
            id_curso: identificador
            }
        })

        console.log(secciones)

return NextResponse.json({
     message: 'Hello, world!',
     id:idcurso
    });
}