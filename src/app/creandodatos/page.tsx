import React from 'react'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


//CREANDO UN MATERIAL Y REALIAZAR ASOSIACION DEL CURSO  
async function main() {
  try {
    const imfo = await prisma.inscripcion.create({
      data: {
        id_usuario:1,
        id_curso:3,
        fecha_inscripcion:new Date(),
      },
    });
    console.log('Material creado:', imfo);
  } catch (error) {
    console.error('Error al crear la inscripcion:', error);
  }
}

function crenaodatos() {
main()
  return (
    <div>
        crenaodatos
    </div>
  )
}

export default crenaodatos