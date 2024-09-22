import React from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createInscripcion() {
  try {
    const info = await prisma.inscripcion.create({
      data: {
        id_curso: 1,
        id_usuario: 1,
      },
    });
    console.log('Inscripción creada:', info);
  } catch (error) {
    console.error('Error al crear la inscripción:', error);
  } finally {
    await prisma.$disconnect();
  }
}

function CreaDatos() {
    createInscripcion();

  return (
    <div>
      Creando inscripción...
    </div>
  );
}

export default CreaDatos;
