import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <Image 
          src="/hero-background.jpg" 
          alt="Hero Background" 
          fill 
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Epsumin: Equipos y Suministros Industriales</h1>
          <p className="text-xl text-white mb-8">Soluciones industriales integrales para su empresa</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors">
            Cotizar Ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
