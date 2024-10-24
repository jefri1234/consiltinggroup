"use client"
import {useState } from 'react';
import Image from 'next/image';
import BotonWatsap from './BotonWatsap';
// components/Popup.js
// Ventana de anuncio ni bien cargue la pagina (MUESTRA LA VENTANA)


const Popup = () => {
  const [isOpen, setIsOpen] = useState(true); // Cambiar a true para que aparezca siempre al cargar

  //funcion para cerrar la ventana
  const closePopup = () => {
    setIsOpen(false);
  };

  //si (isOpen) no es true entonses retorna null que no mostrara nada osea cierra
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-white pb-3">¡Especializate con nosotros!</h2>
        <Image src='./cursos/diplomado_en_Logistica_y_Operaciones.png' alt='anuncio' width={400} height={400} className=' rounded-lg'/>
        <div className='flex flex-col-reverse justify-center items-center gap-2 p-4'>
        <button 
          onClick={closePopup} 
          className=" bg-red-800 text-white font-bold py-3 px-7 rounded hover:bg-red-600"
        >
          salir
        </button>
        <BotonWatsap/>
        </div>
      </div>
    </div>
  );
};

export default Popup;

