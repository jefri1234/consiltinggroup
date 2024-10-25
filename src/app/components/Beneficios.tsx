import Image from 'next/image';
import React from 'react';
import '../beneficios.css';

function Beneficios() {
  return (
    <div className="flex flex-col items-center justify-center py-14 px-4 bg-red-950">
      <div className="w-full max-w-3xl">
        <h2 className="text-3xl lg:text-4xl text-center font-extrabold text-white mb-10">
          Beneficios de Nuestras Especializaciones
        </h2>

        {/* Grupo 1 de Beneficios */}
        <div className="flex flex-col gap-8">
          <div className="flex gap-5 items-center">
            <Image
              src="/img/clasepresencial.png"
              width={70}
              height={70}
              alt="Clases presenciales"
              className="flex-shrink-0"
            />
            <div>
              <h3 className="font-bold text-lg text-white">Clases en vivo y Presenciales</h3>
              <p className="text-gray-300">
                Contamos con especializaciones virtuales en vivo y presenciales en nuestras sucursales.
              </p>
            </div>
          </div>

          <div className="flex gap-5 items-center">
            <Image
              src="/img/aulavirtual.png"
              width={70}
              height={70}
              alt="Aula virtual"
              className="flex-shrink-0"
            />
            <div>
              <h3 className="font-bold text-lg text-white">Acceso a aula Virtual</h3>
              <p className="text-gray-300">
                Accede a nuestra aula virtual para repasar las clases y reforzar tus conocimientos.
              </p>
            </div>
          </div>
        </div>

        {/* Grupo 2 de Beneficios */}
        <div className="flex flex-col gap-8 mt-10">
          <div className="flex gap-5 items-center">
            <Image
              src="/img/certificacion.png"
              width={70}
              height={70}
              alt="Certificación"
              className="flex-shrink-0"
            />
            <div>
              <h3 className="font-bold text-lg text-white">Certificación Acreditada</h3>
              <p className="text-gray-300">
                Obtén tu certificado físico y virtual con validez para concursos laborales.
              </p>
            </div>
          </div>

          <div className="flex gap-5 items-center">
            <Image
              src="/img/laboral.png"
              width={70}
              height={70}
              alt="Oportunidades laborales"
              className="flex-shrink-0"
            />
            <div>
              <h3 className="font-bold text-lg text-white">Oportunidades Laborales</h3>
              <p className="text-gray-300">
                Lograrás ser seleccionado en los puestos laborales por estar capacitado según el requerimiento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beneficios;
