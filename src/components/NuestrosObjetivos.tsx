import React from 'react';

const objetivos = [
  {
    id: 1,
    titulo: 'Excelencia en el Servicio',
    descripcion: 'Brindar un servicio excepcional que supere las expectativas de nuestros clientes.',
    icono: 'star'
  },
  {
    id: 2,
    titulo: 'Innovación Constante',
    descripcion: 'Mantenernos a la vanguardia con productos y servicios innovadores.',
    icono: 'light-bulb'
  },
  {
    id: 3,
    titulo: 'Desarrollo Sostenible',
    descripcion: 'Promover prácticas sostenibles que beneficien a la comunidad y al medio ambiente.',
    icono: 'leaf'
  },
  {
    id: 4,
    titulo: 'Crecimiento Regional',
    descripcion: 'Contribuir al desarrollo económico y social de nuestra región.',
    icono: 'chart'
  }
];

const NuestrosObjetivos = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestros Objetivos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En EPSUMIN nos guiamos por objetivos claros que definen nuestro compromiso 
            con los clientes, colaboradores y la comunidad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objetivos.map((objetivo) => (
            <div key={objetivo.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5 mx-auto">
                {objetivo.icono === 'star' && (
                  <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                )}
                {objetivo.icono === 'light-bulb' && (
                  <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                )}
                {objetivo.icono === 'leaf' && (
                  <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.553 17.8A8 8 0 0118 10.007V7a5 5 0 00-5-5H8.835c-4.274 0-7.752 3.644-7.298 7.905.532 5.053 4.309 8.895 9.41 8.895 2.615 0 5.087-1.24 6.633-3.346C15.874 16.93 14.234 17.8 12.5 17.8h-7.947z" clipRule="evenodd" />
                  </svg>
                )}
                {objetivo.icono === 'chart' && (
                  <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                )}
              </div>
              <h3 className="text-xl font-bold text-center mb-3">{objetivo.titulo}</h3>
              <p className="text-gray-600 text-center">{objetivo.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NuestrosObjetivos;
