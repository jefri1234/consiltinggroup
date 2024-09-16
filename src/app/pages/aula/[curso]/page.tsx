"use client";
import { useState, useEffect, useCallback } from 'react';
import React from 'react';
import Image from 'next/image';

// Crear interfaces
interface CursoParams {
  curso: string;
}
interface CursoProps {
  params: CursoParams;
}

//FILTRAR TODAS LAS SECCIONES QUE TIENE EL CURSO

function Curso({ params }: CursoProps) {
  const [secciones, setSecciones] = useState<any[]>([]);  // Guardaremos las secciones aquí
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const idcurso = params.curso;

  const fetchSecciones = useCallback(async () => {
    const response = await fetch('/api/filtrarsecciones', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idcurso }),
    });
    const data = await response.json();
    setSecciones(data.datos);  // Guardar las secciones en el estado
  }, [idcurso]);

  useEffect(() => {
    fetchSecciones();
  }, [fetchSecciones]);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  console.log("identificador del curso es:", idcurso);
  console.log(secciones)

///////////////////////////////////////////////////////////////////////////
  return (
    <div className=' mx-auto pt-7   h-screen'>
      <h1 className='text-2xl text-center mb-10'>SECCIONES DEL CURSO</h1>

      <div className="max-w-5xl mx-auto border-2 border-gray-400 rounded-lg">
        {secciones.map((seccion, index) => (
          <div key={seccion.id_seccion} className="border-b border-gray-200 bg-gray-800 ">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full py-5 px-5 font-medium text-left text-gray-500 hover:bg-gray-700 focus:outline-none"
            >
              <span className='text-xl text-white'>{seccion.id_seccion}. {seccion.nombre}</span>
              <svg
                className={`w-6 h-6 transition-transform ${
                  activeIndex === index ? 'transform rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                activeIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="p-5 text-white ">
                {/* Contenido del acordeón */}
                {seccion.materiales.map((material: any, materialIndex: number) => (
                  <div key={materialIndex} className='flex gap-2 mb-5 items-center'>
                    <p className='gap-5 '>* {material.nombre}</p>

                    {['video', 'imagen', 'pdf', 'docx', 'xlsx','pptx','pptm','txt','xlsm','xls','pptx'].includes(material.tipo.toLowerCase()) && (
                      <a 
                        href={material.url} 
                        target='_blank' 
                        rel="noopener noreferrer"
                        className='text-blue-500 hover:text-blue-400 focus:outline-none'
                      >
                        Ver {material.tipo}
                      </a>
                    )}
                                       {(() => {
                      switch (material.tipo.toLowerCase()) {
                        case 'video':
                          return <i className="fas fa-video mr-2"><Image src="/iconos/video.png" alt="video" width={40} height={40} /></i>;
                        case 'imagen':
                          return <i className="fas fa-image mr-2"><Image src="/iconos/imagen.png" alt="imagen" width={40} height={40} /></i>;
                        case 'pdf':
                          return <i className="fas fa-file-pdf mr-2"><Image src="/iconos/pdf.png" alt="pdf" width={40} height={40} /></i>;
                        case 'docx':
                          return <i className="fas fa-file-word mr-2"><Image src="/iconos/word.png" alt="word" width={40} height={40} /></i>;
                        case 'xlsm':
                          return <i className="fas fa-file-excel mr-2"><Image src="/iconos/xls.png" alt="excel" width={40} height={40} /></i>;
                        case 'xlsx' :
                          return <i className="fas fa-file-excel mr-2"><Image src="/iconos/xls.png" alt="excel" width={40} height={40} /></i>;
                        case 'pptx':
                          return <i className="fas fa-file-powerpoint mr-2"><Image src="/iconos/powertPoint.png" alt="pptx" width={40} height={40} /></i>;
                        case 'pptm':
                          return <i className="fas fa-file-powerpoint mr-2"><Image src="/iconos/powertPoint.png" alt="pptm" width={40} height={40} /></i>;
                        case 'txt':
                          return <i className="fas fa-file-text mr-2"><Image src="/iconos/txt.png" alt="txt" width={40} height={40} /></i>;

                        default:
                          return null;
                      }
                    })()}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Curso;
