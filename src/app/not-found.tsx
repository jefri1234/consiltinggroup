import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


function Page() {
  return (
    //creame una pagina no encontrada
    <div className=" bg-gray-900 h-screen text-white font-bold text-2xl flex flex-col justify-center contenedor-error items-center ">
      <Image  src='./img/img-error.png' alt='error' width={500} height={500}/>
      <p>La página que estás buscando no existe</p>
      <Link href='./' className='text-blue-500'>Ir al Inicio</Link>
    </div>
  )
}

export default Page