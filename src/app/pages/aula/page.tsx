"use client";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Aula: React.FC = () => {
  const searchParams = useSearchParams();
  const [userfound, setUserfound] = useState<number | null>(null);
  const [cursos, setCursos] = useState<any[]>([]); // Usa un tipo adecuado según la respuesta de tu API
  const [loading, setLoading] = useState<boolean>(true);
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')

  //----CAPTURAMOS EL ID DEL USUARIO MEDIANTE LOS PARAMETROS-----//
  useEffect(() => {
    //UTILIZO ESE HOOK PARA OBTENER EL PARAMETRO DE LA URL
    const userfoundParam = searchParams.get('userfound');
    //Si el userfoundParam tiene algo ES TRUE almacena en el useState 
    if (userfoundParam) {
      setUserfound(parseInt(userfoundParam, 10));
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchData = async () => {
      //SI userFound no es igual a NULL ingresa y has peticion 
      //PARA LISTAR LOS CURSOS DEL USUARIO ENVIADO MEDIANTE EL BODY
      if (userfound !== null) {
        try {
          const response = await fetch('/api/listarcurso', {
            method: 'POST',
            body: JSON.stringify({ userfound }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
          //CONIVERTE LA DATA TRAIDA EN JSON DE LOS CURSOS 
          const cursos = await response.json();
          setCursos(cursos)

        }

        finally {
          setLoading(false);
        }
      }
    };
    fetchData();

  }, [userfound]);

  const buscarusuario = async () => {
    const usuario = await fetch('/api/obtenerdatosuser/', {
      method: 'POST',
      body: JSON.stringify({ userfound }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const datosusuario = await usuario.json()
    setNombre(datosusuario.data.nombre)
    setApellido(datosusuario.data.apellido)
  }

  if (loading) return <div className=" bg-gray-900 text-white flex justify-center items-center h-screen text-2xl">Cargando...</div>;
  buscarusuario()


  return (
    <div className="p-4 bg-gray-950 h-screen text-white">
      <h1 className="text-2xl mb-4 ml-6 bg-gray-900 rounded-lg p-4 font-bold text-red-700 flex items-center gap-2"><Image src="/iconos/icon-profile.png" width={50} height={50} alt="logo" /> {nombre.toUpperCase()} {apellido.toUpperCase()}</h1>
      <div className="shadow-md rounded-lg p-4">
        {/* Validamos que cursos esté definido y sea un array antes de usar length */}
        {Array.isArray(cursos) && cursos.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {cursos.map((curso, index) => (
              <Link href={'/pages/aula/' + curso.id_curso} key={index}>
                <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:bg-gray-800 text-white">
                  <Image
                    src={curso.imagen}
                    width={600}
                    height={600}
                    alt="foto"
                    className="w-full h-50 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{curso.nombre}</h2>
                    <p className="mb-2">Descripción: {curso.description}</p>
                    <p className="mb-2">Instructor: {curso.Instructor}</p>
                    <p className="font-bold">Duración del curso: {curso.duracion}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="flex justify-center items-center">Cursos no encontrados.</p>
        )}
      </div>
    </div>
  );
};

export default Aula;
