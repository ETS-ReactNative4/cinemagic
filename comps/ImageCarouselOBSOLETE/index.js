import React from 'react';
import Carousel from 'react-grid-carousel';

export default function blah({
  img1 = "http://placekitten.com/160/175",
  img2 = "http://placekitten.com/160/175",
  img3 = "http://placekitten.com/160/175"
}){ 
  return (
    <Carousel 
    cols={3} 
    rows={1}
    loop="true" 
    hideArrow="true" 
    showDots="true"
    gap={28}
    responsiveLayout={
      [
        {
          breakpoint: 428,
          cols: 3,
          rows: 1,
          gap: 28,
          loop: true
        }
      ]
    }
    >
      <Carousel.Item>
        <img 
        src={ img1 } 
        style={ styles.imgStyle }
        />
      </Carousel.Item>      
      <Carousel.Item>
        <img 
        src={ img2 } 
        style={ styles.imgStyle }
        />
      </Carousel.Item>      
      <Carousel.Item>
        <img 
        src={ img3 } 
        style={ styles.imgStyle }
        />
      </Carousel.Item>      
    </Carousel>
  )
}

var styles = {
  imgStyle: {
    maxWidth: "160px",
    maxHeight: "175px",
  },
}