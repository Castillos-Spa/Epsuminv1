"use client";
import { Mail, Phone } from "lucide-react"
import Image from "next/image"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

export default function SeccionContacto() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración por defecto
      once: true,     // Solo una vez
    });
  }, []);
  return (
    <section className="relative bg-white w-full animate-fade-in">
      <div className="w-full">
        {/* Contenido principal con posición ajustada */}
        <div className="pt-4 w-full px-19">
          <div className="grid md:grid-cols-2 py-10">
            {/* Columna izquierda - Texto */}
            <div className="pr-4 md:pr-8 flex flex-col justify-center items-start" data-aos="fade-right">
              <h2 className="mb-4 text-5xl font-bold uppercase text-blue-950">
                Necesita
                <br />
                nuestros servicios?
              </h2>
              <p className=" text-3xl text-amber-600">
                Contáctanos para obtener una cotización personalizada o más información sobre nuestros servicios
              </p>
            </div>
            <div className="relative z-20 md:translate-y-50 flex justify-center items-center animate-slide-in-right" data-aos="fade-left">
              <Image
                src="/img/asistente.png"
                alt="Persona con laptop"
                width={400}
                height={400}
                className="ml-auto h-auto max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="relative z-10 bg-amber-600 px-19 py-8" data-aos="fade-up"> {/* Aumentado el padding y z-index ajustado */}
          <div className="flex space-x-6">
            <div className="flex items-center">
              <Mail className="mr-2 h-6 w-6 text-white" />
              <a href="mailto:contacto@epsumin.cl" className="text-white hover:underline text-lg">
                contacto@epsumin.cl
              </a>
            </div>

            <div className="flex items-center">
              <Phone className="mr-2 h-6 w-6 text-white" />
              <a href="tel:+56961483893" className="text-white hover:underline text-lg">
                +56 9 6148 3893
              </a>
            </div>
          </div>
        </div>
        <div className="flex bg-blue-950 px-19 py-4" data-aos="zoom-in">
          <a
            href="#cotizacion"
            className="rounded-full border-2 border-white px-6 py-2 font-medium text-white transition transform duration-300 hover:scale-105 hover:bg-blue-800"
          >
            SOLICITAR COTIZACIÓN
          </a>
        </div>
      </div>
    </section>
  )
}

