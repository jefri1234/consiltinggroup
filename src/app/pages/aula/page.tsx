"use client"
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Aula: React.FC = () => {
    const searchParams = useSearchParams();
    const [userfound, setUserfound] = useState<number | null>(null);
    const [cursos, setCursos] = useState<any[]>([]); // Usa un tipo adecuado según la respuesta de tu API
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const userfoundParam = searchParams.get('userfound');
      if (userfoundParam) {
        setUserfound(parseInt(userfoundParam, 10));
      }
    }, [searchParams]);
  
    useEffect(() => {
      const fetchData = async () => {
        if (userfound !== null) {
          try {
            const response = await fetch('/api/listarcurso', {
              method: 'POST',
              body: JSON.stringify({ userfound }),
              headers: {
                'Content-Type': 'application/json',
              },
            });
  
            if (!response.ok) {
              throw new Error('Error en la petición');
            }
  
            const data = await response.json();
            setCursos(data.cursos); // Almacena solo el array de cursos
          }  finally {
            setLoading(false);
          }
        }
      };
  
      fetchData();
    }, [userfound]);
  
    if (loading) return <div className="text-center py-4">Cargando...</div>;
    if (error) return <div className="text-center py-4 text-red-500">Error: {error}</div>;
  return (
    <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Cursos del alumno {userfound}</h1>
    <div className="bg-white shadow-md rounded-lg p-4">
      {cursos.length > 0 ? (
        <ul className="space-y-4">
          {cursos.map((curso, index) => (
            <li key={index} className="border-b border-gray-200 pb-4">
              <h2 className="text-xl font-semibold">{curso.nombre}</h2> {/* Ajusta el nombre del campo según tu API */}
              <p className="text-gray-700 ">descipcion:{curso.description}</p> {/* Ajusta el nombre del campo según tu API */}
              <p className="text-gray-700">Instructor:{curso.Instructor}</p> {/* Ajusta el nombre del campo según tu API */}
              <p className="text-gray-700 font-bold">Duracion del curso:{curso.duracion}</p> {/* Ajusta el nombre del campo según tu API */}
              
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No se encontraron cursos.</p>
      )}
    </div>
  </div>
  );
};

export default Aula;
