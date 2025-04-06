<<<<<<< HEAD
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoriaProductos from "@/components/CategoriaProductos";
import ProductosDestacados from "@/components/ProductosDestacados";
import Catalogo from "@/components/Catalogo";
import ServicioInfo from "@/components/ServicioInfo";
import Maquinaria from "@/components/Maquinaria";
import Testimonios from "@/components/Testimonios";
import Noticias from "@/components/Noticias";
import MarcasAsociadas from "@/components/MarcasAsociadas";
import AcercaDeNosotros from "@/components/AcercaDeNosotros";
import NuestrosObjetivos from "@/components/NuestrosObjetivos";
import NuestrosValores from "@/components/NuestrosValores";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
=======
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/home/Hero";
import ProductosDestacados from "@/components/sections/home/ProductosDestacados";
import Catalogo from "@/components/sections/productos/Catalogo";
import ServicioInfo from "@/components/sections/servicios/ServicioInfo";
import Maquinaria from "@/components/sections/home/Maquinaria";
import Testimonios from "@/components/sections/home/Testimonios";
import Noticias from "@/components/sections/home/Noticias";
import MarcasAsociadas from "@/components/sections/home/MarcasAsociadas";
import AcercaDeNosotros from "@/components/sections/about/AcercaDeNosotros";
import NuestrosObjetivos from "@/components/sections/about/NuestrosObjetivos";
import NuestrosValores from "@/components/sections/about/NuestrosValores";
import Contacto from "@/components/sections/home/Contacto";
>>>>>>> 3b5ce78 (structure-1)

export default function Home() {
  return (
    <main>
      <Navbar /> {/* Barra de Navegacion*/}
<<<<<<< HEAD
      <Hero/> {/* Seccion principal con fondo con imagen carrrusel */}
      <CategoriaProductos/> {/* Seccion de categorias circulares de productos */}
=======
      <Hero/> {/* Seccion principal con fondo con imagen carrusel */}
>>>>>>> 3b5ce78 (structure-1)
      <ProductosDestacados/> {/* seccion de productos destacados  */}
      <Catalogo/> {/* seccion de catalogo de productos y servicios */}
      <ServicioInfo/> {/* Seccion de necesita nuestros servicios */}
      <Maquinaria/> {/* Seccion de maquinaria proximamente */}
      <Testimonios/> {/* seccion de google comentarios */}
      <Noticias/> {/* seccion de noticias del valle */}
      <MarcasAsociadas/> {/* Licitaciones proximamente */}
      <AcercaDeNosotros/> {/* Seccion de acerca de nosotros */}
      <NuestrosObjetivos/> {/* Seccion de nuestros objetivos */}
      <NuestrosValores/> {/* Seccion de nuestros valores */}
      <Contacto/> {/* form para cotizaciones */}
      <Footer/>
    </main>
  );
}
