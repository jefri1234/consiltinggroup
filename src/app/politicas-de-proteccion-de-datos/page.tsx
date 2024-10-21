import React from 'react';

//---declare a component there are two ways----
//--First traditional function 
//--second) function component  with types in TypeScript (React.FC)


const DataProtectionPolicy: React.FC = () => {
  return (
    <div className="h-screen   bg-gray-950 text-white py-10 px-4 md:px-20 lg:px-40">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Políticas de Protección de Datos</h1>
        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Introducción:</h2>
          <p className="text-md md:text-lg leading-relaxed">
            En Consultinggroup, nos comprometemos a proteger la privacidad de nuestros usuarios. Esta política explica cómo 
            recopilamos, usamos y protegemos la información personal.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Datos Recopilados:</h2>
          <ul className="list-disc pl-5 text-md md:text-lg leading-relaxed">
            <li>Nombre</li>
            <li>Correo electrónico</li>
            <li>Información de acceso (usuario y contraseña)</li>
            <li>Teléfono</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Uso de los Datos:</h2>
          <ul className="list-disc pl-5 text-md md:text-lg leading-relaxed">
            <li>Proporcionar acceso a los cursos y materiales.</li>
            <li>Enviar actualizaciones sobre nuevos cursos y eventos.</li>
            <li>Responder a consultas y solicitudes a través de formularios.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Derechos del Usuario:</h2>
          <ul className="list-disc pl-5 text-md md:text-lg leading-relaxed">
            <li>Acceso a la información.</li>
            <li>Rectificación de datos incorrectos.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Medidas de Seguridad:</h2>
          <ul className="list-disc pl-5 text-md md:text-lg leading-relaxed">
            <li>Encriptación de datos.</li>
            <li>Acceso restringido a la información personal.</li>
            <li>Actualizaciones regulares de nuestras prácticas de seguridad.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default DataProtectionPolicy;
