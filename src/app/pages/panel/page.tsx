import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function page() {
  return (
    <div >
      <h1 className='text-center text-3xl font-bold relative top-20'>PANEL PRINCIPAL</h1>
      <div className="flex items-center justify-center h-screen ">
        <div className="flex space-x-10">
          {/* Botón Usuarios */}
          <div className='flex flex-col justify-center items-center gap-2'>
            <Link href="/pages/panel/cursos" className="flex items-center justify-center w-40 h-40 rounded-full bg-blue-500 text-white text-2xl font-bold transition-transform duration-300 transform hover:scale-110">
              <Image
                src='/img/cursos.png'
                width={96}
                height={96}
                alt='cursos'
              />
            </Link>
            <p className='font-bold text-2xl'>CURSOS</p>
          </div>

          {/* Botón Cursos */}
          <div className='flex flex-col items-center justify-center gap-2'>
            <div>
              <Link href="/pages/panel/usuarios" className="flex items-center justify-center w-40 h-40 rounded-full bg-green-500 text-white text-2xl font-bold transition-transform duration-300 transform hover:scale-110">
                <Image
                  src='/img/usuarios.png'
                  width={96}
                  height={96}
                  alt='usuarios'
                />
              </Link>
            </div>
            <p className='font-bold text-2xl'>USUARIOS</p>
          </div>
          {/* Botón asignar cursos a un alumno */}
          <div className='flex flex-col items-center justify-center gap-2'>
            <div>
              <Link href="/pages/panel/usuarios" className="flex items-center justify-center w-40 h-40 rounded-full bg-green-500 text-white text-2xl font-bold transition-transform duration-300 transform hover:scale-110">
                <Image
                  src='/img/usuarios.png'
                  width={96}
                  height={96}
                  alt='usuarios'
                />
              </Link>
            </div>
            <p className='font-bold text-2xl'>Asignar curso-alumno</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page