import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BotonWatsap from './BotonWatsap';

function Agradecimiento() {
  return (
    <div className="flex justify-center items-center py-20 px-4 m-auto contenedor-agradecimiento h-full bg-cover bg-center">
      <div className="text-center bg-black bg-opacity-50 p-8 rounded-lg max-w-xl w-full">
        <h1 className="mb-5 text-3xl font-extrabold text-white">
          ¡Gracias por visitarnos!
        </h1>
        <p className="text-lg text-gray-300 mb-5">
          Si deseas más información sobre nuestras especializaciones o representas una empresa que desea capacitar a sus colaboradores, 
          no dudes en contactarnos.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-3 pb-6">
          Ponte en contacto con nosotros
        </h2>

        <div >
          <BotonWatsap/>
        </div>
      </div>
    </div>
  );
}

export default Agradecimiento;
