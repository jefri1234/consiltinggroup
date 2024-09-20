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
          console.log("imfo del profe", profeData)
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
    <div className="py-10 bg-gray-950 h-screen text-white">
      <h1 className="text-1xl mb-4 ml-6 bg-gray-900 rounded-lg p-4 font-bold text-red-700 flex items-center gap-2">
        <Image src="/iconos/icon-profile.png" width={50} height={50} alt="logo" />
        {cursos.length > 0 ? cursos[0].nombre.toUpperCase() : 'No courses'}
      </h1>
      <div className="shadow-md rounded-lg px-20">
        {Array.isArray(cursos) && cursos.length > 0 ? (
          <div>
            {cursos.map((curso, index) => (
              <div className='flex justify-evenly gap-24' key={index}>
                <Link href={'/pages/aula/' + curso.id_curso}>
                  <div className="bg-gray-900 rounded-lg max-w-7xl shadow-md hover:bg-gray-800 text-white">
                    <Image
                      src={curso.imagen}
                      width={600}
                      height={600}
                      alt="foto"
                      className="w-full h-50 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-1xl font-semibold mb-2">{curso.nombre}</h2>
                      <p className="mb-2">Instructor: {curso.Instructor}</p>
                      <p className="font-bold">Duración del curso: {curso.duracion}</p>
                    </div>
                  </div>
                </Link>
                <div className='pt-5 max-w-7xl'>
                  <h1 className='text-3xl font-semibold mb-2'>{curso.nombre}</h1>
                  <p>{curso.description}</p>
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
