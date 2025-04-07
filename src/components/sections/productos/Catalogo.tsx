"use client"

import Image from "next/image"
import Link from "next/link"
import { SimpleCarousel } from "@/components/ui/Carrousel"

export default function ElementosProteccion() {
  // Datos para los elementos de protección personal
  const elementosProteccion = [
    {
      id: 1,
      nombre: "Chaleco de Seguridad",
      imagen: "/img/komatsu.jpg",
    },
    {
      id: 2,
      nombre: "Botas de Trabajo",
      imagen: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      nombre: "Zapatos de Seguridad",
      imagen: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      nombre: "Pantalón de Trabajo",
      imagen: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      nombre: "Casco de Seguridad",
      imagen: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 6,
      nombre: "Guantes de Trabajo",
      imagen: "/placeholder.svg?height=200&width=200",
    },
  ]

  // Datos para los insumos de faena
  const insumosFaena = [
    {
      id: 1,
      nombre: "Carpa Azul",
      imagen: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      nombre: "Carpa Blanca",
      imagen: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      nombre: "Carpa Azul Grande",
      imagen: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      nombre: "Carpa Negra",
      imagen: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      nombre: "Toldo Extensible",
      imagen: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 6,
      nombre: "Carpa Hexagonal",
      imagen: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div className="w-full bg-gray-200">
      {/* Sección superior - Trabajador con lista de equipos */}
      <div className="relative w-full bg-gray-300 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center py-8">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col md:flex-row md:justify-between">
            {/* Fondo naranja con lista de equipos */}
            <div className="mb-8 w-full rounded-lg bg-orange-400 p-6 md:mb-0 md:w-3/5 md:ml-auto md:mr-4 z-0">
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                <div className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Guantes de Seguridad</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Cascos Reflectantes</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Gafas de Seguridad</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Chalecos de Protección</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Zapatos Resistentes</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Protectores Auditivos</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Arnés de Seguridad</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Ropa de Trabajo</span>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <Link
                  href="#contactar"
                  className="rounded-full bg-white px-8 py-2 font-medium text-gray-800 transition-colors hover:bg-gray-100"
                >
                  CONTACTAR
                </Link>
              </div>
            </div>

            {/* Imagen del trabajador - Visible solo en tablet/desktop */}
            <div className="hidden md:block md:w-1/5 md:absolute md:right-8 md:top-1/2 md:transform md:-translate-y-2/3 md:z-10">
              <Image
                src="/img/vista-lateral-ingeniero-hombre-sonriente-casco.png"
                width={250}
                height={350}
                alt="Trabajador con equipo de seguridad"
                className="h-auto drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Sección de Elementos de Protección Personal */}
      <div className="container mx-auto px-4 py-8">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800 md:text-2xl">
              Elementos de <span className="text-blue-800">Protección Personal</span>
            </h2>
          </div>

          <SimpleCarousel itemsToShow={{ mobile: 1, tablet: 2, desktop: 4 }} className="px-4">
            {elementosProteccion.map((elemento) => (
              <div key={elemento.id} className="p-2">
                <div className="overflow-hidden rounded-lg border border-gray-200 bg-white p-2">
                  <Image
                    src={elemento.imagen || "/img/casco.png"}
                    width={200}
                    height={200}
                    alt={elemento.nombre}
                    className="mx-auto h-auto w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </SimpleCarousel>
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

