import React from 'react';

const Temario = () => {
  const items = [
    "Módulo I : Sistema Nacional de Programación Multianual y Gestión de Inversiones Públicas Locales",
    "Módulo II : Formulación y Evaluación de Proyectos e IOARRs en Gestión Pública Local.",
    "Módulo III : Gestión de las Políticas Públicas Municipales en el Perú.",
    "Módulo IV : Gestión Articulada Regional y Municipal de los Sistemas Administrativo",
    "Módulo V : Gestión por Resultados Regional y Municipal",
    "Informe de auditoría, acciones correctivas y seguimiento.",
    "Módulo VII : Sistema Nacional de Planeamiento Público y la Gestión Pública Local.",
  ];

  return (
    <div className="bg-gray-900 text-white  flex items-center justify-center px-5 py-16">
      <div className="max-w-2xl w-full">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
          TEMARIO
        </h2>
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li
              key={index}
              className="bg-gray-800 text-center p-4 rounded-md text-sm md:text-base"
            >
              {index + 1}. {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Temario;
