import React from 'react';
import Image from 'next/image';

const DiplomaInfo = () => {
  return (
    <div className="bg-red-900 px-3 py-20">
      <div className="max-w-7xl mx-auto text-white">
        <h2 className="text-3xl font-bold mb-8 text-center md:text-left">¿QUÉ INCLUYE EL DIPLOMADO GRATUITO?</h2>
        
        <div className="flex flex-col md:flex-row">
          {/* Left side content */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center">
              <span className="bg-yellow-400 text-red-700 p-3 rounded-full">
                {/* Icono de video (coloca aquí tu imagen o ícono) */}
                <i className="fas fa-video"></i>
              </span>
              <p className="ml-4 text-lg">Ingreso a la sala en vivo por ZOOM</p>
            </div>

            <div className="flex items-center">
              <span className="bg-yellow-400 text-red-700 p-3 rounded-full">
                {/* Icono de certificación */}
                <i className="fas fa-certificate"></i>
              </span>
              <p className="ml-4 text-lg">Certificación OPCIONAL</p>
            </div>

            <div className="flex items-center">
              <span className="bg-yellow-400 text-red-700 p-3 rounded-full">
                {/* Icono de diapositivas */}
                <i className="fas fa-file-alt"></i>
              </span>
              <p className="ml-4 text-lg">
                Diapositivas de las sesiones y material complementario
              </p>
            </div>

            <div className="flex items-center">
              <span className="bg-yellow-400 text-red-700 p-3 rounded-full">
                {/* Icono de envío */}
                <i className="fas fa-shipping-fast"></i>
              </span>
              <p className="ml-4 text-lg">Envío de la certificación OPCIONAL en físico</p>
            </div>
          </div>

          {/* Right side image */}
          <div className="flex-1 flex justify-center ">
            {/* Imagen del diploma */}
            <Image
              src="/img/trabajadoraa3.png"
              alt="Diploma"
              width={800}
              height={800}
              className=" object-contain shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiplomaInfo;
