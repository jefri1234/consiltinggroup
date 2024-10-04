import React from 'react';
import Image from 'next/image';
const Sucursales: React.FC = () => {
  return (
    <div className="bg-gray-950 py-12 px-4 md:px-8 lg:px-24 xl:px-32 text-white">
      {/* Título */}
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white">
        Sucursales
      </h2>

      {/* Sección de contenido */}
      <p className="text-center text-lg md:text-xl lg:text-2xl mb-12 text-gray-400">
        Encuéntranos en nuestras sucursales en todo el país. Nos enorgullece estar más cerca de ti para brindarte la mejor educación y formación profesional. ¡Visítanos hoy mismo!
      </p>

      {/* Sucursales y mapa */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Información de sucursales */}
        <div className="flex flex-col gap-6">
          {/* Sucursal 1 */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Lima Central:</h3>
            <p className="text-base md:text-lg">Calle Las Camelias N° 877</p>
            <p className="text-base md:text-lg">Contacto: 991 403 402</p>
          </div>

          {/* Sucursal 2 */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Lima Provincia HUACHO:</h3>
            <p className="text-base md:text-lg">Av. Salaverry N° 356 of. 303</p>
            <p className="text-base md:text-lg">Contacto: 991 403 402</p>
          </div>
        </div>

        {/* Mapa */}
        <div className="flex justify-center items-center w-full md:w-auto">
          <Image
            src="/img/mapa-peru.png"  // Reemplaza esto por la ruta correcta a la imagen del mapa en tu proyecto
            alt="Mapa de sucursales"
            width={500}
            height={500}
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Sucursales;
