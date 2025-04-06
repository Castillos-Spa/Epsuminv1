// Modify CategoriaProductos.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categorias = [
  { id: 1, nombre: 'Protección Personal', imagen: '/img/epp.jpg' },
  { id: 2, nombre: 'Instalaciones de Faena', imagen: '/img/carpas-para-la-mineria.jpg' },
  { id: 3, nombre: 'Equipos', imagen: '/img/generadores_electricos.jpg' },
  { id: 4, nombre: 'Maquinaria', imagen: '/img/komatsu.jpg' },
];

const CategoriaProductos = () => {
  return (
    <div className='w-full px-2 sm:px-4 md:px-6 lg:px-8' align-items-center >
      <div className="bg-naranja py-2 sm:py-3 md:py-4 mb-4 sm:mb-6 rounded-full  w-2xs mx-auto max-w-[200px] sm:max-w-[300px] mx-auto  ">
        <h2 className=" font-bold text-center text-white px-2">CONOCÉ NUESTRAS CATEGORÍAS</h2>
      </div>
      {/* Grid con mejor espaciado responsivo */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mx-1 sm:mx-3 md:mx-5 lg:mx-7">
        {categorias.map((categoria) => (
          <Link href={`/categoria/${categoria.id}`} key={categoria.id} className="group">
            <div className="flex flex-col items-center p-1 sm:p-2">
              {/* Tamaño de imagen adaptativo */}
              <div className="rounded-full overflow-hidden w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 
                            mb-2 sm:mb-3 border-2 border-secondary bg-white shadow-md 
                            group-hover:border-primary group-hover:shadow-lg transition-all">
                <div className="relative w-full h-full">
                  <Image 
                    src={categoria.imagen} 
                    alt={categoria.nombre} 
                    fill 
                    sizes="(max-width: 640px) 4rem, (max-width: 768px) 5rem, 6rem"
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
              </div>
              {/* Texto responsivo */}
              <h3 className="text-xs sm:text-sm md:text-base font-medium text-center text-primary 
                           group-hover:text-secondary transition-colors px-1 
                           line-clamp-2 h-[2.5em] sm:h-[2.5em]">
                {categoria.nombre}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriaProductos;