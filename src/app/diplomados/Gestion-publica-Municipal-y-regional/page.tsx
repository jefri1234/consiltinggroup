"use client"
import React from 'react'
import '@/app/css/_diplomado.css'
import Image from 'next/image'
import DiplomaInfo from './Diplomainfo'
import FooterEnlaces from '@/app/components/FooterEnlaces'
import Temario from './Temario'
import DocentePrincipal from './Docente'
import Formulario from './formulario'


function Diplomado() {

    return (
        <div>
            <header className='header'>
                <div className='portada'>
                    <h1 className='titulo-diplomado'>DIPLOMADO GRATUITO EN GESTIÓN PÚBLICA MUNICIPAL Y REGIONAL</h1>
                    <Image src='/img/sanmarcos-logo.png' alt='sanmarcos' width={500} height={500} className='m-auto pt-7 px-5'/>
                </div>
            </header>


            <main className=' container-2xl '>
                <section className='flex flex-col justify-center items-center gap-5 font-bold seccion-item py-20 bg-red-900 text-white'>
                    <div className='flex items-center justify-center flex-col'>
                        <Image src='/iconos/icon-calendar.png' alt='' width={50} height={50} />
                        <p>inicio: 19 de octubre del 2024</p>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <Image src='/iconos/icon-clock.png' alt='' width={50} height={50} />
                        <p>7:00 pm a 10:00 pm</p>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <Image src='/iconos/icon-transmission.png' alt='' width={50} height={50} />
                        <p>Transmisión por ZOOM en Vivo </p>

                    </div>
                </section>

                <section className=' contenedor '>
                    <div className="pt-20 flex flex-col gap-6 items-center justify-center contenedor-formulario">
                        <Formulario/>
                    </div>

                    <div>
                        <Image src='/img/peoplework.png' alt='persona' width={600} height={600}/>
                    </div>
                </section>

                <section className='py-5 bg-gray-900 flex flex-col gap-5 justify-center items-center p-5 pb-20'>
                    <h2 className='text-white text-center font-bold text-2xl pt-3'>ESPECIALIZATE Y ACREDITATE CON LA UNMSM</h2>
                    <Image src='/img/grupo-consultinggroup.jpg' alt='equipo-consulting' width={800} height={800} className='rounded-xl '/>
                </section>

                <section>
                    <DiplomaInfo />
                </section>
                <section>
                    <Temario />
                </section>
                <section>
                    <DocentePrincipal/>
                </section>
            </main>


            <footer>
                <FooterEnlaces className='' />
            </footer>
        </div>
    )
}

export default Diplomado
