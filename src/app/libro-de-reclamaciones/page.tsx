import React from 'react';
import Link from 'next/link';
const ClaimsBook: React.FC = () => {
  return (
    <div className="h-screen bg-gray-950 text-white py-10 px-4 md:px-20 lg:px-40">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Libro de Reclamaciones</h1>
        
        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Objetivo:</h2>
          <p className="text-md md:text-lg leading-relaxed">
            El Libro de Reclamaciones es un espacio donde los usuarios pueden presentar sus inquietudes y reclamaciones sobre nuestros servicios.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Cómo Presentar una Reclamación:</h2>
          <p className="text-md md:text-lg leading-relaxed">
            Para presentar una reclamación, envíanos un correo electrónico a <Link href="mailto:cg.educacionejecutiva@gmail.com" className="text-blue-400 underline">cg.educacionejecutiva@gmail.com</Link>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Tiempo de Respuesta:</h2>
          <p className="text-md md:text-lg leading-relaxed">
            Nos comprometemos a responder todas las reclamaciones dentro de 5-10 días hábiles.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Compromiso de Resolución:</h2>
          <p className="text-md md:text-lg leading-relaxed">
            Cada reclamación será tratada con seriedad y nuestro compromiso es resolverla de manera justa y transparente.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ClaimsBook;
