import React from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createMaterial() {

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
