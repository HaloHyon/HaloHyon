import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

export default function Carousel({items}) {

  return (
    <div className="px-8 items-center ">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          items.map(item => {return (
            <SwiperSlide key={item.poster}>
              <img style={{backgroundColor: 'transparent'}} src={item.poster} alt={item.posterAlt}/>
            </SwiperSlide>
          )})
        }
      </Swiper>
    </div>
  );
}
