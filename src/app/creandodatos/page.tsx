import React from 'react'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


//CREANDO UN MATERIAL Y REALIAZAR ASOSIACION DEL CURSO  
async function main() {
  try {
    const imfo = await prisma.user.create({
      data: {
        tipoUser: 'estudiante',
        usuario: 'ssoma2020',
        nombre: 'SOMA ',
        apellido: 'SOMA ',  
        contrasena: 'consulting',
        telefono: '99999999',
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