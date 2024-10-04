import React from 'react';

const NuestrosServicios: React.FC = () => {
  return (
    <div className="bg-gray-950 py-12 px-4 md:px-8 lg:px-16 h-screen">
      {/* Título del componente */}
      <section className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Nuestros Servicios
        </h1>
        <p className="text-white mt-2">
          Descubre los servicios que ofrecemos para mejorar la competitividad y eficiencia de tu empresa.
        </p>
      </section>

      {/* Servicios */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Especializaciones Empleables */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Especializaciones <br /> Empleables
          </h2>
          <p className="text-white">
            Contamos con cursos especializados para mejorar la <br />
            competitividad laboral para el logro de puestos laborales <br />
            y ascensos en las organizaciones.
          </p>
        </div>

        {/* Capacitaciones In Company */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Capacitaciones <br /> In Company
          </h2>
          <p className="text-white">
            Nuestro servicio está orientado hacia el diseño de acciones <br />
            formativas de todo tipo, adaptadas a las necesidades <br />
            reales de su empresa, que le otorgarán efectividad <br />
            y competitividad en el mercado, y contribuirá <br />
            a mejorar los resultados de su organización.
          </p>
        </div>

        {/* Selección de Personal */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Selección de Personal
          </h2>
          <p className="text-white">
            Ofrecemos la búsqueda de personal idóneo para su <br />
            organización a todo nivel operativo, administrativo, <br />
            ejecutivo y gerencial.
          </p>
        </div>

        {/* Consultorías */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Consultorías
          </h2>
          <p className="text-white">
            Disponemos de nuestro servicio de <br />
            consultoría según el área que requiera, <br />
            con la finalidad de mejorar los procesos <br />
            de las empresas.
          </p>
        </div>
      </section>
    </div>
  );
};

export default NuestrosServicios;
