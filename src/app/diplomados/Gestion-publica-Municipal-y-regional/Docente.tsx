"use client"
import React from 'react';
import Image from 'next/image';
const DocentePrincipal = () => {
  return (
    <div className="bg-gray-950 p-6">
      <div className="max-w-5xl mx-auto bg-gray-900 rounded-lg shadow-md p-8">
        <div className="flex flex-col lg:flex-row lg:space-x-8 items-center">
          {/* Columna izquierda - Imagen y título */}
          <div className="flex-shrink-0 text-center lg:text-left mb-6 lg:mb-0">
            <div className="flex items-center justify-center lg:justify-start">
              {/* Ícono del profesor */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-700 flex items-center justify-center">
                    <Image src='/iconos/icon-docente.png' alt='docente' width={30} height={30}/>
                </div>
                <h3 className="text-2xl font-bold text-red-700">Docente Principal</h3>
              </div>
            </div>
            {/* Imagen del docente */}
            <Image
              src='/icons-profes/profe.jpg'
              alt='profe'
              width={20}
              height={20}
              className="rounded-full w-40 h-40 mx-auto lg:mx-0"
            />
            {/* Nombre del docente */}
            <h4 className="text-xl font-bold text-red-700 mt-4">
              Econ. Eduardo Máximo Ulloa Gonzales
            </h4>
          </div>

          {/* Columna derecha - Información del docente */}
          <div className="lg:flex-1">
            <p className="text-white mb-4">
              Titulado por la Universidad de Lima, egresado de la Maestría en
              Regulación de Servicios Públicos UPC/Escuela de Postgrado Laureates,
              que cuenta con una acreditación internacional en CQRM: Certificación
              en Gestión Cuantitativa del Riesgo. Experiencia en la Formulación,
              Evaluación, Implementación, Supervisión y Gestión de Proyectos Públicos
              y Privados bajo un enfoque de...
            </p>
            <p className="text-white">
              “Cadena de Valor”, he liderado estudios cuantitativos y cualitativos: Es
              experto en Determinación de Modelos de Negocio, Precios y Tarifas
              Reguladas, entre otras de Gas Natural, Tarifas de compartición de
              infraestructuras eléctricas, Proyectos de Telecomunicaciones – Red
              Dorsal Peruana de Fibra Óptica y Proyectos Regionales de Banda Ancha e
              Internet a cargo del FITEL-PERÚ...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocentePrincipal;
