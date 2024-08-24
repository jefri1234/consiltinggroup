import React from 'react'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


//CREANDO UN USUARIO Y ASIGNANDO CURSOS 
async function main() {
  try {
    const material = await prisma.material.create({
      data: {
        nombre: 'Introducción a Matemática',
        tipo: 'video',
        url: 'https://ejemplo.com/introduccion-matematica',
        cursoId: 1, // ID del curso existente
      },
    });
    console.log('Material creado:', material);
  } catch (error) {
    console.error('Error al crear el material:', error);
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