import React from 'react'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


//CREANDO UN MATERIAL Y REALIAZAR ASOSIACION DEL CURSO  
async function main() {
  try {
    const seccion = await prisma.seccion.create({
      data: {
        id_curso:1,
        nombre: 'mejorarmientos de trabajos altura',
        descripcion:'consta de fundamentes para proteccion'
      },
    });
    console.log('Material creado:', seccion);
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