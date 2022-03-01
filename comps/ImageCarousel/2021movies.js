import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/themes";
import { filtering, sortArr } from '@/utils/func';

import 'swiper/css';

import movies from '@/utils/imdbTop250.json';

export default function YearlyCarousel({
  movieTitles = []
}) {
  const { theme } = useTheme();
  const [movieData, setMovieData] = useState(movies);
  const slides = [];
  var movieDates = [];
  // var movieTitles = [];

  for(let i = 0; i < 20; i += 1) {
    // if(movieData) {
    //   movieDates = filtering(movies, {
    //     // genre: null,  
    //     year: 2021
    //     // duration:null,
    //   });

    //   movieTitles.push(movieDates[i]);
    // }

    slides.push(
      <SwiperSlide key={ `slide-${i}` } tag='li'>
        <img
          src='http://placekitten.com/123/179'
          alt={ `Slide ${i}` }
          style={ styles.image }
        />

        { movieTitles.map((o) => <p style={{
          display: 'flex',
          justifyContent: 'center',
          
          width: '123px',
          paddingTop: '13px',
          
          color: comp_themes[theme].carouselTextColour,
          fontSize: '12pt'
        }}
        >{ o }</p>) }
      </SwiperSlide>
    )

    movieTitles.pop(i);
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
    // marginLeft: "-10px"
  }
}