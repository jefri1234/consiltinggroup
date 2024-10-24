"use client";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FooterEnlaces from '@/app/components/FooterEnlaces';

const Aula: React.FC = () => {
  const searchParams = useSearchParams();
  const [userfound, setUserfound] = useState<number | null>(null);
  const [cursos, setCursos] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [infoProfe, setInfoProfe] = useState<any>({});

  useEffect(() => {
    const userfoundParam = searchParams.get('userfound');
    if (userfoundParam) {
      setUserfound(parseInt(userfoundParam, 10));
    }
  }, [searchParams]);

  const fetchCursos = async (userId: number) => {
    try {
      const response = await fetch('/api/listarcurso', {
        method: 'POST',
        body: JSON.stringify({ userfound: userId }),
        headers: { 'Content-Type': 'application/json' },
      });
      return await response.json();
    } catch (error) {
      console.error("Error fetching cursos:", error);
      return [];
    }
  };

  const fetchProfesor = async (idprofe: number) => {
    try {
      const response = await fetch('/api/listarprofesor', {
        method: 'POST',
        body: JSON.stringify({ idprofe }),
        headers: { 'Content-Type': 'application/json' },
      });
      return await response.json();
    } catch (error) {
      console.error("Error fetching profesor:", error);
      return {};
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (userfound !== null) {
        const cursosData = await fetchCursos(userfound);
        setCursos(cursosData);

        if (cursosData.length > 0) {
          const idprofe = cursosData[0].id_profesor;
          const profeData = await fetchProfesor(idprofe);
          setInfoProfe(profeData);
        }
      }
      setLoading(false);
    };

    fetchData();
  }, [userfound]);

  if (loading) {
    return <div className="bg-gray-900 text-white flex justify-center items-center h-screen text-2xl">Cargando...</div>;
  }

  return (
    <div className="py-10 bg-gray-950 text-white">
      <h1 className="text-2xl mb-6 mx-6 bg-gray-900 rounded-lg p-4 font-bold text-red-600 flex items-center gap-2 shadow-md">
        <Image src="/iconos/icon-course.png" width={50} height={50} alt="logo" />
        <span>||</span>
        <p>{cursos.length > 0 ? cursos[0].nombre.toUpperCase() : 'No courses'}</p>
      </h1>

      <div className="p-5">
        {Array.isArray(cursos) && cursos.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-6 bg-gray-800 rounded-lg py-10 px-5">
            {cursos.map((curso, index) => (
              <div className='flex flex-col lg:flex-row gap-6' key={index}>
                <Link href={'/pages/aula/' + curso.id_curso} className='bg-gray-900 rounded-lg shadow-md hover:bg-gray-700 text-white w-full lg:w-1/3 max-h-max transition duration-300 ease-in-out'>
                  <div>
                    <Image
                      src={curso.imagen}
                      width={600}
                      height={400}
                      alt="foto"
                      className="w-full h-auto rounded-t-lg"
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold mb-2">{curso.nombre}</h2>
                      <p className="font-bold text-gray-300">Duración del curso: {curso.duracion}</p>
                      <p className="font-bold text-blue-400 pt-2">Ver contenido</p>
                    </div>
                  </div>
                </Link>

                <div className='flex flex-col justify-between w-full lg:w-1/2'>
                  <div className='pt-5 max-w-7xl'>
                    <h1 className='text-2xl font-semibold mb-2'>{curso.nombre}</h1>
                    <p className="text-gray-300">{curso.description}</p>
                  </div>
                  <div className='flex items-center gap-2 my-6'>
                    <Image src='/iconos/icon-docente.png' width={40} height={40} alt="foto" />
                    <p className='text-xl font-semibold'>Docente Asignado</p>
                  </div>

                  <div className='bg-gray-900 rounded-lg p-4 max-w-7xl shadow-md'>
                    <div className='flex items-center gap-4 py-2'>
                      <Image src={infoProfe.imagen} width={80} height={80} alt="foto" className='rounded-full' />
                      <h1 className='text-2xl font-semibold text-blue-500'>ING. {infoProfe.nombre} {infoProfe.apellido}</h1>
                    </div>
                    <p className="text-gray-300">{infoProfe.descripcion}</p>
                    
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="flex justify-center items-center text-xl">Cursos no encontrados.</p>
        )}
      </div>
      <FooterEnlaces className='pt-10' />
    </div>
  );
};

const AulaWrapper = () => (
  <Suspense fallback={<div>Cargando...</div>}>
    <Aula />
  </Suspense>
);

export default AulaWrapper;
