"use client";
import { useState, useEffect } from 'react';
import React from 'react';

// Crear interfaces
interface CursoParams {
  curso: string;
}
interface CursoProps {
  params: CursoParams;
}

//FILTRAR TODAS LAS SECCIONES QUE TIENE EL CURSO

function Curso({ params }: CursoProps) {

  const [secciones, setSecciones] = useState([]);
  const [curso, setCurso] = useState(params.curso);

  const idcurso = params.curso
  useEffect(()=>{
    const fetchSecciones = async () => {
      const response = await fetch('/api/filtrarsecciones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({idcurso})
      });
    }
    fetchSecciones();
  },[])

  console.log("identificador del curso es:",idcurso)

///////////////////////////////////////////////////////////////////////////
  return (
   <h1>hey</h1>
  );
}

export default Curso;
