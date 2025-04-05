import React from 'react';

const Catalogo = () => {
  return (
    <section className="py-16 bg-gray-50" id="productos">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestro Catálogo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full mr-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1h8V6a4 4 0 00-4-4zm3 6H7v1h6V8zm0 3H7v1h6v-1zm0 3H7v1h6v-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Productos</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Ofrecemos una amplia gama de productos para diversos sectores industriales, 
              desde seguridad industrial hasta herramientas especializadas.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              Ver Productos
            </button>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full mr-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Servicios</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Brindamos servicios especializados de instalación, mantenimiento y asesoría 
              técnica para soluciones industriales completas.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              Ver Servicios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalogo;
