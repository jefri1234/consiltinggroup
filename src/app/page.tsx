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
import CertificateVerification from './components/Verificar-certificado';


const Home = () => {
  return (
    <>
      <div>
        {/* Social Media Sidebar */}
        <div className="fixed right-0 top-1/3 z-50 flex flex-col  ">
          <Link href="https://www.facebook.com/groupconsultingperu?mibextid=ZbWKwL" target="_blank" className="bg-blue-700 p-2 hover:bg-blue-600">
            <Image src="/redes-sociales/icon-facebook.png" alt="Facebook" width={30} height={30} />
          </Link>
          <Link href="https://www.instagram.com/consulting.group.peru?igsh=MWhwbmVodzkwYzc2ZA==" target="_blank" className="bg-pink-700 p-2 hover:bg-pink-600">
            <Image src="/redes-sociales/icon-instagram.png" alt="Instagram" width={30} height={30} />
          </Link>
          <Link href="https://www.linkedin.com/company/consultinggroup/" target="_blank" className="bg-blue-700 p-2 hover:bg-blue-600">
            <Image src="/redes-sociales/icon-linkeding.png" alt="LinkedIn" width={30} height={30} />
          </Link>
          <Link href="https://www.tiktok.com/@consulting.group.peru?_t=8oDafwW0FiX&_r=1" target="_blank" className="bg-gray-800 p-2 hover:bg-gray-700">
            <Image src="/redes-sociales/icon-tiktok.png" alt="TikTok" width={30} height={30} />
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=51991403402&text=Hola,%20me%20puedes%20informar%20sobre:" target="_blank" className="bg-green-500 p-2 hover:bg-green-400">
            <Image src="/redes-sociales/icon-watsap.png" alt="WhatsApp" width={30} height={30} />
          </Link>
          <Link href="https://youtube.com/@consultinggroup1?si=n7uaZqHQwgAMcyMe" target="_blank" className="bg-red-700 p-2 hover:bg-red-600">
            <Image src="/redes-sociales/icon-youtube.png" alt="YouTube" width={30} height={30} />
          </Link>
        </div>


        {/* Main Content */}
        <div className='bg-red-800 flex justify-center items-center text-white contenedor-btn-aulaVirtual py-4 gap-5'>
          <h1 className="text-center text-3xl p-3 font-bold">Apasionados por lo que hacemos</h1>
          <Link href="/login" className='boton-aulavirtual 
          hover:bg-red-700 font-bold text-white p-2 rounded-lg '>
            Ingreso Aula Virtual
          </Link>
          <Link href="/certificado" className='boton-aulavirtual 
          hover:bg-red-700 font-bold text-white p-2 rounded-lg '>
            Verificar Certificado
          </Link>
        </div>

        <Carousel>
          <div className='container-slite'>
            <Slite1 />
          </div>
          <div className='container-slite'>
            <Slite2 />
          </div>
          <div className='container-slite'>
            <Slite3 />
          </div>
        </Carousel>
      </div>
      <Footer />

      <div className='bg-gray-950'>
        <div className='p-5'>
          <h2 className='text-center mx-auto text-4xl text-white  max-w-max 
          font-bold mt-5 mb-5 lg:text-5xl ' id='diplomados'>
            Nuestras especializaciones para ti
          </h2>
        </div>
        <HomePage />
      </div>

      <div className='text-center bg-gray-900 text-white'>
        <h1 className='titulo-swiper pt-7 text-3xl lg:text-5xl text-white font-bold mb-4'>Certificate como Especialista</h1>
        <EfectoSwiper />
        <h2 className='text-gray-300 pb-5'>Preparate para trasender en el mundo laboral</h2>
      </div>

      <Beneficios />

      {/* <Link href='https://api.whatsapp.com/send?phone=51991403402&text=Hola,%20me%20puedes%20informar%20sobre: '>
        <Image
          src='/img/watsap3d.png'
          width={70}
          height={70}
          alt='watsap'
          className='boton-watsap-estatico'
        />
      </Link> */}
      <CertificateVerification className='flex flex-col justify-center items-center py-10' />
      <Agradecimiento />
      <FooterEnlaces className='pt-20' />
    </>
  );
};

export default Home;
