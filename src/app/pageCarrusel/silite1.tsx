import React from 'react';
import Image from 'next/image';

function Slite1() {
  return (
    <div className='text-white imagen-background'>
      <div>
        <h1 className='text-5xl font-bold  text-center fuente-slite1 titulo-consulting'>Consulting Group</h1>
        <h2 className='font-bold text-5xl  text-center fuente-slite1'>
          &quot;Te ayudamos a formarte<br/>para la búsqueda de empleo&quot;
        </h2>
       
        <div className='text-center text-parrafo-slite1'>
        <p>Asegura tu próximo trabajo o ascenso</p>
        <p>en las principales instituciones públicas</p>
        <p>y privadas en el Perú</p>
        </div>
      </div>

      <div>
        <Image
          className='imagen-slite1'
          src="/img/equipotrabajo.png" 
          alt="equipo"
          width={3500}
          height={3500}
        />
      </div>
    </div>
  );
}

export default Slite1;
