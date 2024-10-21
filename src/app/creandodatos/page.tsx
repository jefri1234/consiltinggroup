import React from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createInscripcion() {
  // //crear un curso nuevo
  // const curso = await prisma.curso.create({
  //   data: {
  //     nombre: 'GESTION DE LOGISTICA Y OPERACACIONES',
  //     description: 'El mundo globalizado de hoy, demanda a las empresas modernas a operar en altos niveles de productividad que garanticen su continuidad. En este sentido, aprenderás a definir estrategias, administrar las operaciones y logística de tu organización, gestionar los riesgos, analizar la información para una mejor comprensión, mejorar los procesos, evaluar la tecnología de soporte adecuada, costear y evaluar financieramente tus propuestas y gestionar los proyectos de implementación.',
  //     duracion:'2 meses',
  //     imagen:'https://twbfauzwuasnjnaxywlp.supabase.co/storage/v1/object/public/img-cursos-consulting/diplomado_en_Logistica_y_Operaciones.png',
  //     id_profesor:3
  //     },
  //     });

//crear una inscripcion
const inscripcion = await prisma.inscripcion.create({
  data: {
    id_usuario: 4,
    id_curso: 3,
  }});


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
