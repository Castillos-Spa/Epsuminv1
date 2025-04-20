"use client";

import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import ProductCard2 from '@/components/common/ProductCard2';
import { SimpleCarousel } from '@/components/ui/Carrousel';

type Producto = {
  id: number;
  nombre: string;
  precio: number;
  imagenId: string;
  isNew?: boolean;
  descuento?: number;
};

const CSV_URL = 'https://docs.google.com/spreadsheets/d/1PoR9PLmRMYKVFw777jURIOsT6Apzu_hUynO7oae_vHA/export?format=csv';

// Skeleton card component
const SkeletonProductCard = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
    <div className="h-64 bg-gray-200 animate-pulse"></div>
    <div className="p-4">
      <div className="w-full h-10 bg-gray-200 animate-pulse rounded"></div>
    </div>
    <div className="bg-gray-100 py-2 rounded-b-lg">
      <div className="h-6 bg-gray-300 w-3/4 mx-auto rounded animate-pulse"></div>
    </div>
  </div>
);

const ProductosDestacados = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Papa.parse(CSV_URL, {
      download: true,
      header: true,
      complete: (result) => {
        const data = result.data as Record<string, string>[];
        const productosParseados = data
          .filter((item) => item.destacado?.toLowerCase() === 'true')
          .map((item, index) => ({
            id: index + 1,
            nombre: item.nombre,
            precio: parseInt(item.precio),
            imagenId: item.imagenId,
            isNew: item.isNew?.toLowerCase() === 'true',
            descuento: item.descuento ? parseInt(item.descuento) : undefined,
          }));
        setProductos(productosParseados);
        setLoading(false);
      },
      error: () => {
        setLoading(false);
      }
    });
  }, []);

  const handleVerDetalles = (id: number) => {
    console.log(`Ver detalles del producto ${id}`);
    // Aquí podrías implementar la lógica del modal
    const producto = productos.find(p => p.id === id);
    if (producto) {
      console.log('Producto encontrado:', producto);
      // Implementar lógica para abrir el modal
    }
  };

  return (
    <section className="py-16 fade-in bg-stone-100">
      <div className="mx-10 px-5 border-4 rounded-lg bg-white">
        <h2 className="text-3xl text-start ml-6 font-bold text-center text-blue-950 mb-12 my-4">
          Destacados de la Semana
        </h2>
        
        {loading ? (
          // Mostrar carrusel de esqueletos mientras carga
          <SimpleCarousel 
            itemsToShow={{ mobile: 1, tablet: 2, desktop: 3 }}
            className="p-4"
            autoPlay={false}
          >
            {Array(6).fill(0).map((_, index) => (
              <div key={`skeleton-${index}`} className="p-2">
                <SkeletonProductCard />
              </div>
            ))}
          </SimpleCarousel>
        ) : (
          // Mostrar carrusel de productos cuando están cargados
          <SimpleCarousel 
            itemsToShow={{ mobile: 1, tablet: 2, desktop: 3 }}
            className="p-4"
            interval={3000}
          >
            {productos.map((producto) => (
              <div key={producto.id} className="p-2">
                <div className="slide-up text-amber-600" style={{ animationDelay: `${producto.id * 100}ms` }}>
                  <ProductCard2
                    id={producto.id}
                    nombre={producto.nombre}
                    imagen={`https://drive.google.com/uc?id=${producto.imagenId}`}
                    onVerDetalles={handleVerDetalles}
                  />
                </div>
              </div>
            ))}
          </SimpleCarousel>
        )}
      </div>
    </section>
  );
};

export default ProductosDestacados;
