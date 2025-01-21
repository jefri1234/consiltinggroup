import React from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createSeccion() {
  //crear una nueva seccion 
  const seccion = await prisma.seccion.create({
    data: {
      id_seccion: 40,
      id_curso: 6,
      nombre: "Habilidades blandas para la implementación de Sistemas Integrados de Gestión",
      descripcion: "materiales del curso - modulo 8",
      modulo: 8
    },
  });
}

async function crearMateriales() {
  //crear una nueva materiales
  const materiales = await prisma.material.create({
    data: {
      id_material: 104,
      id_seccion: 32,
      nombre: "video clase",
      tipo: "video",
      url: "https://www.youtube.com/watch?v=8clXxIl3BFY"
    }
  })

}

//crear un nuevo curso
async function crearCurso() {
  const curso = await prisma.curso.create({
    data: {
      id_curso: 6,
      nombre: "Gestión de Sistemas Integrados ISO: 9001, ISO:14001 E ISO: 45001",
      description: "Este Diplomado le presentará y le familiarizará con los requisitos de las normas ISO 9001:2015, ISO 14001:2015 e ISO 45001:2018 Comprenderá mejor los diversos sistemas de gestión incluidos en las normas y obtendrá confianza en cómo implementarlos eficazmente en su organización.",
      duracion: "2 meses",
      imagen: "https://twbfauzwuasnjnaxywlp.supabase.co/storage/v1/object/public/img-cursos-consulting/gestion-sistemas-integrados-iso.jpg",
      id_profesor:5
    }
  })
}

//crear una inscripcion
async function crearInscripcion() {
  const inscripcion = await prisma.inscripcion.create({
    data: {
      id_inscripcion: 5,
      id_usuario: 6,
      id_curso: 6
    }
  })
}


  function CreaDatos() {
    createSeccion();
    return (

      <div>
        Creando...
      </div>
    );
  }

  export default CreaDatos;
