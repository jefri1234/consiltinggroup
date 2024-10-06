"use client"
// components/DownloadButton.tsx
import React from 'react';

const DownloadButton: React.FC = () => {
  const descargarExcel = async () => {
    const response = await fetch('../../api/dowload');
    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Registros.xlsx';
      document.body.appendChild(a);
      a.click();
      a.remove();
    } else {
      console.error('Error al descargar el archivo');
    }
  };

  return (
    <button onClick={descargarExcel}>
      Descargar Excel
    </button>
  );
};

export default DownloadButton;
