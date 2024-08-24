"use client";
import { useState, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';

// Crear interfaces
interface CursoParams {
  curso: string;
}
interface CursoProps {
  params: CursoParams;
}

function Curso({ params }: CursoProps) {
  const [curso, setCurso] = useState('');
  const [cursoData, setCursoData] = useState<any>(null);
  const [materiales, setMateriales] = useState<any[]>([]);

  useEffect(() => {
    setCurso(params.curso);
  }, [params.curso]);

  useEffect(() => {
    if (curso) {
      const buscarCurso = async () => {
        const response = await fetch('/api/buscarcurso', {
          method: 'POST',
          body: JSON.stringify({ curso }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const respuesta = await response.json();
        setCursoData(respuesta.data); // Almacenar los datos en el estado
        console.log(respuesta);
      };

      buscarCurso();
      traermateriales();
    }
  }, [curso]);

  const traermateriales = async () => {
    const materiales = await fetch('/api/materiales', {
      method: 'POST',
      body: JSON.stringify({ curso }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const materialencontrado = await materiales.json();
    console.log("consola de browser material añado", materialencontrado);
    setMateriales(materialencontrado.curso); // Almacenar los materiales en el estado
  };

  return (
    <div className="p-4">
      {cursoData ? (
        <div className="bg-white shadow-md rounded-lg p-6 text-center flex gap-3 justify-around">
          <div>
            <h2 className="text-4xl font-semibold font-serif">
              Curso de {cursoData.nombre}
            </h2>
            <p className="text-gray-700 mt-2">
              <span className="font-bold inline-block">Instructor: </span>
              {cursoData.Instructor}
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-bold inline-block">Descripción: </span>
              {cursoData.description}
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-bold inline-block">Duración: </span>
              {cursoData.duracion}
            </p>
          </div>
          <div>
            {cursoData.imagen && (
              <img
                src={cursoData.imagen}
                alt={cursoData.nombre}
                className="mt-4 w-full max-w-xs mx-auto rounded-lg"
              />
            )}
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Cargando datos del curso...</p>
      )}

      {/* Mostrar los materiales del curso */}
      <div className="mt-8 space-y-6" >
        {materiales.map((material) => (
          <div key={material.id} className="flex gap-2 ">
            {material.tipo === 'imagen' && (
              <div className="w-full h-64 relative">
                <Image
                  src={material.url}
                  alt={material.nombre}
                  layout="fill"
                  objectFit="contain"
                  className="rounded shadow-lg"
                />
              </div>
            )}
            {material.tipo === 'video' && (
              <video
                controls
                src={material.url}
                className="w-full max-w-md rounded shadow-lg"
              />
            )}
            {material.tipo === 'pdf' && (
              <a
                href={material.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
                download
              >
                Descargar {material.nombre}
              </a>
            )}
            {/* Repetir bloques similares para otros tipos de archivos como Word, Excel, etc. */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Curso;
