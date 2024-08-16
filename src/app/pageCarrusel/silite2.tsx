import React from 'react'
import Image from 'next/image';

function Slite2() {
  return (
<div className='text-white imagen-background flex flex-row-reverse'>
      <div>
        <h1 className='text-5xl font-bold  text-center fuente-slite1 titulo-consulting'>Fortalece tus competencias</h1>
        <h2 className='font-bold text-5xl  text-center fuente-slite1'>
          y habalidades<br/><br/>
        </h2>
       
        <div className='text-center text-parrafo-slite1'>
        <p>A traves de nuestras especializaciones</p>
        <p>especializados para la</p>
        <p>empleabilidad</p>
        </div>
      </div>

      <div>
        <Image
          className='imagen-slite1'
          src="/img/trabajadoraa3.png" 
          alt="trabajadora"
          width={3500}
          height={3500}
        />
      </div>
</div>
  )
}

export default Slite2