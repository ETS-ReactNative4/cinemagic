import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
// import 'swiper/css/pagination';
// import "swiper/css/navigation";

// SwiperCore.use([Pagination]);

export default function Carousel() {
  const slides = [];

  for (let i = 0; i < 15; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag='li'>
        <img
          src='http://placekitten.com/123/179'
          alt={`Slide ${i}`}
          style={styles.image}
        />

        <p className='carousel2text'>
          Genre Type
        </p>
      </SwiperSlide>
    )
  }

// Screen dimension check
  if(typeof window !== "undefined"){
    if(window.innerWidth === 375){
      return (
        <React.Fragment>
          <Swiper 
            className='customSwiper' 
            wrapperTag='ul'
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            slidesPerView={3}
            slidesPerGroup={3}
            spaceBetween={50}
            loop={false}
          >
            { slides }
          </Swiper>
        </React.Fragment>
      )
    }
  }

// default return for desktop screen
  return (
    <React.Fragment>
      <Swiper
        className='customSwiper2'
        wrapperTag='ul'
        slidesPerView={3}
        slidesPerGroup={3}
        spaceBetween={0}
        loop={false}
      >
        {slides}
      </Swiper>
    </React.Fragment>
  )
}

var styles = {
  image: {
    borderRadius: "20px",
  }
}