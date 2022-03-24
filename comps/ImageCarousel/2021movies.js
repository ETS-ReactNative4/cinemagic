import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/themes";
//import { views } from "@/utils/themes";

import 'swiper/css';
import 'swiper/css/pagination';

import movies from '@/utils/imdbTop250.json';
import { filtering } from '@/utils/func';

SwiperCore.use([Pagination]);

export var movieJsonDataArr = [];

export default function TrendingCarousel() {
  const { theme } = useTheme();  
 // const { view } = useView();  
  const [movieData, setMovieData] = useState([]);
  const router = useRouter();
  const slides = [];

  useEffect(() => {
    filterMovies();
  }, []);

  const handleCarouselItemClick = sel => router.push(`/detail/${sel}`);

  const filterMovies = () => {
    var movieFilteredArr = filtering(movies, {
      yearGreaterThan: 2017
    });

    setMovieData(movieFilteredArr);
  }

  movieData.slice(0, 15).map(movie => {
    slides.push(
      <SwiperSlide 
        key={ movie.Title } 
        tag='li' 
        onClick={() => handleCarouselItemClick(`${movie.Title}`)} 
        style={{ cursor: "pointer" }} 
      >
        <img 
          src={ movie.Poster } 
          alt={ movie.Title }
          style={{ 
            borderRadius: "20px",
            backgroundSize: "cover",
            width: "123px",
  //          width: views [view].card_height,
            height: "179px"
          }}
        />

        {/* date */}
        <p style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
      
          width: '123px',
      
          color: comp_themes[theme].carouselTextColour,
          fontSize: '8pt',
        }}>
          { movie.Date }
        </p>

        {/* title */}
        <p style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
        
          width: '123px',
          paddingTop: '0px',
        
          color: comp_themes[theme].carouselTextColour,
          fontSize: '10pt',
        }}>
          { movie.Title.slice(0, 15) + "..." }
        </p>
      </SwiperSlide>
    )
  })

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
      <Swiper 
        className='customSwiper' 
        wrapperTag='ul'
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        slidesPerView={3}
        slidesPerGroup={3}
        spaceBetween={0}
        loop={false}
        observer={true}
        observeParents={true}
      >
        {slides}
      </Swiper>
  )
}