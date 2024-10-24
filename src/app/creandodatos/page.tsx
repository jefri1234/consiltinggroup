import React from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function createSeccion(){

  
}


function CreaDatos() {
  createSeccion()
  return (
    
    <div>
      Creando...
    </div>
  );
}

export default CreaDatos;
