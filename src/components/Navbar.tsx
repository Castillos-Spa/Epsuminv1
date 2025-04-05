import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-blue-600">EPSUMIN</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600">Inicio</Link>
          <Link href="#productos" className="hover:text-blue-600">Productos</Link>
          <Link href="#servicios" className="hover:text-blue-600">Servicios</Link>
          <Link href="#nosotros" className="hover:text-blue-600">Nosotros</Link>
          <Link href="#contacto" className="hover:text-blue-600">Contacto</Link>
        </div>
        <div className="md:hidden">
          <button className="text-gray-500 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
