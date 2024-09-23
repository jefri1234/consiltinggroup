"use client";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
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
        headers: {
          'Content-Type': 'application/json',
        },
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
        headers: {
          'Content-Type': 'application/json',
        },
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
    return (
      <div className='bg-gray-950 h-screen flex items-center justify-center'>
        <p className='text-white text-2xl'>Cargando...</p>
      </div>
    );
  }
  return (
    <div className="py-10 bg-gray-950 h-max text-white">
      <h1 className="text-1xl mb-4 mx-6 bg-gray-900 rounded-lg p-4 font-bold text-red-700 flex items-center gap-2">
        <Image src="/iconos/icon-course.png" width={50} height={50} alt="logo" />
        <span>||</span>
        <p className='text-red-700 text-2xl'>{cursos.length > 0 ? cursos[0].nombre.toUpperCase() : 'No courses'}</p>
      </h1>


      <div className="shadow-md rounded-lg px-20">
        {Array.isArray(cursos) && cursos.length > 0 ? (
          <div>
            {cursos.map((curso, index) => (
              <div className='flex justify-evenly gap-20' key={index}>
                <Link href={'/pages/aula/' + curso.id_curso} className='bg-gray-900 rounded-lg  shadow-md hover:bg-gray-800 text-white w-1/2 h-min'>
                  <div>
                    <Image

                      src={curso.imagen}
                      width={600}
                      height={600}
                      alt="foto"
                    />
                    <div className="p-4">
                      <h2 className="text-1xl font-semibold mb-2">{curso.nombre}</h2>
                      <p className="font-bold">Duración del curso: {curso.duracion}</p>
                      <p className="font-bold text-blue-500 pt-2">Ver contenido</p>
                    </div>
                  </div>



                </Link>

                <div className='flex justify-evenly gap-10 flex-col w-full'>
                  <div className='pt-5 max-w-7xl'>
                    <h1 className='text-2xl font-semibold mb-2'>{curso.nombre}</h1>
                    <p>{curso.description}</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Image src='/iconos/icon-docente.png' width={40} height={40} alt="foto" />
                    <p className='text-xl font-semibold'>Docente Asignado</p>
                  </div>

                  <div className='bg-gray-900 rounded-lg p-4 max-w-7xl '>
                    <div className='flex items-center gap-4 py-2 '>
                      <Image src={infoProfe.imagen} width={80} height={80} alt="foto" className='rounded-full' />
                      <h1 className='text-2xl font-semibold mb-2 text-blue-500'>ING. {infoProfe.nombre} {infoProfe.apellido}</h1>
                    </div>
                    <p>{infoProfe.descripcion}</p>

                    <p>{infoProfe.email}</p>
                    <p>Mas informacion: <span className='text-blue-500 select-text'>{infoProfe.linkedin}</span></p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <p className="flex justify-center items-center">Cursos no encontrados.</p>
        )}
      </div>
      <FooterEnlaces className='pt-40' />
    </div>
  );
};

export default Aula;
