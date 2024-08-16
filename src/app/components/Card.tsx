import React, { Children } from 'react';
import Image from 'next/image';
import Link from 'next/link';
//En TypeScript, una interfaz es una manera de definir la estructura de un objeto. 
//1)definir los props que el componente card usara
//2)cada propiedad debe tener nombre y un tipo
interface CardProps {
  title: string;
  curso: string;
  imageSrc: string;
  children?: React.ReactNode; // Añadiendo `children` manualmente
}

        //1) React.Fc = es un tipo generico q representa un componente funcional 
        //2)pasamos <CardProps> como argumento a React.Fc (decimos q este componente funcional recibe props)
        //3)desustruramos los props directamente en los argumentos de la funcion para usar dentro del component

        //Uso de Props: Desestructura los props en los argumentos del componente para usarlos directamente.
const Card: React.FC<CardProps> = ({ title, curso, imageSrc, children }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <Image className="w-full" src={imageSrc} alt={title} width={100} height={100} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{title}</div>
        <p className="text-gray-700 text-2xl text-center font-bold">{curso}</p>
      </div>
      
      <div>
            <div className=' flex gap-2 ml-6'>
                <Image src='/img/certificado.png'
                alt='certificado'
                width={20}
                height={20}
                />
                <p>Certificacion Universitaria (opcional)</p>
            </div>
            <div className=' flex gap-2 ml-6 mt-2'>
                <Image src='/img/clase.png'
                alt='certificado'
                width={20}
                height={20}
                />
                <p>Clases y materiales Gratuitos</p>
            </div>
       </div>

        <div className="px-6 pt-4 pb-2 flex items-center gap-2 justify-center">
            <Link href='https://api.whatsapp.com/send?phone=51991403402&text=Hola,%20me%20puedes%20informar%20sobre: '>
            <Image
            src='img/watsap.png'
            width={40}
            height={40}
            alt='watsap'
            />       
            </Link>
            <Link href='#' className=' bg-red-700 text-white p-2 rounded-lg font-bold'>
                Mas imformacion
            </Link>

        </div>

    </div>
  );
}

export default Card;
