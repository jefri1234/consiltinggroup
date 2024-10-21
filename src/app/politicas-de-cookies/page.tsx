import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="h-screen bg-gray-950 text-white py-10 px-4 md:px-20 lg:px-40">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Políticas de Cookies</h1>
        
        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Definición de Cookies:</h2>
          <p className="text-md md:text-lg leading-relaxed">
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web. Se utilizan para mejorar tu experiencia en línea.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Tipos de Cookies Utilizadas:</h2>
          <ul className="list-disc pl-5 text-md md:text-lg leading-relaxed">
            <li>Cookies esenciales: necesarias para el funcionamiento del sitio.</li>
            <li>Cookies de rendimiento: nos ayudan a entender cómo los usuarios interactúan con nuestro sitio.</li>
            <li>Cookies de funcionalidad: permiten recordar tus preferencias.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Consentimiento:</h2>
          <p className="text-md md:text-lg leading-relaxed">
            Al utilizar nuestro sitio, aceptas el uso de cookies. Puedes gestionar tus preferencias de cookies a través de la configuración de tu navegador.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Cómo Gestionar Cookies:</h2>
          <p className="text-md md:text-lg leading-relaxed">
            Puedes eliminar o rechazar cookies a través de las opciones de tu navegador. Sin embargo, ten en cuenta que esto puede afectar la funcionalidad del sitio.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;
