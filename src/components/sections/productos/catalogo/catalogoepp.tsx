"use client"

import Image from "next/image"
import Link from "next/link"
import { SimpleCarousel } from "@/components/ui/Carrousel"

export default function ElementosProteccion() {
  // Datos para los elementos de protección personal
  const elementosProteccion = [
    {
      id: 1,
      nombre: "Geologo Minero",
      imagen: "/img/geologo-minero.png",
    },
    {
      id: 2,
      nombre: "Botas de Trabajo",
      imagen: "/img/botas.png",
    },
    {
      id: 3,
      nombre: "Zapatos de Seguridad",
      imagen: "/img/botin.png",
    },
    {
      id: 4,
      nombre: "Pantalón de Trabajo",
      imagen: "/img/Pantalon.png",
    },
    {
      id: 5,
      nombre: "Casco de Seguridad",
      imagen: "/img/casco.png",
    },
    {
      id: 6,
      nombre: "Guantes de Trabajo",
      imagen: "/img/guantes.png",
    },
  ]

  return (
    <div className="w-full">
      {/* Sección de Insumos para EPP - ALTURA REDUCIDA */}
      <div className="bg-white bg-[url('/img/fondo_catalogo.png')] bg-cover bg-center py-6 xl:py-8">
        <div className="container mx-auto px-4 xl:px-8 2xl:px-16">
          {/* Sección de carpa y contacto - más compacta */}
          <div className="relative mb-0 flex flex-col items-center md:flex-row md:justify-between">
            {/* Recuadro naranja con información */}
            <div className="w-full rounded-lg bg-orange-400 p-6 md:w-3/4 xl:w-3/4 2xl:w-3/4 md:ml-6 md:mr-6 2xl:mr-2">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="text-lg">
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Estructuras (metálicas y acrílicas)</span>
                  </div>
                  <div className="mb-0.5 flex items-center">
                    <span className="mr-1">•</span>
                    <span>Carpas de Emergencia</span>
                  </div>
                  <div className="mb-0.5 flex items-center">
                    <span className="mr-1">•</span>
                    <span>Elementos de equipamiento, sillas y mesas</span>
                  </div>
                  <div className="mb-0.5 flex items-center">
                    <span className="mr-1">•</span>
                    <span>Toldos</span>
                  </div>
                  <div className="mb-0.5 flex items-center">
                    <span className="mr-1">•</span>
                    <span>Implementos de trabajo</span>
                  </div>
                  <div className="mb-0.5 flex items-center">
                    <span className="mr-1">•</span>
                    <span>Mallas y cerchas de terreno</span>
                  </div>
                  <div className="mb-0.5 flex items-center">
                    <span className="mr-1">•</span>
                    <span>Estructuras Modulares para faenas</span>
                  </div>
                </div>

                <div className="text-lg">
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Visítanos para conocer:</span>
                  </div>
                  <div className="mb-0.5 flex items-center">
                    <span className="mr-1">•</span>
                    <span>Kit de Iluminación</span>
                  </div>
                  <div className="mb-0.5 flex items-center">
                    <span className="mr-1">•</span>
                    <span>Kit de Emergencia y Rescate</span>
                  </div>
                  <div className="mb-0.5 flex items-center">
                    <span className="mr-1">•</span>
                    <span>Kit de Educación Ambiental</span>
                  </div>
                  <div className="mb-0.5 flex items-center">
                    <span className="mr-1">•</span>
                    <span>Kit de Seguridad Vial</span>
                  </div>
                  <div className="mb-0.5 flex items-center">
                    <span className="mr-1">•</span>
                    <span>Señaléticas</span>
                  </div>
                  <div className="mb-0.5 flex items-center">
                    <span className="mr-1">•</span>
                    <span>Contenedores para basura segregada</span>
                  </div>
                  <div className="mb-0.5 flex items-center">
                    <span className="mr-1">•</span>
                    <span>Programa de Reciclaje</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex justify-end">
                <Link
                  href="#contactar"
                  className="rounded-full bg-white px-8 py-2 font-medium text-gray-800 transition-colors hover:bg-gray-100 border-2 border-azul-cyan-300"
                >
                  CONTACTAR
                </Link>
              </div>
            </div>

            {/* Imagen de trabajador - reposicionada para altura reducida */}
            <div className="md:w-1/3 xl:w-1/4 2xl:w-1/5 ml-auto relative">
              <div className="md:absolute md:bottom-[-160px] md:-right-4 xl:bottom-[-170px] 2xl:bottom-[-190px] xl:-right-6 2xl:-right-10">
                <Image
                  src="/img/vista-lateral-ingeniero-hombre-sonriente-casco.png"
                  width={260} 
                  height={430}
                  alt="Trabajador"
                  className="h-auto w-full object-contain xl:scale-100 2xl:scale-110"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Sección de título y carrusel con fondo blanco compartido - altura reducida */}
          <div className="relative mt-0 xl:mt-0 mb-4 bg-white rounded-xl shadow-md overflow-hidden z-10">
            {/* Títulos mejor organizados para pantallas grandes con altura reducida */}
            <div className="flex flex-col md:flex-row justify-between items-center py-3 px-4 xl:py-4 xl:px-5">
              <h2 className="text-left text-4xl md:text-4xl xl:text-4xl font-bold text-blue-800 mb-1 md:mb-0">EPSUMIN</h2>
              <h2 className="text-right text-lg md:text-lg xl:text-lg 2xl:text-xl font-bold text-blue-800">
                Insumos para <span className="text-blue-800">Elementos de Protección</span>
              </h2>
            </div>

            {/* Galería de imágenes con altura reducida */}
            <div className="px-3 py-4 xl:py-5">
              <SimpleCarousel 
                itemsToShow={{ mobile: 1, tablet: 2, desktop: 4 }} 
                className="z-10 p-2 md:p-4 xl:p-3 2xl:p-5"
              >
                {elementosProteccion.map((insumo) => (
                  <div key={insumo.id} className="p-1.5 xl:p-1.5">
                    <div className="overflow-hidden rounded-lg bg-white p-1.5 xl:p-2 border-orange-400 border-2 hover:shadow-lg transition-all">
                      <Image
                        src={insumo.imagen || "/placeholder.svg"}
                        width={180}
                        height={180}
                        alt={insumo.nombre}
                        className="h-auto w-full object-cover"
                        loading="lazy"
                        quality={85}
                      />
                      <p className="mt-1 text-center font-medium text-gray-800 text-sm xl:text-sm">
                        {insumo.nombre}
                      </p>
                    </div>
                  </div>
                ))}
              </SimpleCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
