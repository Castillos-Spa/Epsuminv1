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
    image: '/img/epp.jpg',
    // imagen2: '/img/torreta.png',
    title: 'Equipos y Suministros Industriales',
    description: 'Soluciones integrales para su empresa',
    buttonText: 'Cotizar Ahora',
    buttonUrl: '/productos'
  },
  {
    id: 2,
    image: '/img/Fondo_carrousel.png',
    imagen2: '/img/torreta.png',
    title: 'Seguridad y Calidad Garantizada',
    description: 'Trabajamos con las mejores marcas del mercado',
    buttonText: 'Ver Productos',
    buttonUrl: '/productos'
  },
  {
    id: 3,
    image: '/img/hero-3.jpg',
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
                <div className="absolute inset-0 bg-primary/20 flex items-start md:items-center justify-center pt-32 md:pt-0">
                  {/* Contenido principal - posicionado más arriba */}
                  <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto relative md:-mt-32">
                      
                      {/* Panel izquierdo: contenido de texto */}
                      <div className="md:w-1/2 md:pr-8 pb-6 md:pb-0 z-10">
                        <div className="bg-white/60 p-8 md:p-10 rounded-2xl shadow-md">
                          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-blue-500">{slide.title}</h1>
                          <p className="text-lg md:text-xl mb-6 text-ocre">{slide.description}</p>
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
                      
                      {/* Panel derecho: imagen */}
                      <div className="md:w-1/2 md:-ml-16 z-20">
                        {slide.imagen2 && (
                          <div className="flex justify-center">
                            <Image 
                              src={slide.imagen2} 
                              alt={`${slide.title} - imagen`} 
                              width={480} 
                              height={400} 
                              className="rounded-lg object-contain max-w-full"
                            />
                          </div>
                        )}
                      </div>
                    </div>
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
          <div className="w-full">
            <div className="bg-transparent backdrop-blur-sm rounded-t-xl p-8 animate-slide-in">
              <div className="mx-auto max-w-7xl">
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