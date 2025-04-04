import React from 'react';
import Image from 'next/image';

const valores = [
  { id: 1, titulo: 'Integridad', descripcion: 'Actuamos con honestidad y transparencia en todas nuestras operaciones.' },
  { id: 2, titulo: 'Compromiso', descripcion: 'Nos dedicamos plenamente a satisfacer las necesidades de nuestros clientes.' },
  { id: 3, titulo: 'Calidad', descripcion: 'Ofrecemos productos y servicios que cumplen con los más altos estándares.' },
  { id: 4, titulo: 'Responsabilidad', descripcion: 'Asumimos la responsabilidad de nuestras acciones y decisiones.' },
  { id: 5, titulo: 'Trabajo en Equipo', descripcion: 'Colaboramos efectivamente para lograr objetivos comunes.' },
  { id: 6, titulo: 'Innovación', descripcion: 'Buscamos constantemente nuevas formas de mejorar y crecer.' },
];

const NuestrosValores = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestros Valores</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Los valores que guían nuestras acciones y decisiones diarias, formando la base 
            de nuestra cultura empresarial y relación con nuestros clientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valores.map((valor) => (
            <div key={valor.id} className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-3 text-blue-600">{valor.titulo}</h3>
              <p className="text-gray-600">{valor.descripcion}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 relative rounded-xl overflow-hidden">
          <div className="relative h-[300px] w-full">
            <Image 
              src="/valores-banner.jpg" 
              alt="Nuestros Valores" 
              fill 
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-blue-600 bg-opacity-80 flex flex-col items-center justify-center text-white p-6">
              <h3 className="text-2xl font-bold mb-4 text-center">Comprometidos con la Excelencia</h3>
              <p className="text-center max-w-3xl mb-6">
                Nuestros valores nos impulsan a buscar la excelencia en todo lo que hacemos, 
                proporcionando soluciones de calidad que generan confianza y satisfacción.
              </p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded font-medium hover:bg-blue-50 transition-colors">
                Nuestra Historia
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NuestrosValores;
