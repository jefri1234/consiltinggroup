import React from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createInscripcion() {
  try {
    const info = await prisma.material.create({
      data: {
        id_material:40,
        id_seccion:16,
        nombre:"MATERIAL DE LECTURA",
        tipo:"zip",
        url:"https://twbfauzwuasnjnaxywlp.supabase.co/storage/v1/object/public/materiales%20ssoma/modulo8/MATERIAL%20DE%20LECTURA.zip"
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
