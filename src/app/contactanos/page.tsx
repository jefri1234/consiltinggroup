"use client"
import React, { useState } from 'react';

const Contactenos: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    dni: '',
    celular: '',
    correo: '',
    ciudad: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí podrías manejar el envío del formulario
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="bg-gray-950 py-12 px-4 md:px-8 lg:px-24 xl:px-32 text-white">
      {/* Título */}
      <section className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Contáctenos
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mt-4">
          ¡Capacítate hoy mismo con nuestros cursos y diplomados!
          <br />
          Aumenta tus habilidades y logra tus objetivos profesionales con nosotros.
        </p>
      </section>

      {/* Sección de motivación */}
      <section className="text-center bg-gray-900 p-6 lg:p-10 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          ¡Invierta en su futuro hoy!
        </h2>
        <p className="text-white text-sm md:text-base lg:text-lg">
          Ofrecemos una amplia gama de cursos y diplomados diseñados para mejorar tus habilidades
          profesionales y ayudarte a avanzar en tu carrera. Aprovecha esta oportunidad de
          aprendizaje, inscríbete y lleva tu desarrollo profesional al siguiente nivel.
        </p>
      </section>

      {/* Formulario */}
      <section className="bg-gray-800 p-6 lg:p-10 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="nombre" className="block text-white mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label htmlFor="apellidos" className="block text-white mb-2">
              Apellidos
            </label>
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label htmlFor="dni" className="block text-white mb-2">
              DNI
            </label>
            <input
              type="text"
              id="dni"
              name="dni"
              value={formData.dni}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label htmlFor="celular" className="block text-white mb-2">
              Celular
            </label>
            <input
              type="text"
              id="celular"
              name="celular"
              value={formData.celular}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label htmlFor="correo" className="block text-white mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label htmlFor="ciudad" className="block text-white mb-2">
              Ciudad
            </label>
            <input
              type="text"
              id="ciudad"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Botón de envío */}
          <div className="md:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out"
            >
              Enviar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contactenos;
