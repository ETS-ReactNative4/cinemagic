import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/themes";

import 'swiper/css';

export default function GenreCarousel() {
  const { theme } = useTheme();

  const slides = [];
  const genreLabel = [];

  const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Drama",
    "Family",
    "Fantasy",
    "Film Noir",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Short",
    "Sport",
    "Thriller",
    "War",
    "Western"
  ];

  for(let i = 0; i < 21; i += 1) {
    genreLabel.push(genres[i]);

    slides.push(
      <SwiperSlide key={ `slide-${i}` } tag='li'>
        <img
          src='http://placekitten.com/123/179'
          alt={ `Slide ${i}` }
          style={ styles.image }
        />

        { genreLabel.map((o) => <p style={{
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

    genreLabel.pop(i);
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