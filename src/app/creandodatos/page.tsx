import React from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createInscripcion() {
  try {
    const info = await prisma.seccion.create({
      data: {
        id_seccion:9,
        id_curso: 1,
        nombre: "Política y Organización del Sistema de Gestión en Seguridad y Salud en el Trabajo de Acuerdo A La Ley 29783.",
        descripcion: "Descripcion de la seccion 1 curso ssoma",
        modulo: 1,
        fecha_inicio: new Date(),
        fecha_fin: new Date(),
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
