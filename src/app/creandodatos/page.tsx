import React from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createInscripcion() {
  try {
    const info = await prisma.seccion.create({
      data: {
        id_seccion: 8,
        id_curso: 2,
        nombre: "IMP L EMENTACIÓN Y AUDITORIA DE SGSST BASADO EN LA I SO 45001:2018",
        descripcion: "Revisión de la Norma ISO 45001, Contexto de la Organización, Liderazgo y Participación de los Trabajadores, Planificación, Apoyo, Operación, Evaluación del Desempeño.",
        fecha_inicio: new Date(),
        fecha_fin: new Date(),
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
