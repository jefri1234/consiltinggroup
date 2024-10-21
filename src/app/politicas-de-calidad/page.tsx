import React from 'react';

const QualityCommitment: React.FC = () => {
  return (
    <div className="h-screen bg-gray-950 text-white py-10 px-4 md:px-20 lg:px-40">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Compromiso con la Calidad</h1>
        
        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">En Consultinggroup, nos comprometemos a ofrecer cursos de alta calidad.</h2>
          <p className="text-md md:text-lg leading-relaxed">
            Nuestro objetivo es proporcionar una experiencia educativa excepcional.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Estándares:</h2>
          <p className="text-md md:text-lg leading-relaxed">
            Nuestros cursos son diseñados por expertos en el tema y revisados regularmente para asegurar que el contenido sea actualizado y relevante.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Feedback y Mejora Continua:</h2>
          <p className="text-md md:text-lg leading-relaxed">
            Fomentamos el feedback de nuestros usuarios. Utilizamos encuestas y formularios para recoger tus opiniones y mejorar nuestros cursos continuamente.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Certificaciones y Acreditaciones:</h2>
          <p className="text-md md:text-lg leading-relaxed">
            Contamos con certificaciones en todos los cursos que los usuarios puedan ingresar, lo que conlleva un mayor respaldo de la calidad de nuestros cursos.
          </p>
        </section>
      </div>
    </div>
  );
};

export default QualityCommitment;
