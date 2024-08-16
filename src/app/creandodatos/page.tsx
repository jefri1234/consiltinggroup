import React from 'react'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


//CREANDO UN USUARIO Y ASIGNANDO CURSOS 
async function main() {
    // Crear usuarios
     await prisma.user.create({
      data: {
        usuario: 'jeff123_123',
        nombre: 'jefferson',
        apellido: 'obregon',
        contrasena: 'jeff11',
        telefono: '907656456',
        courses: {
          connect: [
            { id: 1 }, // ID de un curso existente
            { id: 2 },  // ID de otro curso existente
            { id: 3},
            { id: 4}
          ]
        }
      },
    });
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