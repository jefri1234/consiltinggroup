import React from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createSeccion(){
//crear una nueva seccion 
const seccion = await prisma.seccion.create({
  data: {
   id_seccion:31,
   id_curso:3,
   nombre:"Tecnología Analítica y Data Science en Logística y Operaciones",
   descripcion:"Recopilación y análisis de datos de la cadena de suministro",
   modulo:8
    },
    });
}

async function crearMateriales(){
  //crear una nueva materiales
  const materiales = await prisma.material.create({
    data: {
      id_material: 95,
      id_seccion: 31,
      nombre:"video de clase",
      tipo:"video",
      url:"https://www.youtube.com/watch?v=YJOsfNCCbEQ"
    }
  })

}


function CreaDatos() {
  return (

    <div>
      Creando...
    </div>
  );
}

export default CreaDatos;
