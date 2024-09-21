import React from 'react'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


//CREANDO UN MATERIAL Y REALIAZAR ASOSIACION DEL CURSO  
async function main() {
  try {
    const imfo = await prisma.profesor.create({
      data: {
        nombre: 'MARCOS ANTONIO',
        apellido: 'COLONIA ROMERO',
        email: 'sst@gmail.com',
        linkedin: 'Marcos Antonio Colonia Romero',
        telefono: '99999999',
        descripcion: 'Ingeniero Industrial y consultor en sistemas integrados de gestión, certificado en ISO 45001, ISO 9001, ISO 37001, ISO 14001, ISO 31000, OHSAS 18001, SA 8000:2014, con 13 años de experiencia en el sector industrial, retail, hidrocarburos y de servicios, liderando seguridad y salud integral, ambiental, calidad, proyectos, mantenimiento, producción y operaciones. Con MBA (UTP) en Administración de Empresas, Máster en Prevención de Riesgos Laborales, Diplomado en Habilidades Directivas en la Universidad ESAN. Actualmente labora como Sub gerente de Seguridad y Salud en el Trabajo en OSLO LOGISTICS, a laborado como Jefe de Operaciones QHSE en Support Brigades Fire y Safety S.A.C., Coordinador general de SST en CAASA - Supply y Operations S.A.C. Ah enseñado en FRI ESAN, SGS ACADEMY, SENATI y entre otras instituciones.',
      },
    });
    console.log('Material creado:', imfo);

  } catch (error) {
    console.error('Error al crear la inscripcion:', error);
  }
}

function crenaodatos() {
main()
  return (
    <div>
        crenaodatos
    </div>
  )
}

export default crenaodatos