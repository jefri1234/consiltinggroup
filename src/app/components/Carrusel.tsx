"use client"
import Image from 'next/image';
import { useState, useEffect, ReactNode, useCallback } from 'react';

type CarouselProps = {
  children: ReactNode[];
};

const Carousel = ({ children }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  }, [children.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-full">
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children.map((child, index) => (
            <div key={index} className="w-full flex-shrink-0 h-full">
              {child}
            </div>
          ))}
        </div>
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 rounded-full p-2 shadow"
      >
        <Image 
        src='/img/flecha-izquierda.png'
        width={40}
        height={40}
        alt='flechaizquierda'
        />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 rounded-full p-2 shadow"
      >
        <Image 
        src='/img/flecha-derecha.png'
        width={40}
        height={40}
        alt='flechaderecha'
        />
      </button>
    </div>
  );
};

export default Carousel;
