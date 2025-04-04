import React from 'react';

const servicios = [
  { id: 1, titulo: 'Instalación', descripcion: 'Servicios profesionales de instalación para equipos industriales.', icono: 'wrench' },
  { id: 2, titulo: 'Mantenimiento', descripcion: 'Mantenimiento preventivo y correctivo para sus equipos.', icono: 'cog' },
  { id: 3, titulo: 'Asesoría Técnica', descripcion: 'Asesoramiento especializado sobre equipamiento industrial.', icono: 'clipboard' },
  { id: 4, titulo: 'Capacitación', descripcion: 'Capacitación para el uso correcto de equipos y herramientas.', icono: 'academic-cap' },
];

const ServicioInfo = () => {
  return (
    <section className="py-16 bg-blue-600 text-white" id="servicios">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">¿Necesita Nuestros Servicios?</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Ofrecemos soluciones completas para su empresa, con personal calificado y equipamiento de última generación.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicios.map((servicio) => (
            <div key={servicio.id} className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  {servicio.icono === 'wrench' && (
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                  )}
                  {servicio.icono === 'cog' && (
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  )}
                  {servicio.icono === 'clipboard' && (
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  )}
                  {servicio.icono === 'academic-cap' && (
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  )}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{servicio.titulo}</h3>
              <p className="text-center">{servicio.descripcion}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
            Solicitar Servicio
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicioInfo;
