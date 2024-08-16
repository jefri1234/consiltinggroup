import React from 'react';
import Card from '../components/Card';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <Card 
        title="Diplomado GRATUITO"
        curso="Gestión Estratégica de Recursos Humanos"
        imageSrc="/img/profesioness.jpg"
        
      >
        <p>jeff</p>
        <h1>marvin y zay</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae fugit et cupiditate, voluptates cum aliquam nisi dolor? Error, magni cumque.</p>
      </Card>

      <Card 
        title="Diplomado GRATUITO"
        curso="Seguridad y Salud en el Trabajo"
        imageSrc="/img/profesioness.jpg"
        
      />
      <Card 
        title="Diplomado GRATUITO"
        curso="Gestión Estratégica de Recursos Humanos"
        imageSrc="/img/profesioness.jpg"
        
      />
      <Card 
        title="Diplomado GRATUITO"
        curso="Seguridad y Salud en el Trabajo"
        imageSrc="/img/profesioness.jpg"
        
      />
      <Card 
        title="Diplomado GRATUITO"
        curso="Gestión Estratégica de Recursos Humanos"
        imageSrc="/img/profesioness.jpg"
        
      />
      <Card 
        title="Diplomado GRATUITO"
        curso="Seguridad y Salud en el Trabajo"
        imageSrc="/img/profesioness.jpg"
        
      />
      <Card 
        title="Diplomado GRATUITO"
        curso="Gestión Estratégica de Recursos Humanos"
        imageSrc="/img/profesioness.jpg"
        
      />
      <Card 
        title="Diplomado GRATUITO"
        curso="Seguridad y Salud en el Trabajo"
        imageSrc="/img/profesioness.jpg"
        
      />
      {/* Puedes agregar más Card aquí con diferentes props */}
    </div>
  );
}

export default HomePage;
