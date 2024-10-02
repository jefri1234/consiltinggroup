import React from 'react';
import Link from 'next/link';
const WhatsAppInvitation: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full text-center">
        {/* Título de la alerta */}
        <h2 className="text-red-600 text-2xl font-bold">¡ESPERA!</h2>
        <p className="text-white text-lg mt-2">
          Te falta <span className="font-bold">un paso muy IMPORTANTE</span> para completar tu registro:
        </p>

        {/* Paso 1 */}
        <div className="mt-6">
          <div className="flex justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-16 h-16"
            />
          </div>
          <h3 className="text-red-600 text-xl font-bold mt-4">IMPORTANTE</h3>
          <p className="text-white text-lg font-bold">Únete a nuestro grupo de WhatsApp</p>
          <p className="text-white mt-2">
            Donde te enviaremos el link de Zoom y materiales de tu clase.
          </p>

          {/* Botón de unirse */}
          <Link
            href="https://chat.whatsapp.com/KM9IB60ukhJ5zxUpsH5yup"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg mt-4"
          >
            Unirme a WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppInvitation;

