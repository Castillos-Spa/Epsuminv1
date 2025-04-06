import { Mail, Phone } from "lucide-react"
import Image from "next/image"

export default function SeccionContacto() {
  return (
    <section className="relative bg-gray-100 pb-12">
      <div className="container mx-auto px-4">
        {/* Contenido principal */}
        <div className="relative mb-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Columna izquierda - Texto */}
            <div className="pr-4">
              <h2 className="mb-4 text-2xl font-bold uppercase text-gray-900">
                Necesita
                <br />
                nuestros servicios?
              </h2>

              <p className="mb-6 text-lg text-orange-600">
                Contáctanos para obtener una cotización personalizada o más información sobre nuestros servicios
              </p>
            </div>

            {/* Columna derecha - Imagen */}
            <div className="relative z-10 mt-4 md:mt-0">
              <Image
                src="/img/tablet.png"
                alt="Persona con laptop"
                width={500}
                height={500}
                className="ml-auto h-auto max-w-full"
              />
            </div>
          </div>
        </div>

        {/* Franja naranja - Información de contacto */}
        <div className="relative z-0 flex flex-col items-center justify-between bg-orange-400 px-6 py-4 md:flex-row">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Mail className="mr-2 h-5 w-5 text-white" />
              <a href="mailto:contacto@gpsumith.cl" className="text-white hover:underline">
                contacto@gpsumith.cl
              </a>
            </div>

            <div className="flex items-center">
              <Phone className="mr-2 h-5 w-5 text-white" />
              <a href="tel:+56961483893" className="text-white hover:underline">
                +56 9 6148 3893
              </a>
            </div>
          </div>
        </div>

        {/* Franja azul - Botón de cotización */}
        <div className="flex items-center justify-center bg-blue-900 px-6 py-4">
          <a
            href="#cotizacion"
            className="rounded-full border-2 border-white px-6 py-2 text-center font-medium text-white transition-colors hover:bg-blue-800"
          >
            SOLICITAR COTIZACIÓN
          </a>
        </div>
      </div>
    </section>
  )
}

