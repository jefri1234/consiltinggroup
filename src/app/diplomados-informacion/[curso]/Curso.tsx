import React from 'react';
import Image from 'next/image';
import FooterEnlaces from '@/app/components/FooterEnlaces';
import Link from 'next/link';

interface CursoProps {
  nombre: string;
  objetivoDiplomado: string;
  perfilParticipante: string;
  imgProfe: string;
  nombreProfe: string;
  descripcionProfesor: string;
  linkWatsap:string;
  children?: React.ReactNode;
}

const Curso: React.FC<CursoProps> = ({
  nombre,
  objetivoDiplomado,
  perfilParticipante,
  imgProfe,
  nombreProfe,
  descripcionProfesor,
  linkWatsap,
  children,
}) => {
  return (
    <div >
      <h1 className="text-4xl md:text-6xl text-red-700 font-bold text-center pt-5">{nombre}</h1>
      <div className="flex gap-10 flex-col md:flex-col justify-center items-center pt-10 space-y-4 md:space-y-0 py-10 px-5">

        <Image
          src="/img/log-consulting-letra-negra.jpg"
          alt="logo-consulting"
          width={500}
          height={500}
          className='bg-white p-2 rounded-xl'
        />
        <Image
          src="/img/sanmarcos.jpg"
          alt="sanmarcos"
          width={700}
          height={700}
          className='bg-white p-2 rounded-xl'
        />
      </div>
      <div className='bg-gray-800 p-5'>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10 text-center max-w-5xl m-auto">
          <article className="p-4 rounded-lg bg-gray-900 shadow-md">
            <h2 className="font-bold text-red-700 text-2xl">OBJETIVO DEL DIPLOMADO</h2>
            <div className='flex flex-col justify-center items-center gap-5'>
              <p className='text-gray-200'>{objetivoDiplomado}</p>
              <Image src='/img/laboral.png' alt='laboral' width={80} height={80} />
            </div>
          </article>
          <article className="p-4 rounded-lg bg-gray-900 shadow-md">
            <h2 className="font-bold text-red-700 text-2xl">PERFIL DEL PARTICIPANTE</h2>
            <div className='flex flex-col justify-center items-center gap-5'>
              <p className='text-gray-200'>{perfilParticipante}</p>
              <Image src='/img/usuarios.png' alt='certificacion' width={80} height={80} />
            </div>
          </article>
          <article className="p-4 rounded-lg bg-gray-900 shadow-md">
            <h2 className="font-bold text-red-700 text-2xl">BENEFICIOS</h2>
            <ul className="list-disc text-left px-4 text-gray-200">
              <div className=' p-3 rounded-md flex flex-col justify-center items-center gap-2'>
                <p className='text-center'>TRIPLE CERTIFICACION DEL DIPLOMADO FCE-UNMSM & CG</p>
                <Image src='/img/certificacion.png' alt='certificacion' width={60} height={60} />
              </div>
              <div className=' p-3 rounded-md flex flex-col justify-center items-center gap-2'>
                <p className='text-center'>MODULOS ACTUALIZADOS</p>
                <Image src='/img/cursos.png' alt='certificacion' width={60} height={60} />
              </div>
              <div className='p-3 rounded-md flex flex-col justify-center items-center gap-2'>
                <p className='text-center'>EXCELENCIA ACADEMICA</p>
                <Image src='/img/clasepresencial.png' alt='certificacion' width={60} height={60} />
              </div>

            </ul>
          </article>
        </section>

        <div className='max-w-5xl m-auto'>
          <section className="bg-gray-900 text-white p-4 rounded-lg text-center">
            <h2 className="font-bold text-2xl">DOCENTE PRINCIPAL</h2>
            <Image src={imgProfe} alt="profesores" width={100} height={100} className="mx-auto rounded-full" />
            <p className="text-blue-600 text-xl mt-2">{nombreProfe}</p>
            <p className="mt-2">{descripcionProfesor}</p>
          </section>

          <section className="mt-10">
            <h2 className="text-white font-bold text-3xl text-center">MÓDULOS DEL CURSO</h2>
            <div className="mt-4">{children}</div>
          </section>
        </div>
        <section className='flex flex-col justify-center items-center py-5 gap-2'>
          <h2 className='text-white text-2xl'>ESPECIALIZATE Y ACREDITATE CON LA UNMSM</h2>
          <Image src='/img/grupo-consultinggroup.jpg'
            alt='grupo-consulting'
            width={800}
            height={800}
            className=' rounded-lg'
          />
        </section>
        <div className=' flex flex-col justify-center items-center gap-4'>
          <p className='text-green-500 font-bold text-2xl'>Para mas imformación contactenos</p>

          <Link className='flex items-center justify-center gap-1 border-green-600 border-solid border-x-2 border-y-2 p-2 rounded-lg hover:bg-green-600 hover:p-1 transition-all' href={linkWatsap}>
            <Image src='/img/watsap3d.png' width={60} height={60} alt='watsap' />
            <p
              className='text-white'
            >Mas imformacion</p>
          </Link>
        </div>
      </div>
      <FooterEnlaces className='' />
    </div>
  );
};

export default Curso;
