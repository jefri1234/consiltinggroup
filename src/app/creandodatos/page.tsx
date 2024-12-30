import React from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createSeccion(){
//crear una nueva seccion 
const seccion = await prisma.seccion.create({
  data: {
   id_seccion:32,
   id_curso:5,
   nombre:"Planeamiento Estratégico:Conceptos generales y fases",
   descripcion:"materiales del curso modulo 8",
   modulo:8
    },
    });
}

async function crearMateriales(){
  //crear una nueva materiales
  const materiales = await prisma.material.create({
    data: {
      id_material: 104,
      id_seccion: 32,
      nombre:"video clase",
      tipo:"video",
      url:"https://www.youtube.com/watch?v=8clXxIl3BFY"
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
