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
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-64">
        <Image 
          src={imagen} 
          alt={nombre} 
          fill 
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="p-4">
        <Button 
          variant="outline" 
          fullWidth={true} 
          className="mt-2 text-black rounded-r-xl  bg-azul-claro/50 hover:bg-azul-claro/20"
          onClick={handleVerDetalles}
        >
          Ver Detalles
        </Button>
        <div className='bg-red-500/20 w-full'>

        <h3 className="text-lg font-medium mb-3 text-center">{nombre}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductCard2;