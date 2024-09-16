import React from 'react'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


//CREANDO UN MATERIAL Y REALIAZAR ASOSIACION DEL CURSO  
async function main() {
  try {
    const seccion = await prisma.material.create({
      data: {
        id_seccion:7,
        nombre:'REGISTRO_SIMPLIFICADO_SGSST_PEQUENA-EMPRESA',
        tipo:'xlsm',
        url:'https://twbfauzwuasnjnaxywlp.supabase.co/storage/v1/object/public/materiales%20sst/modulo7/REGISTRO_SIMPLIFICADO_SGSST_PEQUENA-EMPRESA%20(1).xlsm?t=2024-09-16T15%3A37%3A41.596Z',
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