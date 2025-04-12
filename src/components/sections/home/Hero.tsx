"use client";

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/Button';
import CategoriaProductos from '@/components/sections/productos/CategoriaProductos';
import Link from 'next/link';

// Datos para las diapositivas del carrusel
const slides = [
  {
    id: 1,
    image: '/img/fondo7.png',
    // imagen2: '/img/torreta.png',
    title: 'Equipos y Suministros Industriales',
    description: 'Soluciones integrales para su empresa',
    buttonText: 'Cotizar Ahora',
    buttonUrl: '/productos'
  },
  {
    id: 2,
    image: '/img/fondo8.png',
    imagen2: '/img/torreta.png',
    title: 'Seguridad y Calidad Garantizada',
    description: 'Trabajamos con las mejores marcas del mercado',
    buttonText: 'Ver Productos',
    buttonUrl: '/productos'
  },
  {
    id: 3,
    image: '/img/fondo9.png',
    imagen2: '/img/maquina.png',
    title: 'Atención Personalizada',
    description: 'Expertos a su servicio en todo momento',
    buttonText: 'Contáctanos',
    buttonUrl: '/contacto'
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
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
                <div className="absolute inset-0 bg-primary/20 flex items-start md:items-center xl:items-center justify-center pt-32 md:pt-5 xl:pt-3">
                  {/* Contenido principal - posicionado más arriba */}
                  <div className="container mx-auto px-4 md:px-12 xl:px-32 ">
                    <div className="flex flex-col md:flex-row md:-mt-32 xl:flex-row xl:-mt-38 items-center max-w-6xl mx-auto relative ">
                      
                      {/* Panel izquierdo: contenido de texto */}
                      <div className=" w-3/4 md:w-3/4 md:pr-8 xl:w-1/2 pb-6 md:pb-0 xl:pb-18 z-10">
                        <div className="bg-white/60 p-8 md:p-10 rounded-2xl shadow-md">
                          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-blue-950">{slide.title}</h1>
                          <p className="text-lg md:text-xl mb-6 text-amber-600">{slide.description}</p>
                          <Link href={slide.buttonUrl} passHref>
                            <Button 
                              variant="outline"
                              className="px-6 py-2 text-black rounded-full border-2 border-azul-claro "
                            >
                              {slide.buttonText}
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full z-20"
            onClick={scrollPrev}
            aria-label="Anterior"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-blue-950" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full z-20"
            onClick={scrollNext}
            aria-label="Siguiente"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-blue-950" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicadores del carrusel */}
        <div className="absolute bottom-80 md:bottom-70 xl:bottom-80 left-0 right-0 flex justify-center gap-2 z-10">
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
        <div className="absolute bottom-0 left-0 right-0 z-10 w-full xl:mb-15 mb-0 md:mb-8 ">
          <div className="w-full">
            <div className="bg-transparent rounded-t-xl p-8 md:p-0 xl:p-6 animate-slide-in">
              <div className="mx-auto max-w-7xl md:px-0 xl:px-40 px-4">
                <CategoriaProductos />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;