import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-4 bg-gradient-to-b from-white/80 to-white/90 backdrop-filter backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4">
        {/* Estructura de tres columnas con flexbox */}
        <div className="flex justify-between items-center">
          {/* Logo (izquierda) */}
          <div className="w-1/4">
            <Link href="/" className="text-2xl font-bold text-blue-950">EPSUMIN</Link>
          </div>
          
          {/* Navegación (centro) */}
          <div className="w-2/4 flex justify-center">
            <div className="hidden md:flex space-x-6 text-center">
              <Link href="#productos" className="text-black hover:text-primary transition-colors">Productos</Link>
              <Link href="#servicios" className="text-black hover:text-primary transition-colors">Servicios</Link>
              <Link href="#nosotros" className="text-black hover:text-primary transition-colors">Nosotros</Link>
              <Link href="#contacto" className="text-black hover:text-primary transition-colors">Contacto</Link>
            </div>
          {/* Redes sociales (derecha) */}
          <div className="w-1/4 flex justify-end space-x-4">
            <a 
              href="https://www.instagram.com/epsumin" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black hover:text-[#E1306C] transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={22} />
            </a>
            <a 
              href="https://wa.me/56912345678" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black hover:text-[#25D366] transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={22} />
            </a>
            <a 
              href="https://www.facebook.com/epsumin" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black hover:text-[#1877F2] transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook size={22} />
            </a>
          </div>
          </div>
          
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
