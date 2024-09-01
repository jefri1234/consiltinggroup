import React from 'react';
import Card from '../components/Card';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <Card 
        title="Diplomado GRATUITO"
        curso="SEGURIDAD Y SALUD EN EL TRABAJO"
        imageSrc="/cursos/sst.jpg"
        
      >
        <p>jeff</p>
        <h1>marvin y zay</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae fugit et cupiditate, voluptates cum aliquam nisi dolor? Error, magni cumque.</p>
      </Card>

      <Card 
        title="Diplomado GRATUITO"
        curso="SUPERVISOR LÍDER SSOMA"
        imageSrc="/cursos/ssoma.jpg"
        
      />
      <Card 
        title="Diplomado GRATUITO"
        curso="SISTEMA INTEGRADO DE ADMINISTRACION FINANCIERA-SIAF"
        imageSrc="/cursos/siaf.jpg"
        
      />
      <Card 
        title="Diplomado GRATUITO"
        curso="GESTIÓN DE PLANILLA Y LEGISLACIÓN LABORAL"
        imageSrc="/cursos/planilla.jpg"
        
      />
      <Card 
        title="Diplomado GRATUITO"
        curso="AUDITORIA Y CONTROL GUBERNAMENTAL"
        imageSrc="/cursos/auditoria.jpg"
        
      />
      <Card 
        title="Diplomado GRATUITO"
        curso="ANALISTA DE RECURSOS HUMANOS"
        imageSrc="/cursos/analista_rrhh.jpg"
        
      />

      <Card 
        title="Diplomado GRATUITO"
        curso="RECURSOS HUMANOS"
        imageSrc="/cursos/rrhh.jpg"
        
      />
      {/* Puedes agregar más Card aquí con diferentes props */}
    </div>
  );
}

export default HomePage;
