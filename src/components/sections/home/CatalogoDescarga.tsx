import Image from "next/image"
import Link from "next/link"

export default function CatalogoProductos() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16">
      {/* Fondo curvo */}
      <div className="absolute left-0 top-0 h-full w-4/5 md:w-3/5 xl:w-3/5 rounded-r-full bg-blue-950"></div>

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
          {/* Columna de imágenes - Aumentada para imagen más grande */}
          <div className="relative mb-8 w-full md:mb-0 md:w-3/5 xl:w-2/3 xl:-translate-x-50 md:-translate-x-20 -translate-x-15 2xl:-translate-x-90">
            {/* Contenedor de imagen más grande */}
            <div className="relative">
              <Image
                src="/img/tablet.png"
                width={300}
                height={600}
                alt="Catálogo de productos en tablet"
                className="h-auto w-full object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Columna de texto - Ajustada para balancear con imagen */}
          <div className="w-full md:w-2/5 lg:w-1/3 md:pl-8">
            <h2 className="mb-4 text-3xl font-bold md:text-blue-950 md:text-4xl text-amber-500 ">Catalogo de Productos</h2>

            <p className="mb-8 text-xl font-medium text-amber-600 md:text-2xl">
              Explore nuestra amplia gama de equipos y herramientas especializadas para la industria minera.
            </p>

            <Link
              href="#descargar"
              className="inline-flex items-center justify-center rounded-full border-2 border-teal-600 px-8 py-3 text-lg font-medium text-blue-950 transition-colors hover:bg-teal-600 hover:text-white"
            >
              DESCARGAR
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

