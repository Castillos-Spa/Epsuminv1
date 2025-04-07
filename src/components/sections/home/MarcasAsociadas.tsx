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
        {/* <div className="text-center mb-12">
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
        </div> */}
        
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 uppercase">Licitaciones</h2>
          <h3 className="text-2xl font-semibold text-red-600 mb-6 tracking-wider">PRÓXIMAMENTE</h3>

          <div className="flex justify-center mb-8">
            <div className="animate-spin-slow">
              <Image 
                src="/img/loading1.png"
                alt="Licitaciones Icono"
                width={120}
                height={120}
              />
            </div>
          </div>
          <p className="text-lg max-w-2xl mx-auto text-gray-800 font-semibold leading-relaxed mb-4">
            Estamos construyendo un espacio para conectar.<br />
            Pronto, este será un punto de encuentro en <strong>El Valle</strong> para nuevas oportunidades y colaboraciones.
          </p>
          <p className="text-xl font-bold text-blue-800 mt-6">
            ¡Vuelve pronto para descubrirlo!
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarcasAsociadas;
