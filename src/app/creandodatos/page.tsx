import React from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function createCurso(){

  
}


function CreaDatos() {
  createCurso()
  return (
    
    <div>
      Creando material...
    </div>
  );
}

export default CreaDatos;
