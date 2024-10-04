import React from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createMaterial() {
  const material = await prisma.material.create({
    data: {
      id_material: 56,
      id_seccion: 8,
      nombre: "video de clase 8",
      tipo: "video",
      url: "https://www.youtube.com/watch?v=5_N8as9SO2M"
    }
  })
  console.log("Creado exitoso",material)
}


function CreaDatos() {
  createMaterial();

  return (
    <div>
      Creando material...
    </div>
  );
}

export default CreaDatos;
