"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

interface ProductCardProps {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  descuento?: number;
  isNew?: boolean;
  onVerDetalles?: (id: number) => void;
}

const ProductCard = ({
  id,
  nombre,
  precio,
  imagen,
  descuento,
  isNew,
  onVerDetalles
}: ProductCardProps) => {
  const handleVerDetalles = () => {
    if (onVerDetalles) {
      onVerDetalles(id);
    }
  };

  const precioFinal = descuento ? precio - (precio * descuento / 100) : precio;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-64">
        <Image 
          src={imagen} 
          alt={nombre} 
          fill 
          style={{ objectFit: 'cover' }}
        />
        {isNew && (
          <span className="absolute top-2 left-2 bg-secondary text-white text-xs font-bold px-2 py-1 rounded">
            NUEVO
          </span>
        )}
        {descuento && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {descuento}% OFF
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{nombre}</h3>
        <div className="flex items-center gap-2">
          <p className="text-primary-500 font-bold">${precioFinal.toLocaleString()}</p>
          {descuento && (
            <p className="text-gray-400 text-sm line-through">${precio.toLocaleString()}</p>
          )}
        </div>
        <Button 
          variant="primary" 
          fullWidth={true} 
          className="mt-4"
          onClick={handleVerDetalles}
        >
          Ver Detalles
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;