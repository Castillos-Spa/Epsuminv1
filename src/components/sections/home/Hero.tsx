"use client";

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/Button';
import CategoriaProductos from '@/components/sections/productos/CategoriaProductos';

// Datos para las diapositivas del carrusel
const slides = [
  {
    id: 1,
    image: '/img/epp.jpg',
    title: 'Equipos y Suministros Industriales',
    description: 'Soluciones integrales para su empresa',
    buttonText: 'Cotizar Ahora'
  },
  {
    id: 2,
    image: '/img/hero-2.jpg',
    title: 'Seguridad y Calidad Garantizada',
    description: 'Trabajamos con las mejores marcas del mercado',
    buttonText: 'Ver Productos'
  },
  {
    id: 3,
    image: '/img/hero-3.jpg',
    title: 'Atención Personalizada',
    description: 'Expertos a su servicio en todo momento',
    buttonText: 'Contáctanos'
  }
];

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Auto-reproducción del carrusel
  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000); // Cambia de slide cada 5 segundos
      
      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  // Actualiza el índice seleccionado cuando el carrusel se desplaza
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Función para navegar a un slide específico
  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <div className="relative">
      {/* Carrusel principal */}
      <section className="relative min-h-[920px] max-h-screen overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" ref={emblaRef}>
          <div className="flex h-full">
            {slides.map((slide) => (
              <div key={slide.id} className="relative flex-none w-full h-full">
                <Image 
                  src={slide.image} 
                  alt={slide.title} 
                  fill 
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <div className="absolute inset-0 bg-primary/40 flex flex-col items-center justify-center">
                  {/* Contenido del slide */}
                  <div className="text-center max-w-4xl px-4 animate-fade-in mb-24">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{slide.title}</h1>
                    <p className="text-xl text-white mb-8">{slide.description}</p>
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="px-8 py-3 text-lg"
                    >
                      {slide.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores del carrusel */}
        <div className="absolute bottom-44 left-0 right-0 flex justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === selectedIndex ? 'bg-white scale-110' : 'bg-white/40'
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Categorías integradas directamente en el carrusel */}
        <div className="absolute bottom-0 left-0 right-0 z-10 w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-transparent backdrop-blur-sm rounded-t-xl p-8 animate-slide-in shadow-lg">
              <CategoriaProductos />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;