import Image from 'next/image'
import React from 'react'
import '../beneficios.css'
function Beneficios() {
    return (
        <div className='flex justify-around  gap-10 py-14 contenedor-beneficios'>
            <div>
                <div className='flex flex-col  gap-5  fuentes-seccion-beneficio py-6 px-5'>
                    <h2 className=' text-3xl text-center  pt-5 pb-7'>Beneficios de Nuestras  Especializaciones</h2>
                    <div className='flex gap-5  flex-col '>
                        <div className='  flex gap-3 items-center'>
                            <div>
                                <Image
                                    src='/img/clasepresencial.png'
                                    width={70}
                                    height={70}
                                    alt=''
                                />
                            </div>
                            <div>
                                <h3 className='font-bold'>Clases en vivo y Presenciales</h3>
                                <p>Contamos con Especializaciones virtuales en vivo y presenciales en nuestras sucursales </p>
                            </div>

                        </div>
                        <div className=' flex gap-3 items-center'>
                            <div>
                                <Image
                                    src='/img/aulavirtual.png'
                                    width={70}
                                    height={70}
                                    alt=''
                                />
                            </div>
                            <div>
                                <h3 className='font-bold'>Acceso a aula Virtual </h3>
                                <p>Acceso a nuestra aula Virtual para repasar las clases y reforzar tus conocimientos</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5 flex-col'>
                        <div className='  flex gap-3 items-center'>
                            <div>
                                <Image
                                    src='/img/certificacion.png'
                                    width={70}
                                    height={70}
                                    alt=''
                                />
                            </div>
                            <div>
                                <h3 className='font-bold'>Certificacion Acreditada</h3>
                                <p>Obtendras tu certificado fisico y virtual con valides para concursos laborales</p>
                            </div>
                        </div>
                        <div className=' flex gap-3 items-center'>
                            <div>
                                <Image
                                    src='/img/laboral.png'
                                    width={70}
                                    height={70}
                                    alt=''
                                />
                            </div>
                            <div>
                                <h3 className='font-bold'>Oportunidades Laborales</h3>
                                <p>Lograras ser seleccionado en los puestos laborales por estar capacitado segun el requerimiento</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Beneficios