import Image from 'next/image';

const CertificateVerification = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 p-10 ">
      {/* Imagen */}
      <div className="flex justify-center w-full mb-6">
        <Image 
          src="/img/ejecutivos.png" 
          alt="Persona feliz con laptop" 
          width={350}
          height={350}
          className="rounded-lg"
        />
      </div>

      {/* Contenido */}
      <div className="w-full max-w-md text-center lg:text-left">
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
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white mb-4"
          />
          <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all">
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
