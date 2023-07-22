import React from 'react'
import './Showcase.css'
import CTA from './CTA'
import Socials from './socials'
import {BsArrowDownCircleFill} from 'react-icons/bs';
import Slide1 from '../../components/Slide1';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slide2 from '../../components/Slide2';

function ShowCase() {
  
  return (
    <header>
        <div className="container header__container">
        <Swiper 
          modules={[Autoplay, Pagination, Scrollbar, A11y]}
          spaceBetween={100}
          centeredSlides={true}
          autoplay={{
          delay: 12000,
          disableOnInteraction: false,
        }}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide><Slide1/></SwiperSlide>
            <SwiperSlide><Slide2/></SwiperSlide>
        </Swiper>
          <CTA/>
          <Socials/>
          
          <a href="#projects" className='scroll__down'><BsArrowDownCircleFill/></a>
        </div>
    </header>
  )
}

export default ShowCase