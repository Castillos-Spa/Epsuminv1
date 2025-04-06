"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

interface ProductCardProps {
  id: number;
  nombre: string;
  imagen: string;
  onVerDetalles?: (id: number) => void;
}

const ProductCard2 = ({
  id,
  nombre,
  imagen,
  onVerDetalles
}: ProductCardProps) => {
  const handleVerDetalles = () => {
    if (onVerDetalles) {
      onVerDetalles(id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
      <div className="relative h-64">
        <Image
          src={imagen}
          alt={nombre}
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="p-4">
        <div className="w-full">
          <Button
            variant="primary"
            className="text-black rounded-lg bg-azul-claro/60 hover:bg-azul-claro/30 text-left" // Changed justify-start to text-left
            onClick={handleVerDetalles}
          >
            Ver Mas
          </Button>
        </div>
      </div>
      <div className="bg-gray-100 py-2 rounded-b-lg">
        <h3 className="text-lg font-medium text-center">{nombre}</h3>
      </div>
    </div>
  );
};

export default ProductCard2;