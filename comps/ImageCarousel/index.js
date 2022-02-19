import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

import movies from '@/utils/imdbTop250.json';

SwiperCore.use([Pagination]);

export default function Carousel(){
  const [movieData, setMovieData] = useState(movies);
  
  const titles = [];
  const slides = [];

// array pushes 15 movie slides to SwiperJS
  for(let i = 0; i < 15; i += 1){
    if(movieData[i].Title){
      titles.push(movieData[i].Title);
    }

    slides.push(
      <SwiperSlide key={ `slide-${ i }` } tag='li'>
        <img 
          src='http://placekitten.com/160/175' 
          alt={ `Slide ${ i }` }
          style={ styles.image }
        />

        { titles.map((o) => <p className='carouselText'>{ o }</p>) }
        {/* { titles.at((o) => <p className='carouselText'>{ o }</p>) } */}
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

var styles = {
  image: {
    borderRadius: "20px",
  }
}

// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import { Pagination, Navigation } from "swiper";

// export default function SwiperCarousel() {
//   return (
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={28}
//         slidesPerGroup={3}
//         loop={true}
//         loopFillGroupWithBlank={true}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Pagination, Navigation]}
//         onSwiper={(swiper) => console.log(swiper)}
//         // className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//   );
// }

// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import '@/node_modules/swiper/swiper-bundle.css';

// export default () => {
//   return (
//     <Swiper
//       spaceBetween={28}
//       slidesPerView={3}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
      
//     </Swiper>
//   );
// };

