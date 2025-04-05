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

export default function Home() {
  return (
    <main>
      <Navbar /> {/* Barra de Navegacion*/}
      <Hero/> {/* Seccion principal con fondo con imagen carrrusel */}
      <CategoriaProductos/> {/* Seccion de categorias circulares de productos */}
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
