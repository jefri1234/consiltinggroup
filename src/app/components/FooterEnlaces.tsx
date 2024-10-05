"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function FooterEnlaces({ className }: { className: string }) {
  return (

    <footer className={`bg-gray-950 text-white py-20 w-full ${className}`}>
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" passHref>
              <div className="flex items-center cursor-pointer">
                <Image
                  src="/img/logo-consulting.png"
                  width={120}
                  height={120}
                  alt="Logo"
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
            <Link href="https://www.facebook.com/groupconsultingperu?mibextid=ZbWKwL" passHref target='blanck'>
              <Image src='/redes-sociales/icon-facebook.png' alt='facebook' width={40} height={40} />
            </Link>
            <Link href="https://www.instagram.com/consulting.group.peru?igsh=MWhwbmVodzkwYzc2ZA==" passHref target='blanck'>
              <Image src='/redes-sociales/icon-instagram.png' alt='instagram' width={40} height={40} />
            </Link>
            <Link href="https://www.linkedin.com/company/consultinggroup/" passHref target='blanck'>
              <Image src='/redes-sociales/icon-linkeding.png' alt='linkeding' width={40} height={40} />
            </Link>
            <Link href="https://www.tiktok.com/@consulting.group.peru?_t=8oDafwW0FiX&_r=1" passHref target='blanck'>
              <Image src='/redes-sociales/icon-tiktok.png' alt='tiktok' width={40} height={40} />
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=51991403402&text=Hola,%20me%20puedes%20informar%20sobre:" passHref target='blanck'>
              <Image src='/redes-sociales/icon-watsap.png' alt='watsap' width={40} height={40} />
            </Link>
            <Link href="https://youtube.com/@consultinggroup1?si=n7uaZqHQwgAMcyMe" passHref target='blanck'>
              <Image src='/redes-sociales/icon-youtube.png' alt='youtube' width={40} height={40} />
            </Link>
            <Link href={'/login'} passHref className='text-gray-400 hover:text-white transition-colors duration-300 ms-5'>Administrador </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterEnlaces;
