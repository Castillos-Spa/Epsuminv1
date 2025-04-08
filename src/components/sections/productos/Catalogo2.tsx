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

  // Datos para los insumos de faena
  const insumosFaena = [
    {
      id: 1,
      nombre: "Carpa Azul",
      imagen: "/img/torreta.png",
    },
    {
      id: 2,
      nombre: "Carpa Blanca",
      imagen: "/img/generador.png",
    },
    {
      id: 3,
      nombre: "Carpa Azul Grande",
      imagen: "/img/generador2.png",
    },
    {
      id: 4,
      nombre: "Carpa Negra",
      imagen: "/img/placa.png",
    },
    {
      id: 5,
      nombre: "Toldo Extensible",
      imagen: "/img/rodillo.png",
    },
    {
      id: 6,
      nombre: "Carpa Hexagonal",
      imagen: "/img/generador3.png",
    },
  ]

  return (
    <div className="w-full ">
      {/* Sección de Insumos para EPP */}
      <div className="bg-white bg-[url('/img/fondo_catalogo.png')] bg-cover bg-center py-8">
        <div className="container mx-auto px-4">
          {/* Sección de carpa y contacto */}
          <div className="mb-0 flex flex-col items-center md:flex-row md:justify-between">
            {/* Imagen de trabajador */}
            <div className=" md:block md:w-1/5 md:absolute md:right-5 md:top-15/6 md:transform md:-translate-y-3 md:z-10">
              <Image
                src="/img/vista-lateral-ingeniero-hombre-sonriente-casco.png"
                width={200}
                height={200}
                alt="Trabajador"
                className="h-auto w-full"
              />
            </div>

            {/* Recuadro naranja con información */}
            <div className="w-full rounded-lg bg-orange-400 p-6 md:w-3/5 md:ml-auto md:mr-20">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="text-sm">
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Estructuras (metálicas y acrílicas)</span>
                  </div>
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Carpas de Emergencia</span>
                  </div>
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Elementos de equipamiento, sillas y mesas</span>
                  </div>
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Toldos</span>
                  </div>
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Implementos de trabajo</span>
                  </div>
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Mallas y cerchas de terreno</span>
                  </div>
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Estructuras Modulares para faenas</span>
                  </div>
                </div>

                <div className="text-sm">
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Visítanos para conocer:</span>
                  </div>
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Kit de Iluminación</span>
                  </div>
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Kit de Emergencia y Rescate</span>
                  </div>
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Kit de Educación Ambiental</span>
                  </div>
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Kit de Seguridad Vial</span>
                  </div>
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Señaléticas</span>
                  </div>
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Contenedores para basura segregada</span>
                  </div>
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Programa de Reciclaje</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex md:ml-auto">
                <Link
                  href="#contactar"
                  className="rounded-full bg-white px-8 py-2 font-medium text-gray-800 transition-colors hover:bg-gray-100 border-2 border-azul-cyan-300"
                >
                  CONTACTAR
                </Link>
              </div>
            </div>
          </div>

         {/* Sección de título y carrusel con fondo blanco compartido */}
          <div className="relative mt-0 mb-6 bg-white rounded-xl shadow-md overflow-hidden z-10">
            {/* Título de elementos de protección */}
            <div className="relative text-right pt-6 px-6">
              <h2 className="text-xl font-bold text-gray-800 md:text-xl   ">
                Insumos para <span className="text-blue-800">Elementos de Protección</span>
              </h2>
            </div>

            {/* Galería de imágenes */}
            <div className="px-4 py-6">
              <SimpleCarousel itemsToShow={{ mobile: 1, tablet: 2, desktop: 4 }} className="z-10 p-16">
                {elementosProteccion.map((insumo) => (
                  <div key={insumo.id} className="p-2">
                    <div className="overflow-hidden rounded-lg bg-white p-2  border-orange-400 border-2">
                      <Image
                        src={insumo.imagen || "/placeholder.svg"}
                        width={200}
                        height={200}
                        alt={insumo.nombre}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </SimpleCarousel>
            </div>
          </div>
          </div>
      </div>
    {/* Sección de Insumos para Instalaciones de Faena */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          {/* Sección de carpa y contacto */}
          <div className="mb-8 flex flex-col items-center md:flex-row md:justify-between">
            {/* Imagen de carpa */}
            <div className="mb-4 w-full md:mb-0 md:w-1/4">
              <Image
                src="/img/Toldo-gris.png"
                width={200}
                height={200}
                alt="Carpa"
                className="h-auto w-full"
              />
            </div>

            {/* Recuadro naranja con información */}
            <div className="w-full rounded-lg bg-orange-400 p-6 md:w-3/4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="text-sm">
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Estructuras (metálicas y acrílicas)</span>
                  </div>
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Carpas de Emergencia</span>
                  </div>
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Elementos de equipamiento, sillas y mesas</span>
                  </div>
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Toldos</span>
                  </div>
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Implementos de trabajo</span>
                  </div>
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Mallas y cerchas de terreno</span>
                  </div>
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Estructuras Modulares para faenas</span>
                  </div>
                </div>

                <div className="text-sm">
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Visítanos para conocer:</span>
                  </div>
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Kit de Iluminación</span>
                  </div>
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Kit de Emergencia y Rescate</span>
                  </div>
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Kit de Educación Ambiental</span>
                  </div>
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Kit de Seguridad Vial</span>
                  </div>
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Señaléticas</span>
                  </div>
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Contenedores para basura segregada</span>
                  </div>
                  <div className="mb-1 flex items-center">
                    <span className="mr-2">•</span>
                    <span>Programa de Reciclaje</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-center">
                <Link
                  href="#contactar"
                  className="rounded-full bg-white px-8 py-2 font-medium text-gray-800 transition-colors hover:bg-gray-100"
                >
                  CONTACTAR
                </Link>
              </div>
            </div>
          </div>

          {/* Título de Insumos para Instalaciones */}
          <div className="mb-6 text-right">
            <h2 className="text-xl font-bold text-gray-800 md:text-2xl">
              Insumos para <span className="text-blue-800">Instalaciones de Faena</span>
            </h2>
          </div>

          {/* Galería de imágenes de carpas */}
          <SimpleCarousel itemsToShow={{ mobile: 1, tablet: 2, desktop: 4 }} className="px-4">
            {insumosFaena.map((insumo) => (
              <div key={insumo.id} className="p-2">
                <div className="overflow-hidden rounded-lg bg-white p-2 shadow-md">
                  <Image
                    src={insumo.imagen || "/placeholder.svg"}
                    width={200}
                    height={200}
                    alt={insumo.nombre}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </SimpleCarousel>
        </div>
      </div>
    </div>
  )
}
