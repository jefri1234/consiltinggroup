"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../estilosswiper.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function EfectoSwiper() {
  return (
    <>
    
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={3} //inicia el carrusel en la 3era imagen
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide >
          <img src="/img/people2.jpg" className='imagen-swiper'/>
          <h2 className='textos'>Especialista en RRHH</h2>
        </SwiperSlide>
        <SwiperSlide > 
          <img src="/img/people1.jpg" className='imagen-swiper'/>
          <h2 className='textos'>Especialista en SST</h2>
        </SwiperSlide>
        <SwiperSlide >
          <img src="/img/people3.jpg" className='imagen-swiper'/>
          <h2 className='textos'>Especialista en SIAF</h2>
        </SwiperSlide>
        <SwiperSlide >
          <img src="/img/people4.jpg" className='imagen-swiper'/>
          <h2 className='textos'>Especialista en Gestion Publica Municipal</h2>
        </SwiperSlide>
        <SwiperSlide >
          <img src="/img/people5.jpg" className='imagen-swiper'/>
          <h2 className='textos'>Especialista en Trabajos de Alto Riesgo</h2>
        </SwiperSlide>
        <SwiperSlide >
          <img src="/img/people6.jpg" className='imagen-swiper'/>
          <h2 className='textos'>Especialista en Auditoria Tributaria</h2>
        </SwiperSlide>
        <SwiperSlide >
          <img src="/img/people7.jpg" className='imagen-swiper'/>
          <h2 className='textos'>Especialista en SSOMA</h2>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
