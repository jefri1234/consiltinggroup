import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function BotonWatsap() {
  return (
    <div className="flex justify-center items-center gap-3 bg-green-600 max-w-max m-auto p-3 rounded-md text-white font-bold hover:bg-green-700 transition duration-300">
        <Image 
            src="/img/watsap.png"
            width={40}
            height={40}
            alt="WhatsApp"
            className="rounded-full"
          />
          <Link href="https://api.whatsapp.com/send?phone=51991403402&text=Hola,%20me%20puedes%20informar%20sobre: ">
            Conversa con Nosotros
          </Link>
    </div>
  )
}

export default BotonWatsap