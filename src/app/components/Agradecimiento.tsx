import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Agradecimiento() {
  return (
    <div className='flex justify-center items-center py-52 px-3 
     max-w-4xl m-auto contenedor-agradecimiento'>
        <div className='text-center'>
        <h1 className='mb-5'>GRASIAS POR VISITARNOS</h1>
        <p className=''>Si deseas mas imformacion sobre nuestras especializaciones o representas una empresa que desea capacitar a su colaboradores</p>
        <h2 className=' pt-3 pb-6'>PONTE EN CONTACTO CON NOSOTROS</h2>

        <div className=' flex justify-center items-center gap-3 bg-green-600 max-w-max m-auto p-2 rounded-md text-white font-bold '>
            <Image 
            src='/img/watsap.png'
            width={40}
            height={40}
            alt='watsap'
            />
            <Link href='https://api.whatsapp.com/send?phone=51991403402&text=Hola,%20me%20puedes%20informar%20sobre: '>
            Conversa con Nosotros
            </Link>
       </div>
        </div>
    </div>
  )
}

export default Agradecimiento