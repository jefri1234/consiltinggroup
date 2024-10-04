import React from 'react';
import Image from 'next/image';
const AlianzasEstrategicas: React.FC = () => {
  return (
    <div className="bg-gray-200 py-12 px-4 md:px-8 lg:px-24 xl:px-32 h-full">
      {/* Título del componente */}
      <section className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
          Alianzas Estratégicas
        </h1>
      </section>

      {/* Contenido principal */}
      <section className="bg-gray-100 p-6 lg:p-10 rounded-lg shadow-md text-black text-center md:flex md:items-center md:justify-between">
        {/* Imagen de la alianza (puedes cambiar la ruta de la imagen aquí) */}
        <div className="mb-6 md:mb-0 md:mr-6 flex justify-center">
            <Image
            src="/img/sanmarcos-logo.png"
            width={500}
            height={500}
            alt="Logo de la alianza"
            className="h-32 md:h-40 lg:h-48 xl:h-56 object-contain"
          />
        </div>

        {/* Descripción de la alianza */}
        <div className="md:flex-1">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            Universidad Nacional Mayor de San Marcos
          </h2>
          <p className="text-black text-sm md:text-base lg:text-lg xl:text-xl">
            Contamos con una Alianza Estratégica con la Facultad de Ciencias
            Económicas (FCE) - Centro de Responsabilidad Social y Extensión
            Universitaria (CERSEU), de la Universidad Nacional Mayor de San
            Marcos “Universidad del Perú, Decana de América”.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AlianzasEstrategicas;
