"use client";
import { useState, useEffect, useCallback } from 'react';
import React from 'react';
import Image from 'next/image';
import FooterEnlaces from '@/app/components/FooterEnlaces';


// ... existing interfaces ...

interface CursoProps {
  params: { curso: string };
}

function Curso({ params }: CursoProps) {
  const [secciones, setSecciones] = useState<any[]>([]);
  const [curso, setCurso] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const idcurso = params.curso;

  const fetchSecciones = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/filtrarsecciones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idcurso }),
      });
      const data = await response.json();
      setSecciones(data.datos);
      setCurso(data.curso.nombre);
    } catch (error) {
      console.error('Error fetching secciones:', error);
    } finally {
      setIsLoading(false);
    }
  }, [idcurso]);

  useEffect(() => {
    fetchSecciones();
  }, [fetchSecciones]);

  if (isLoading) {
    return (
      <div className='bg-gray-950 h-screen flex items-center justify-center'>
        <p className='text-white text-2xl'>Cargando...</p>
      </div>
    );
  }

  return (
    <div className='bg-gray-950 min-h-screen'>
      <div className='mx-auto pt-7 bg-gray-950 h-fit'>
        <div className='bg-gray-900 rounded-lg p-4 shadow-md px-10 mx-10 mb-10'>
          <h2 className='text-red-700 text-2xl font-bold flex items-center gap-2'>
            <Image src="/iconos/icon-course.png" alt="icono" width={50} height={50} /> || {curso}
          </h2>
        </div>
        <h1 className='text-red-700 font-sans text-2xl font-bold flex items-center gap-2 mx-10'>||  SECCIONES DEL DIPLOMADO</h1>
        {secciones.length > 0 ? (
          <div className="w-1/2 m-10 border- rounded-lg h-full flex flex-col gap-3">
            {secciones.map((seccion,index) => (
              <div key={seccion.id_seccion} className="bg-gray-900 rounded-lg hover:bg-gray-800">
                <div className="p-5 text-white">
                  <span className='text-xl'>{index + 1}. {seccion.nombre}</span>
                  <p className='text-xl text-blue-400'>{seccion.descripcion}</p>
                  <div className="mt-3">
                    {seccion.materiales.map((material: any, materialIndex: number) => (
                      <div key={materialIndex} className='flex gap-2 mb-5 items-center'>
                        <p className='gap-5'>* {material.nombre}</p>
                        {['video', 'imagen', 'pdf', 'docx', 'xlsx', 'pptx', 'pptm', 'txt', 'xlsm', 'xls', 'pptx'].includes(material.tipo.toLowerCase()) && (
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
                            case 'xlsx':
                              return <i className="fas fa-file-excel mr-2"><Image src="/iconos/xls.png" alt="excel" width={40} height={40} /></i>;
                            case 'pptx':
                            case 'pptm':
                              return <i className="fas fa-file-powerpoint mr-2"><Image src="/iconos/powertPoint.png" alt="pptx" width={40} height={40} /></i>;
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
        ) : (
          <div className='text-white text-center text-2xl pt-10'>No hay secciones</div>
        )}
      </div>
      <FooterEnlaces className='pt-40' />
    </div>
  );
}

export default Curso;