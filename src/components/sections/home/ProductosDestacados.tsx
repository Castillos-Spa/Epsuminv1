"use client";

import React from 'react';
import ProductCard from '@/components/common/ProductCard';
import { Button } from '@/components/ui/Button';

const productos = [
  { id: 1, nombre: 'Casco de Seguridad', precio: 25000, imagen: '/productos/casco.jpg', isNew: true },
  { id: 2, nombre: 'Taladro Profesional', precio: 89000, imagen: '/productos/taladro.jpg', descuento: 10 },
  { id: 3, nombre: 'Guantes de Nitrilo', precio: 12000, imagen: '/productos/guantes.jpg' },
  { id: 4, nombre: 'Botas Industriales', precio: 65000, imagen: '/productos/botas.jpg', isNew: true },
];

const ProductosDestacados = () => {
  const handleVerDetalles = (id: number) => {
    console.log(`Ver detalles del producto ${id}`);
    // Aquí podrías implementar la navegación a la página de detalles
  };

  return (
    <section className="py-16 fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Productos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productos.map((producto) => (
            <div key={producto.id} className="slide-up" style={{ animationDelay: `${producto.id * 100}ms` }}>
              <ProductCard
                id={producto.id}
                nombre={producto.nombre}
                precio={producto.precio}
                imagen={producto.imagen}
                descuento={producto.descuento}
                isNew={producto.isNew}
                onVerDetalles={handleVerDetalles}
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver Todos los Productos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductosDestacados;
