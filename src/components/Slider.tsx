import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import './Slider.css'
import 'swiper/css';
import 'swiper/css/pagination';
import { Card } from './Card';

export const Slider:React.FC = () => {
  return (
    <Swiper
        pagination={true} modules={[Pagination]}
        breakpoints={{
          479: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          // when window width is >= 640px
          1000: {
            slidesPerView: 4,
            spaceBetween: 40
          }
        }}
      >
          <SwiperSlide>
            <Card/>
          </SwiperSlide>
          <SwiperSlide>
            <Card/>
          </SwiperSlide>
          <SwiperSlide>
            <Card/>
          </SwiperSlide>
          <SwiperSlide>
            <Card/>
          </SwiperSlide>
          <SwiperSlide>
            <Card/>
          </SwiperSlide>
          <SwiperSlide>
            <Card/>
          </SwiperSlide>
      </Swiper>

  )
}
