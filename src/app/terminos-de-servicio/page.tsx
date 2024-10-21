import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="h-screen bg-gray-950 text-white py-10 px-4 md:px-20 lg:px-40">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Términos de Servicio</h1>
        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Introducción:</h2>
          <p className="text-md md:text-lg leading-relaxed">
            Estos Términos de Servicio regulan el uso de Consultinggroup. Al acceder y utilizar nuestros servicios, aceptas cumplir con estos términos.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Uso del Sitio:</h2>
          <ul className="list-disc pl-5 text-md md:text-lg leading-relaxed">
            <li>Utilizar el sitio solo para fines legales.</li>
            <li>No compartir sus credenciales de acceso con terceros.</li>
            <li>No intentar acceder a áreas restringidas del sitio.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Responsabilidades del Usuario:</h2>
          <p className="text-md md:text-lg leading-relaxed">
            Los usuarios son responsables de mantener la confidencialidad de su contraseña y de todas las actividades que ocurran en su cuenta.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Limitaciones de Responsabilidad:</h2>
          <p className="text-md md:text-lg leading-relaxed">
            Consultinggroup no se hace responsable de daños indirectos o incidentales que surjan del uso de nuestros servicios.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Modificaciones de los Términos:</h2>
          <p className="text-md md:text-lg leading-relaxed">
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones se publicarán en el sitio y se considerarán aceptadas si continúas utilizando el servicio.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
