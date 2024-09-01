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
    <div className="bg-gray-950 text-white h-screen">
      {cursoData ? (
        <div className="shadow-md rounded-lg p-6 text-center flex gap-3 justify-around">
          <div>
            <h2 className="text-5xl ">
              Curso de {cursoData.nombre}
            </h2>
            <p className="text-white mt-2">
              <span className="font-bold inline-block">Instructor:</span>
              {cursoData.Instructor}
            </p>
            <p className="text-white mt-2">
              <span className="font-bold inline-block">Descripción: </span>
              {cursoData.description}
            </p>
            <p className="text-white mt-2">
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
        <p className="text-white bg-gray-900 h-screen flex justify-center items-center text-2xl">Cargando datos del curso...</p>
      )}

      {/* Mostrar los materiales del curso */}
      <div className=' bg-gray-950 text-white h-screen'>


        {/* Sección de videos */}
        <div className="flex flex-wrap gap-4 justify-center items-center mb-8 bg-gray-800 py-5">
          {materiales
            .filter((material) => material.tipo === 'video')
            .map((material) => (
              <div key={material.id} className="flex flex-col gap-2 max-w-md">
                <video
                  controls
                  src={material.url}
                  className=" rounded-2xl shadow-lg"

                />
                <p className="text-center text-1xl">{material.nombre}</p>
              </div>
            ))}
        </div>

        {/* Sección de imágenes */}
        <div className="flex gap-6 justify-center items-center pb-3">
          {materiales
            .filter((material) => material.tipo === 'imagen')
            .map((material) => (
              <div key={material.id} className="">
                <Image
                  src={material.url}
                  alt={material.nombre}
                  width={400}
                  height={400}
                  className="rounded-3xl bg-green-500 mx-auto"
                />
                <p className="text-center">{material.nombre}</p>
              </div>
            ))}
        </div>

        {/* Sección de enlaces (PDF, Word, etc.) */}
        <div className="flex flex-col gap-4 justify-center items-center bg-gray-800 py-4">
          {materiales
            .filter((material) =>
              ['pdf', 'word', 'excel'].includes(material.tipo)
            )
            .map((material) => (
              <a
                key={material.id}
                href={material.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline bg-gray-900 p-3 rounded-md  text-center"
                download
              >
                Descargar {material.tipo.toUpperCase()}: {material.nombre}
              </a>
            ))}
        </div>
      </div>

    </div>
  );
}

export default Curso;
