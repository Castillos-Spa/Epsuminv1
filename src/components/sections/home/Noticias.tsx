import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const noticias = [
  {
    id: 1,
    titulo: 'Nuevas inversiones mineras en el Valle',
    extracto: 'Se anuncian importantes inversiones en el sector minero que impulsarán el desarrollo económico de la región.',
    fecha: '15 Jun 2025',
    imagen: '/img/carpas-para-la-mineria.jpg',
    categoria: 'Minería'
  },
  {
    id: 2,
    titulo: 'Avances en proyectos de construcción',
    extracto: 'Los proyectos de infraestructura muestran un avance significativo generando empleo en la zona.',
    fecha: '28 May 2025',
    imagen: '/img/carpas-para-la-mineria.jpg',
    categoria: 'Construcción'
  },
  {
    id: 3,
    titulo: 'Nuevas normas de seguridad industrial',
    extracto: 'Se implementan nuevas normativas de seguridad que las empresas deberán cumplir a partir del próximo mes.',
    fecha: '10 Abr 2025',
    imagen: '/img/carpas-para-la-mineria.jpg',
    categoria: 'Normativa'
  },
];

const Noticias = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-blue-950">Noticias del Valle</h2>
          <Link href="/noticias" className="text-blue-950 hover:text-amber-600 inline-flex items-center">
            <span>Ver todas</span>
            <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticias.map((noticia) => (
            <article key={noticia.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow animate-fade-up transition-all duration-300">
              <div className="relative h-48 overflow-hidden group">
                <Image 
                  src={noticia.imagen}
                  alt={noticia.titulo} 
                  fill 
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover"
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute top-3 left-3 bg-blue-950 text-white text-xs font-bold px-2 py-1 rounded">
                  {noticia.categoria}
                </div>
              </div>
              
              <div className="p-5">
                <p className="text-gray-500 text-sm mb-2">{noticia.fecha}</p>
                <h3 className="font-bold text-lg mb-2 text-amber-600">{noticia.titulo}</h3>
                <p className="text-gray-600 mb-4">{noticia.extracto}</p>
                <Link href={`/noticias/${noticia.id}`} className="text-blue-950 hover:text-amber-600 inline-flex items-center group">
                  <span>Leer más</span>
                  <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Noticias;
