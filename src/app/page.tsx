
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
import CatalogoDescarga from "@/components/sections/home/CatalogoDescarga";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar /> {/* Barra de Navegacion*/}
      <Hero/> {/* Seccion principal con fondo con imagen carrusel */}
      <ProductosDestacados/> {/* seccion de productos destacados  */}
      <CatalogoDescarga/> {/* seccion de catalogo de productos y servicios */}
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
