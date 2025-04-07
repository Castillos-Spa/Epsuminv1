"use client";
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const objetivos = [
  {
    id: 1,
    titulo: 'Trabajo Seguro y Sustentable',
    descripcion: 'Desarrollar un trabajo seguro para las personas, con alto sentido para nuestros clientes y respetuoso con el medioambiente.',
    icono: '🛡️'
  },
  {
    id: 2,
    titulo: 'Proveedor Estratégico',
    descripcion: 'Convertirnos en un proveedor estratégico en el sector minero, suministrando insumos para instalaciones de faena, equipos y maquinarias de manera eficiente.',
    icono: '🎯'
  },
  {
    id: 3,
    titulo: 'Maximizar Recursos',
    descripcion: 'Maximizar los recursos en nuestros servicios junto a nuestros colaboradores, representando ser una empresa de aporte a la sociedad del Valle de Elqui.',
    icono: '📈'
  }
];

const NuestrosObjetivos = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-950">Nuestros Objetivos</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {objetivos.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow border-l-4 border-amber-600 hover:scale-105 transition-transform duration-300" data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"} data-aos-delay={idx * 100} data-aos-duration="800">
              <div className="absolute -top-6 left-6 bg-white p-2 rounded-full shadow">
                <span className="text-3xl">{item.icono}</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-950 mt-6 mb-3">{item.titulo}</h3>
              <p className="text-gray-700">{item.descripcion}</p>
            </div>
          ))}
        </div>
        <div className="bg-blue-950 text-white rounded-lg p-10 grid md:grid-cols-2 gap-8 mb-16 transition duration-700 ease-in-out transform hover:scale-105" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200">
          <div className="items-center flex justify-center md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-30 h-30 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="10" />
              <polygon points="16 8 12 16 8 12 16 8" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Misión</h3>
            <p>
              Proveer servicios mineros y arriendo de maquinarias, con un equipo humano comprometido y capacitado, garantizando la calidad y seguridad en cada uno de nuestros procesos.
            </p>
          </div>
        </div>
        <div className="bg-blue-950 text-white rounded-lg p-10 grid md:grid-cols-2 transition duration-700 ease-in-out transform hover:scale-105" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="200">
          <div>
            <h3 className="text-2xl font-bold mb-2">Visión</h3>
            <p>
              Ser una empresa líder en el sector minero, reconocida por su compromiso con la seguridad, calidad y sostenibilidad, contribuyendo al desarrollo de la región y del país.
            </p>
          </div>
          <div className="items-center flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-40 h-40 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M9 18h6" />
              <path d="M10 22h4" />
              <path d="M12 2a7 7 0 00-4 13v1a2 2 0 002 2h4a2 2 0 002-2v-1a7 7 0 00-4-13z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuestrosObjetivos;
