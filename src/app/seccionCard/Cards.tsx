import React from 'react';
import Card from '../components/Card';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <Card
        title="Diplomado GRATUITO"
        curso="SEGURIDAD Y SALUD EN EL TRABAJO"
        imageSrc="/cursos/sst.jpg"
        watsap='https://bit.ly/3xbZ9WQ'
        enlace=''
      >
        <p>jeff</p>
        <h1>marvin y zay</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae fugit et cupiditate, voluptates cum aliquam nisi dolor? Error, magni cumque.</p>
      </Card>

      <Card
        title="Diplomado GRATUITO"
        curso="SUPERVISOR LÍDER SSOMA"
        imageSrc="/cursos/ssoma.jpg"
        watsap='https://bit.ly/3TQdJMt'
        enlace=''
      />
      <Card
        title="Diplomado GRATUITO"
        curso="SISTEMA INTEGRADO DE ADMINISTRACION FINANCIERA-SIAF"
        imageSrc="/cursos/siaf.jpg"
        watsap='https://bit.ly/3Yhsudu'
        enlace=''
      />
      <Card
        title="Diplomado GRATUITO"
        curso="GESTIÓN DE PLANILLA Y LEGISLACIÓN LABORAL"
        imageSrc="/cursos/planilla.jpg"
        watsap='https://bit.ly/4dMWTo4 '
        enlace=''
      />
      <Card
        title="Diplomado GRATUITO"
        curso="AUDITORIA Y CONTROL GUBERNAMENTAL"
        imageSrc="/cursos/auditoria.jpg"
        watsap=' https://bit.ly/3vgt27e '
        enlace=''
      />
      <Card
        title="Diplomado GRATUITO"
        curso="ANALISTA DE RECURSOS HUMANOS - RR.HH"
        imageSrc="/cursos/analista_rrhh.jpg"
        watsap=' https://bit.ly/4dP5BSF '
        enlace=''
      />

      <Card
        title="Diplomado GRATUITO"
        curso="GESTION DE RECURSOS HUMANOS"
        imageSrc="/cursos/rrhh.jpg"
        watsap=' https://bit.ly/4aQ4u3O'
        enlace=''
      />
      <Card
        title="Diplomado GRATUITO"
        curso="GESTION PUBLICA MUNICIPAL Y REGIONAL"
        imageSrc="/cursos/diplomado_gestion_publica_municipal_y_regional.png"
        watsap='https://bit.ly/3Y3Un6Q '
        enlace=''
      />
      <Card
        title="Diplomado GRATUITO"
        curso="GESTION DE LA LOGISTICA Y OPERACIONES"
        imageSrc="/cursos/diplomado_en_Logistica_y_Operaciones.png"
        watsap='https://bit.ly/3NsMmnn'
        enlace=''
      />
      {/* Puedes agregar más Card aquí con diferentes props */}
    </div>
  );
}

export default HomePage;
