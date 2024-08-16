import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function FooterEnlaces() {
  return (
    <div className="bg-black text-white py-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-between">
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <Image  
        src='/img/logorectangulo.jpg'
        width={130}
        height={130}
        alt=''
        className=' rounded-md'
        />
        <p className="mt-2">
          Somos una consultora de Gestión Humana, con la misión de generar empleabilidad para nuestros ejecutivos.
        </p>
      </div>
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <h2 className="font-bold text-lg">Servicios</h2>
        <ul className="mt-2 space-y-2">
          <li>Especializaciones Empleables</li>
          <li>Capacitaciones In Company</li>
          <li>Reclutamiento y Selección de personal</li>
          <li>Consultoría y Asesoría en RRHH</li>
        </ul>
      </div>
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <h2 className="font-bold text-lg">Ayuda</h2>
        <ul className="mt-2 space-y-2">
          <li>Políticas de Protección de Datos</li>
          <li>Términos de servicio</li>
          <li>Políticas de Cookies</li>
          <li>Política de la Calidad</li>
          <li>Libro de Reclamaciones</li>
        </ul>
      </div>
      <div className="w-full md:w-1/4">
        <h2 className="font-bold text-lg">Contáctanos</h2>
        <ul className="mt-2 space-y-2">
          <li>Visítanos:</li>
          <li>Calle las Camelias 877 - San Isidro, Lima - Perú</li>
          <li>Cel: 991 403 402</li>
          <li>Info@consultinggroup.com.pe</li>
        </ul>
      </div>
      <div>
      <ul>
          <Link href='/login'>Registrar alumno</Link>
        </ul>
      </div>
    </div>
  </div>
</div>

  )
}

export default FooterEnlaces