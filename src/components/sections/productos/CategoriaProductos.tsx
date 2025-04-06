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
    <div>
      <div className="bg-naranjita py-4 mb-6 w-md rounded-full center mx-auto">
        <h2 className="text-2xl font-bold text-center text-white">CONOCÉ NUESTRAS CATEGORÍAS</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categorias.map((categoria) => (
          <Link href={`/categoria/${categoria.id}`} key={categoria.id} className="group">
            <div className="flex flex-col items-center">
              <div className="rounded-full overflow-hidden w-20 h-20 md:w-24 md:h-24 mb-3 border-2 border-secondary bg-white shadow-md group-hover:border-primary group-hover:shadow-lg transition-all">
                <div className="relative w-full h-full">
                  <Image 
                    src={categoria.imagen} 
                    alt={categoria.nombre} 
                    fill 
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <h3 className="text-sm md:text-base font-medium text-center text-primary group-hover:text-secondary transition-colors">{categoria.nombre}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriaProductos;