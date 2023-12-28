import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

export const Slider:React.FC = () => {
  return (
    <Swiper
        style={{flex:"1"}}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        // slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 480px
          600: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          // when window width is >= 640px
          1100: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          1278: {
            slidesPerView: 4,
            spaceBetween: 40
          }
        }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
          <SwiperSlide>
            <img src="https://img.freepik.com/free-photo/cute-puppy-sitting-in-grass-enjoying-nature-playful-beauty-generated-by-artificial-intelligence_188544-84973.jpg" alt="멍멍이" />
          </SwiperSlide>
      </Swiper>

  )
}
