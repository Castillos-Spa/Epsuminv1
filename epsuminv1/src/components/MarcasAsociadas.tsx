import React from 'react';
import Image from 'next/image';

const marcas = [
  { id: 1, nombre: 'DeWalt', logo: '/marcas/dewalt.png' },
  { id: 2, nombre: 'Bosch', logo: '/marcas/bosch.png' },
  { id: 3, nombre: 'Stanley', logo: '/marcas/stanley.png' },
  { id: 4, nombre: '3M', logo: '/marcas/3m.png' },
  { id: 5, nombre: 'Makita', logo: '/marcas/makita.png' },
  { id: 6, nombre: 'Milwaukee', logo: '/marcas/milwaukee.png' },
];

const MarcasAsociadas = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Marcas Asociadas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trabajamos con las marcas líderes en la industria para garantizar productos 
            de la más alta calidad y rendimiento para nuestros clientes.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-10 mb-16">
          {marcas.map((marca) => (
            <div key={marca.id} className="relative h-20 w-40 grayscale hover:grayscale-0 transition-all duration-300">
              <Image 
                src={marca.logo} 
                alt={marca.nombre} 
                fill 
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <div className="bg-yellow-100 p-3 rounded-md mr-4">
              <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold">Licitaciones - Próximamente</h3>
          </div>
          <p className="text-gray-600 mb-6">
            Estamos trabajando para implementar una sección de licitaciones donde podrá 
            encontrar oportunidades para su empresa y participar en los procesos de compra.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
            Recibir Notificaciones
          </button>
        </div>
      </div>
    </section>
  );
};

export default MarcasAsociadas;
