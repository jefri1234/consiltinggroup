import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-red-800 p-4 text-white ">
  
        <div className="  flex items-center justify-around py-4">

            <div className="flex justify-between gap-10 text-center footer-header">
                <div className="flex gap-1 ">
                    <Image className=" w-11" src="/img/iconn-exelencia.png" alt="" width={100} height={100}  />
                    Exelencia Académica en<br/>Formacion de  Ejecutivos
                </div>

                <div className="flex gap-3">
                  <Image className=" w-11" src="/img/iconn-contenido.png" alt="" width={100} height={100} />
                    Contenido de Actualidad <br/>para el mundo real
                </div>

                <div className="flex gap-3">
                  <Image className=" w-11" src="/img/iconn-formacion.png" alt="" width={100} height={100}/>
                    Docentes de las Principales<br/>Universidades del Pais
                </div>

                <div className="flex gap-3 justify-center items-center">
                  <Image className=" w-11" src="/img/iconn-trabajo.png" alt="" width={100} height={100}/>
                    Alta Empleabilidad de<br/>nuestros ejecutivos
                </div>
            </div>

        </div>
    </footer>
  );
};

export default Footer;
