import React from 'react'
import Image from 'next/image';

function Slite3() {
  return (
<div className='text-white imagen-background flex'>
      <div>
        <h1 className='text-5xl font-bold  text-center fuente-slite1 titulo-consulting'>Formacion empresas</h1>
        <h2 className='font-bold text-5xl  text-center fuente-slite1'>
          In company<br/><br/>
        </h2>
       
        <div className='text-center text-parrafo-slite1'>
        <p>Atendemos las necesidades de las empresas Ofreciendo</p>
        <p>soluciones en desarollo del talento humano a traves </p>
        <p>de eventos de entretenimiento,capacitacion y formacion</p>
        </div>
      </div>

      <div>
        <Image
          className='imagen-slite1'
          src="/img/equipotrabajo.png" 
          alt="ingeniero"
          width={3500}
          height={3500}
        />
      </div>
</div>
  )
}

export default Slite3