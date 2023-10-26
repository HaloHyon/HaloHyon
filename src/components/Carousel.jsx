import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import placeholder from '~/assets/placeholder.png'
import kjv from '~/assets/kjv-ig.jpg'


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function Carousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const items = [
    {
      poster: kjv.src,
      posterAlt: "Kaijuverse",
      thumbnail: kjv.src,
      thumbnailAlt: "Kaijuverse"
    },
    {
      poster: placeholder.src,
      posterAlt: "placeholder",
      thumbnail: placeholder.src,
      thumbnailAlt: "placeholder"
    },
    {
      poster: placeholder.src,
      posterAlt: "placeholder",
      thumbnail: placeholder.src,
      thumbnailAlt: "placeholder"
    },
  ] 

  return (
    <div className="px-8 items-center">
      <Swiper
        style={{
          "--swiper-navigation-color": "#000000",
          "--swiper-pagination-color": "#000000",
          aspectRatio: 2,
          "--background-color": "000000", 
          "maxWidth": "80vw",
          "borderRadius": "10"
        }}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        {
          items.map(item => {return (
            <SwiperSlide style={{backgroundColor: 'rgb(228 228 228)'}} key={item.poster}>
              <img style={{backgroundColor: 'transparent'}} src={item.poster} alt={item.posterAlt}/>
            </SwiperSlide>
          )})
        }
      </Swiper>
      {/* <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        style={{
          maxWidth: 1200,
        }}
      >
        {
          items.map(item => {return (
            <SwiperSlide style={{backgroundColor: 'transparent'}} key={item.thumbnail}>
              <img style={{backgroundColor: 'transparent'}} src={item.thumbnail} alt={item.thumbnailAlt}/>
            </SwiperSlide>
          )})
        }
      </Swiper> */}
    </div>
  );
}
