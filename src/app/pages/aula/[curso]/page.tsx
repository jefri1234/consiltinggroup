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
  const [curso, setCurso] = useState(params.curso);
  const [secciones, setSecciones] = useState<any[]>([]);  // Guardaremos las secciones aquí

  const idcurso = params.curso;

  useEffect(() => {
    // Importar Flowbite cuando el componente se monte
    import('flowbite');

    const fetchSecciones = async () => {
      const response = await fetch('/api/filtrarsecciones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idcurso }),
      });
      const data = await response.json();
      setSecciones(data.datos);  // Guardar las secciones en el estado
    };

    fetchSecciones();
  }, []);

  console.log("identificador del curso es:", idcurso);

///////////////////////////////////////////////////////////////////////////
  return (
    <div className='max-w-5xl mx-auto pt-7'>
      <h1 className='text-2xl text-center'>SECCIONES DEL CURSO</h1>

      <div id="accordion-flush" data-accordion="collapse" data-active-class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-class="text-gray-500 dark:text-gray-400">
        {secciones.map((seccion, index) => (
          <div key={seccion.id_seccion}>
            <h2 id={'accordion-collapse-heading-' + index}>
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 px-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                data-accordion-target={'#accordion-collapse-body-' + index}
                aria-expanded="false"
                aria-controls={'accordion-collapse-body-' + index}
              >
                <span>{seccion.nombre}</span>
                <svg
                  data-accordion-icon
                  className="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id={'accordion-collapse-body-' + index}
              className="hidden"
              aria-labelledby={'accordion-collapse-heading-' + index}
            >
              <div className="py-5 px-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Detalles de la sección {seccion.nombre} (ID: {seccion.id_seccion})
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Curso;
