'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const loadFlowbite = async () => {
      await import('flowbite');
    };
    loadFlowbite();
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Cierra el menú al hacer clic en un enlace
  };

  return (
    <nav className="bg-red-800 dark:bg-gray-900  w-full text-center border-red-700 border-solid border-b-2">
      <div className="flex flex-wrap items-center justify-evenly mx-auto p-1">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse py-3">
          <Image src="/img/logo-consulting.png" alt="logo-consulting" width={150} height={150} priority={true} />
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Abrir el menu principal</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/" onClick={handleLinkClick} className="block py-2 px-3 text-black bg-red-800 rounded md:bg-transparent md:text-gray-400 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Inicio</Link>
            </li>
            <li>
              <Link href="/acerca-nosotros" onClick={handleLinkClick} className="block py-2 px-3 text-white rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Acerca Nosotros</Link>
            </li>
            <li>
              <Link href="/nuestros-servicios" onClick={handleLinkClick} className="block py-2 px-3 text-white rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Nuestros servicios</Link>
            </li>
            <li>
              <Link href="/#diplomados" onClick={handleLinkClick} className="block py-2 px-3 text-white rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Diplomados</Link>
            </li>
            <li>
              <Link href="/alianzas-estrategicas" onClick={handleLinkClick} className="block py-2 px-3 text-white rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Alianzas estrategicas</Link>
            </li>
            <li>
              <Link href="/contactanos" onClick={handleLinkClick} className="block py-2 px-3 text-white rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contactanos</Link>
            </li>
            <li>
              <Link href="/sucursales" onClick={handleLinkClick} className="block py-2 px-3 text-white rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sucursales</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
