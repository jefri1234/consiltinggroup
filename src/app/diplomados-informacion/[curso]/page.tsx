"use client"
import React from 'react'
import { useParams } from 'next/navigation';

function Page() {
  const { curso } = useParams();
  //si curso es igual a 1 retorna un texto 
  if (curso === '1') {
    return <h1>Curso encontrado es seguridad salud en el trabajo</h1>;
  }
  if (curso === '2') {
    return <h1>Curso encontrado es ssoma</h1>;
  }
  if (curso === '3') {
    return <h1>Curso encontrado numero 3</h1>;
  }
  if (curso === '4') {
    return <h1>Curso encontrado nuemro 4 es bueno</h1>;
  }
  if (curso === '5') {
    return <h1>Curso encontrado es ssoma</h1>;
  }
  if (curso === '6') {
    return <h1>Curso encontrado es ssoma</h1>;
  }
  if (curso === '7') {
    return <h1>Curso encontrado es ssoma</h1>;
  }
  if (curso === '8') {
    return <h1>Curso encontrado es ssoma</h1>;
  }

  return (
    <div>
      el curso no fue encontrado asi que <span className='text-blue-800 text-2xl font-bold'>cursos selcionana bien</span>
    </div>
  )
}

export default Page;
