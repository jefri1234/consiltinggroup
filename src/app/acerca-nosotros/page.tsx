import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <div className="bg-gray-950 py-12 px-4 md:px-8 lg:px-16">
      {/* Título */}
      <section className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Formamos a los ejecutivos <br /> que van a destacar <br /> en el mundo laboral
        </h1>
      </section>

      {/* Misión y Visión */}
      <section className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-16 space-y-8 lg:space-y-0 lg:space-x-16">
        <div className="lg:w-1/2 bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-white">Misión</h2>
          <p className="text-white">
            Generar soluciones efectivas a través <br />
            de nuestros servicios personalizados, <br />
            para que nuestros clientes logren sus objetivos <br />
            de negocio y de capital humano.
          </p>
        </div>
        <div className="lg:w-1/2 bg-gray-900 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-white">Visión</h2>
          <p className="text-white">
            Destacar por nuestro liderazgo en la gestión humana <br />
            de las organizaciones, permitiendo a nuestros <br />
            clientes trascender en la sociedad.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Respeto */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md text-center">
          <div className="text-green-500 mb-4">
             <Image src='/iconos-valores/icon-respeto.png' alt='respeto' width={90} height={90}
             className='m-auto'
             /> {/* Puedes reemplazar esto con íconos relevantes */}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">Respeto</h3>
          <p className="text-white">
            Promovemos la tolerancia entre los colaboradores, <br />
            la comunidad y el medio ambiente.
          </p>
        </div>

        {/* Valor Compartido */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md text-center">
          <div className="text-blue-500 mb-4">
          <Image src='/iconos-valores/icon-valor-compartido.png' alt='valor-compartido' width={90} height={90}
             className='m-auto'
             />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">Valor Compartido</h3>
          <p className="text-white">
            Generamos oportunidades laborales para la sociedad <br />
            de la mano de nuestros clientes.
          </p>
        </div>

        {/* Escucha Activa */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md text-center">
          <div className="text-pink-500 mb-4">
          <Image src='/iconos-valores/icon-escucha-activa.png' alt='escucha-activa' width={90} height={90}
             className='m-auto'
             />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">Escucha Activa</h3>
          <p className="text-white">
            Siempre estamos atentos a las necesidades <br />
            que surgen en las organizaciones.
          </p>
        </div>

        {/* Trabajo en Equipo */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md text-center">
          <div className="text-gray-500 mb-4">
          <Image src='/iconos-valores/icon-trabajo-equipo.png' alt='trabajo-equipo' width={90} height={90}
             className='m-auto'
             />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">Trabajo en Equipo</h3>
          <p className="text-white">
            Fomentamos la mutua cooperación <br />
            para el logro de objetivos.
          </p>
        </div>

        {/* Pasión */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md text-center">
          <div className="text-red-500 mb-4">
          <Image src='/iconos-valores/icon-pasion.png' alt='pasion' width={90} height={90}
             className='m-auto'
             />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">Pasión</h3>
          <p className="text-white">
            Nos apasiona las personas, <br />
            por eso encontramos trabajo <br />
            a gente que ama lo que hacen.
          </p>
        </div>

        {/* Resp. Social Empresarial */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md text-center">
          <div className="text-green-700 mb-4">
          <Image src='/iconos-valores/icon-ambiente.png' alt='ambiente' width={90} height={90}
             className='m-auto'
             />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">Resp. Social Empresarial</h3>
          <p className="text-white">
            Contribuimos a la mejora de la sociedad <br />
            de manera económica, cultural y ambiental.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
