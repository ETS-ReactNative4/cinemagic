import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/themes";

import 'swiper/css';
import 'swiper/css/pagination';

import movies from '@/utils/imdbTop250.json';

SwiperCore.use([Pagination]);

export var movieJsonDataArr = [];

export default function TrendingCarousel() {
  const { theme } = useTheme();  
  const [movieData, setMovieData] = useState(movies);
  const titles = [];
  const slides = [];

// array pushes 15 movie slides to SwiperJS
  for(let i = 0; i < 15; i += 1){
    if(movieData[i].Title){
      titles.push(movieData[i].Title);
      movieJsonDataArr.push(movieData[i]);
    }

    // if(titles[i].String.length > 35){
    //   return String.subtr(0, 32) + '&hellip;';
    // }

    slides.push(
      <SwiperSlide key={ `slide-${ i }` } tag='li' >
        <img 
          src='http://placekitten.com/160/175' 
          alt={ `Slide ${ i }` }
          style={{ borderRadius: "20px" }}
        />

        { titles.map((o) => <p style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
        
          width: '160px',
          paddingTop: '13px',
        
          color: comp_themes[theme].carouselTextColour,
          fontSize: '12pt',
        }}
        >{ o }</p>) }
      </SwiperSlide>
    )

    titles.pop(i);
    movieJsonDataArr.slice(0, 15);
    // console.log(movieJsonDataArr);
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
            spaceBetween={150}
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
        className='customSwiper' 
        wrapperTag='ul'
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        slidesPerView={3}
        slidesPerGroup={3}
        spaceBetween={100}
        loop={false}
      >
        { slides }
      </Swiper>
    </React.Fragment>
  )
}