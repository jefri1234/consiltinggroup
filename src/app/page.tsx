
import Carousel from '@/app/components/Carrusel'
import Footer from '@/app/components/Footer';
import Slite1 from '@/app/pageCarrusel/silite1';
import Slite2 from './pageCarrusel/silite2';
import Slite3 from './pageCarrusel/silite3';
import HomePage from './seccionCard/Cards';
import EfectoSwiper from './components/Swiper';
import Beneficios from './components/Beneficios';
import Image from 'next/image';
import Link from 'next/link';
import Agradecimiento from './components/Agradecimiento';
import FooterEnlaces from './components/FooterEnlaces';
const Home = () => {
  return (
    <>
      <div >
        <div className=' bg-red-800 flex justify-center items-center  text-white contenedor-btn-aulaVirtual '>
            <h1 className="text-center text-3xl p-3 ">
              Apasionados por lo que hacemos
            </h1>
            <Link href="/login" className='boton-aulavirtual '>
              Ingreso Aula Virtual
            </Link>
        </div>


          <Carousel >
              <div className='container-slite'>
                <Slite1/>
              </div>
              <div className='container-slite' >
                <Slite2/>
              </div>
              <div className='container-slite'>
                <Slite3/>
              </div>
            </Carousel>

      </div>
      <Footer />
    <h2 className='text-center mt-20 mb-7 text-4xl text-red-700 font-bold'>Nuestras especializaciones para ti</h2>
    <HomePage />
    <div className=' text-center'>
      <h1 className='titulo-swiper pt-7'>Certificate como Especialista</h1>
      <EfectoSwiper />
      <h2 className='subtitulo-swiper'>Preparate para trasender en el mundo laboral</h2>
    </div>
    <Beneficios/>
    <Link href='https://api.whatsapp.com/send?phone=51991403402&text=Hola,%20me%20puedes%20informar%20sobre: '>
    <Image 
        src='/img/watsap3d.png'
        width={70}
        height={70}
        alt='watsap'
        className='boton-watsap-estatico'
        />
    </Link>
    <Agradecimiento/>
    <FooterEnlaces />    
    </>
  );
};

export default Home;
