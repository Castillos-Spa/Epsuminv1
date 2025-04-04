import React from 'react';
import Image from 'next/image';

const AcercaDeNosotros = () => {
  return (
    <section className="py-16 bg-white" id="nosotros">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Acerca de Nosotros</h2>
            <p className="text-gray-600 mb-4">
              EPSUMIN es una empresa especializada en la venta de equipos y suministros industriales, 
              con más de 15 años de experiencia atendiendo las necesidades del sector minero, 
              construcción e industrial en el Valle.
            </p>
            <p className="text-gray-600 mb-4">
              Nuestro compromiso es brindar soluciones integrales de alta calidad, con un 
              servicio personalizado y eficiente, garantizando la satisfacción de nuestros clientes.
            </p>
            <p className="text-gray-600 mb-6">
              Contamos con un equipo de profesionales altamente capacitados, listos para 
              asesorarle y proporcionarle los mejores productos y servicios del mercado.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <span className="text-3xl font-bold text-blue-600 block">15+</span>
                <span className="text-gray-600">Años de experiencia</span>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-blue-600 block">500+</span>
                <span className="text-gray-600">Clientes satisfechos</span>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-blue-600 block">2000+</span>
                <span className="text-gray-600">Proyectos completados</span>
              </div>
            </div>
            
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
              Conocer Más
            </button>
          </div>
          
          <div className="lg:w-1/2 relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="/about-us.jpg" 
              alt="Equipo EPSUMIN" 
              fill 
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcercaDeNosotros;
