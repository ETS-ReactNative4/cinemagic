import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/themes";

import 'swiper/css';

export default function GenreCarousel() {
  const { theme } = useTheme();
  const router = useRouter();
  const slides = [];

  const genres = [
    {
      genre: "Action",
      image: "/genres/action.png"
    },
    {
      genre: "Adventure",
      image: "/genres/adventure.png"
    },
    {
      genre: "Animation",
      image: "/genres/animation.png"
    },
    {
      genre: "Biography",
      image: "/genres/biography.png"
    },
    {
      genre: "Comedy",
      image: "/genres/comedy.png"
    },
    {
      genre: "Crime",
      image: "/genres/crime.png"
    },
    {
      genre: "Drama",
      image: "/genres/drama.png"
    },
    {
      genre: "Family",
      image: "/genres/family.png"
    },
    {
      genre: "Fantasy",
      image: "/genres/fantasy.png"
    },
    {
      genre: "Film Noir",
      image: "/genres/filmnoir.png"
    },
    {
      genre: "History",
      image: "/genres/history.png"
    },
    {
      genre: "Horror",
      image: "/genres/horror.png"
    },
    {
      genre: "Music",
      image: "/genres/music.png"
    },
    {
      genre: "Musical",
      image: "/genres/musical.png"
    },
    {
      genre: "Mystery",
      image: "/genres/mystery.png"
    },
    {
      genre: "Romance",
      image: "/genres/romance.png"
    },
    {
      genre: "Sci-Fi",
      image: "/genres/scifi.png"
    },
    {
      genre: "Short",
      image: "/genres/short.png"
    },
    {
      genre: "Sport",
      image: "/genres/sport.png"
    },
    {
      genre: "Thriller",
      image: "/genres/thriller.png"
    },
    {
      genre: "War",
      image: "/genres/war.png"
    },
    {
      genre: "Western",
      image: "/genres/western.png"
    }
  ];

  const handleCarouselItemClick = sel => router.push(`/genre/${sel}`);

  genres.map(genre => {
    slides.push(
      <SwiperSlide 
        key={ genre.genre } 
        tag='li'
        onClick={ () => handleCarouselItemClick(genre.genre) }   
        style={{ cursor: "pointer" }}
      >
        <img
          src={ genre.image }
          alt={ genre.genre }
          style={ styles.image }
        />

        <p style={{
          display: 'flex',
          justifyContent: 'center',
          
          width: '123px',
          paddingTop: '13px',
          
          color: comp_themes[theme].carouselTextColour,
          fontSize: '10.5pt'
        }}>
          { genre.genre }
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
    <React.Fragment>
      <Swiper
        className='customSwiper2'
        wrapperTag='ul'
        slidesPerView={3}
        slidesPerGroup={3}
        spaceBetween={0}
        loop={false}
        observeParents={true}
        observer={true}
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