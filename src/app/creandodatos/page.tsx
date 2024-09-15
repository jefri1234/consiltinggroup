import React from 'react'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


//CREANDO UN MATERIAL Y REALIAZAR ASOSIACION DEL CURSO  
async function main() {
  try {
    const seccion = await prisma.material.create({
      data: {
        id_seccion:8,
        nombre:'NTP-ISO 45001',
        tipo:'pdf',
        url:'https://twbfauzwuasnjnaxywlp.supabase.co/storage/v1/object/public/materiales%20sst/modulo8/NTP-ISO%2045001.pdf?t=2024-09-15T17%3A59%3A45.042Z',
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