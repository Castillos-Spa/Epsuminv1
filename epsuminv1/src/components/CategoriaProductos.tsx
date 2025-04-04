import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categorias = [
  { id: 1, nombre: 'Seguridad Industrial', imagen: '/categorias/seguridad.jpg' },
  { id: 2, nombre: 'Herramientas', imagen: '/categorias/herramientas.jpg' },
  { id: 3, nombre: 'Eléctricos', imagen: '/categorias/electricos.jpg' },
  { id: 4, nombre: 'Construcción', imagen: '/categorias/construccion.jpg' },
  { id: 5, nombre: 'Ferretería', imagen: '/categorias/ferreteria.jpg' },
];

const CategoriaProductos = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Categorías de Productos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categorias.map((categoria) => (
            <Link href={`/categoria/${categoria.id}`} key={categoria.id} className="group">
              <div className="flex flex-col items-center">
                <div className="rounded-full overflow-hidden w-40 h-40 mb-4 border-4 border-white shadow-lg group-hover:border-blue-500 transition-all">
                  <div className="relative w-full h-full">
                    <Image 
                      src={categoria.imagen} 
                      alt={categoria.nombre} 
                      fill 
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-center group-hover:text-blue-600 transition-colors">{categoria.nombre}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriaProductos;
