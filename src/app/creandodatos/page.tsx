import React from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createInscripcion() {
  try {
    const info = await prisma.material.create({
      data: {
        id_material: 22,
        id_seccion: 8,
        nombre: "Norma ISO 45001",
        tipo: "pptx",
        url: "https://twbfauzwuasnjnaxywlp.supabase.co/storage/v1/object/public/materiales%20sst/modulo8/Norma_ISO_45001.pptx",
      },
    });
    console.log('Material creado:', info);
  } 
  catch (error) {
    console.error('Error al crear el material:', error);
  } 
  finally {
    await prisma.$disconnect();
  }
}

function CreaDatos() {
  createInscripcion();

  return (
    <div>
      Creando material...
    </div>
  );
}

export default CreaDatos;
