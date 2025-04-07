// components/WhatsAppButton.js
import React from 'react';


const WhatsAppButton = ({ phoneNumber }) => {
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366', // Color de WhatsApp
        color: 'white',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
        zIndex: 1000, // Asegura que esté por encima de otros elementos
      }}
    >
      <i className="fab fa-whatsapp"></i> {/* Necesitarás Font Awesome o un icono similar */}
    </a>
  );
};

export default WhatsAppButton;