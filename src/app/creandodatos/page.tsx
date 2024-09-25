import React from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createInscripcion() {
  try {
    const info = await prisma.material.create({
      data: {
        id_material:24,
        id_seccion:9,
        nombre:"MATERIAL DE LECTURA DEL 1ER MODULO",
        tipo:"zip",
        url:"https://twbfauzwuasnjnaxywlp.supabase.co/storage/v1/object/public/materiales%20ssoma/modulo1/MATERIAL%20DE%20LECTURA%20DEL%201ER%20MODULO.zip?t=2024-09-25T00%3A25%3A35.042Z"
      },
    });
    console.log('Seccion creada:', info);
  } 
  catch (error) {
    console.error('Error al crear la seccion:', error);
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
