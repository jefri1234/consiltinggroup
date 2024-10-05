import Image from 'next/image';

const CertificateVerification = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-full bg-gray-900 p-10 md:p-10 lg:p-20 ">
      {/* Imagen */}
      <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
        <div className="relative w-full h-60 md:h-72 lg:h-80 xl:h-96">
          <Image 
            src="/img/ejecutivos.png" 
            alt="Persona feliz con laptop" 
            layout="fill" 
            objectFit="contain"  // Mantiene proporciones sin deformar
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Contenido */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-white font-bold mb-4">
          Verificación de Certificado
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-4">
          Todos nuestros certificados se encuentran debidamente registrados para la validación laboral.
        </p>

        {/* Input para DNI */}
        <div className="mb-6">
          <input 
            type="text" 
            placeholder="Ingresa tu DNI" 
            className="w-full lg:w-3/4 px-4 py-2 rounded-lg bg-gray-700 text-white mb-4"
          />
          <button className="w-full lg:w-3/4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all">
            Buscar
          </button>
        </div>

        {/* Mensaje de felicitaciones */}
        <p className="text-sm md:text-base lg:text-lg text-gray-300 mt-6">
          ¡Felicitaciones por culminar tu curso! Tu esfuerzo y dedicación te han llevado hasta aquí. 
          Ya puedes obtener el puesto laboral que deseas y recuerda que este es solo el comienzo de tu éxito profesional. 
          ¡Sigue adelante y alcanza nuevas metas!
        </p>
      </div>
    </div>
  );
};

export default CertificateVerification;
