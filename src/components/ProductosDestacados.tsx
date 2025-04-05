import React from 'react';
import Image from 'next/image';

const productos = [
  { id: 1, nombre: 'Casco de Seguridad', precio: 25000, imagen: '/productos/casco.jpg' },
  { id: 2, nombre: 'Taladro Profesional', precio: 89000, imagen: '/productos/taladro.jpg' },
  { id: 3, nombre: 'Guantes de Nitrilo', precio: 12000, imagen: '/productos/guantes.jpg' },
  { id: 4, nombre: 'Botas Industriales', precio: 65000, imagen: '/productos/botas.jpg' },
];

const ProductosDestacados = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Productos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productos.map((producto) => (
            <div key={producto.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image 
                  src={producto.imagen} 
                  alt={producto.nombre} 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{producto.nombre}</h3>
                <p className="text-blue-600 font-bold">${producto.precio.toLocaleString()}</p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded font-medium hover:bg-blue-50 transition-colors">
            Ver Todos los Productos
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductosDestacados;
