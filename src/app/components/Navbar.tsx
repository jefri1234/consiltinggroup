"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MagicMotion } from "react-magic-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <MagicMotion>
      <nav className="bg-red-900 text-white p-3">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white  flex items-center">
            <Image
              src='/img/logorectangulo.jpg'
              alt="logo"
              width={120}
              height={120}
              className="rounded-md"
            />
          </div>
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              isOpen ? 'fixed inset-0 bg-red-900 text-white flex flex-col items-center justify-center z-50' : 'hidden'
            } lg:flex lg:items-center lg:w-auto`}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white lg:hidden"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <ul className="flex flex-col lg:flex-row lg:space-x-6">
              <li className="my-2 lg:my-0">
                <Link href="/" passHref>
                  <span
                    className="text-xl hover:text-gray-400 transition-colors duration-300"
                    onClick={handleLinkClick}
                  >
                    Inicio
                  </span>
                </Link>
              </li>
              <li className="my-2 lg:my-0">
                <Link href="/about" passHref>
                  <span className="text-xl hover:text-gray-400 transition-colors duration-300">
                    Acerca De Nosotros
                  </span>
                </Link>
              </li>
              <li className="my-2 lg:my-0">
                <Link href="/services" passHref>
                  <span className="text-xl hover:text-gray-400 transition-colors duration-300">
                    Nuestros Servicios
                  </span>
                </Link>
              </li>
              <li className="my-2 lg:my-0">
                <Link href="/diplomas" passHref>
                  <span className="text-xl hover:text-gray-400 transition-colors duration-300">
                    Diplomados
                  </span>
                </Link>
              </li>
              <li className="my-2 lg:my-0">
                <Link href="/alliances" passHref>
                  <span className="text-xl hover:text-gray-400 transition-colors duration-300">
                    Alianzas Estratégicas
                  </span>
                </Link>
              </li>
              <li className="my-2 lg:my-0">
                <Link href="/contact" passHref>
                  <span className="text-xl hover:text-gray-400 transition-colors duration-300">
                    Contáctenos
                  </span>
                </Link>
              </li>
              <li className="my-2 lg:my-0">
                <Link href="/branches" passHref>
                  <span className="text-xl hover:text-gray-400 transition-colors duration-300">
                    Sucursales
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </MagicMotion>
  );
};

export default Navbar;
