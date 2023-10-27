import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { EffectCards } from "swiper";

export default function Carousel({items}) {

  return (
    <div className="px-8 items-center ">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        cardsEffect={{
          slideShadows: false
        }}
        modules={[EffectCards]}
        className="articleswiper"
      >
        {
          items.map(item => {return (
            <SwiperSlide key={item.poster}>
              <img src={item.poster} alt={item.posterAlt}/>
            </SwiperSlide>
          )})
        }
      </Swiper>
    </div>
  );
}
