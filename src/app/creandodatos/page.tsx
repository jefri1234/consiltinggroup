import React from 'react'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


//CREANDO UN MATERIAL Y REALIAZAR ASOSIACION DEL CURSO  
async function main() {
  try {
    const material = await prisma.material.create({
      data: {
        nombre: 'clase grabada teorico-practico',
        tipo: 'video',
        url: 'https://twbfauzwuasnjnaxywlp.supabase.co/storage/v1/object/public/documentos-cursos/videomate.mp4?t=2024-08-29T19%3A31%3A38.307Z',
        cursoId: 1, // ID del curso existente matematica ejemplo
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