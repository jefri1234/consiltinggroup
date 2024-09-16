import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function FooterEnlaces() {
  return (
    <footer className="bg-gray-950 text-white py-20">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="#" passHref>
              <div className="flex items-center cursor-pointer">
                <Image
                  src="/img/logorectangulo.jpg"
                  width={120}
                  height={120}
                  alt="Logo"
                  className="rounded-md"
                />
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Servicios</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link href="#" passHref>
                    <span className="hover:text-gray-400 transition-colors duration-300">Especializaciones Empleables</span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" passHref>
                    <span className="hover:text-gray-400 transition-colors duration-300">Capacitaciones In Company</span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" passHref>
                    <span className="hover:text-gray-400 transition-colors duration-300">Reclutamiento y Selección de personal</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    <span className="hover:text-gray-400 transition-colors duration-300">Consultoría y Asesoría en RRHH</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Ayuda</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link href="#" passHref>
                    <span className="hover:text-gray-400 transition-colors duration-300">Políticas de Protección de Datos</span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" passHref>
                    <span className="hover:text-gray-400 transition-colors duration-300">Términos de servicio</span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" passHref>
                    <span className="hover:text-gray-400 transition-colors duration-300">Políticas de Cookies</span>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" passHref>
                    <span className="hover:text-gray-400 transition-colors duration-300">Política de la Calidad</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    <span className="hover:text-gray-400 transition-colors duration-300">Libro de Reclamaciones</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Contáctanos</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link href="#" passHref>
                    <span className="hover:text-gray-400 transition-colors duration-300">Visítanos:</span>
                  </Link>
                </li>
                <li className="mb-4">
                  <span>Calle las Camelias 877 - San Isidro, Lima - Perú</span>
                </li>
                <li className="mb-4">
                  <span>Cel: 991 403 402</span>
                </li>
                <li>
                  <Link href="mailto:Info@consultinggroup.com.pe" passHref>
                    <span className="hover:text-gray-400 transition-colors duration-300">Info@consultinggroup.com.pe</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center">
            © 2024 <Link href="#" passHref><span className="hover:underline">Consulting Group™</span></Link>. Todos los derechos reservados.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link href="#" passHref>
              <span className="text-gray-400 hover:text-white transition-colors duration-300 ms-5">
                <svg className="w-4 h-4 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                </svg>
                <span className="sr-only">Facebook page</span>
              </span>
            </Link>
            <Link href="#" passHref>
              <span className="text-gray-400 hover:text-white transition-colors duration-300 ms-5">
                <svg className="w-4 h-4 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                </svg>
                <span className="sr-only">Discord community</span>
              </span>
            </Link>
            <Link href="#" passHref>
              <span className="text-gray-400 hover:text-white transition-colors duration-300 ms-5">
                <svg className="w-4 h-4 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 1.892c-.742.33-1.539.553-2.38.654A4.185 4.185 0 0 0 19.444.358a8.127 8.127 0 0 1-2.573.985A4.072 4.072 0 0 0 13.998 0a4.093 4.093 0 0 0-4.086 4.086c0 .319.037.628.104.924A11.628 11.628 0 0 1 2.226 1.295a4.045 4.045 0 0 0-1.1 2.264A4.071 4.071 0 0 0 1.746 7.6a4.094 4.094 0 0 0 1.855-.514 4.09 4.09 0 0 1-1.84 2.25 4.086 4.086 0 0 1-1.821.358 4.067 4.067 0 0 1-1.088-.14A4.075 4.075 0 0 0 2.55 12.4a8.156 8.156 0 0 1-4.645-1.37 11.578 11.578 0 0 0 6.268 1.8c7.527 0 11.65-6.279 11.65-11.65 0-.177-.004-.354-.01-.53A8.163 8.163 0 0 0 20 1.892Z" clipRule="evenodd"/>
                </svg>
                <span className="sr-only">Twitter page</span>
              </span>
            </Link>
            <Link href={'/login'} passHref className='text-gray-400 hover:text-white transition-colors duration-300 ms-5'>Administrador </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterEnlaces;
