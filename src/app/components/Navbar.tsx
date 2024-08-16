"use client"
import { useState } from 'react';
import Link from 'next/link';
import { MagicMotion } from "react-magic-motion";
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick =()=>{
    setIsOpen(false)
  }

  return (
    <MagicMotion>
    <nav className="bg-red-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Image
           src='/img/logorectangulo.jpg' 
           alt="logo"
            width={100} 
            height={100}
          />
        </div>
        <div className="block lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
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
            isOpen ? 'fixed inset-0 bg-red-600 flex flex-col items-center justify-center z-50' : 'hidden'
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
          <ul className="text-white lg:flex lg:space-x-4">
            <li className="text-2xl lg:text-base my-2 lg:my-0">
              <Link href="/" className='hvr-bounce-in' onClick={handleLinkClick}>Inicio</Link>
            </li>
            <li className="text-2xl lg:text-base my-2 lg:my-0">
              <Link href="/about" className='hvr-bounce-in' >Acerca De Nosotros</Link>
            </li>
            <li className="text-2xl lg:text-base my-2 lg:my-0">
              <Link href="/services" className='hvr-bounce-in'>Nuestros Servicios</Link>
            </li>
            <li className="text-2xl lg:text-base my-2 lg:my-0">
              <Link href="/diplomas" className='hvr-bounce-in'>Diplomados</Link>
            </li>
            <li className="text-2xl lg:text-base my-2 lg:my-0">
              <Link href="/alliances" className='hvr-bounce-in'>Alianzas Estratégicas</Link>
            </li>
            <li className="text-2xl lg:text-base my-2 lg:my-0">
              <Link href="/contact" className='hvr-bounce-in'>Contáctenos</Link>
            </li>
            <li className="text-2xl lg:text-base my-2 lg:my-0">
              <Link href="/branches" className='hvr-bounce-in'>Sucursales</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </MagicMotion>
  );
};

export default Navbar;
