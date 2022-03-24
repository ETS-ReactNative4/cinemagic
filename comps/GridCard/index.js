import React from 'react';
import styled from 'styled-components';
import { useTheme } from '@/utils/provider';
import { comp_themes } from '@/utils/themes';

export default function GridCard({
  movieName = "movie title",
  elementKey,
  imageSrc,
  onCardClick = () => {}
}){
  const { theme } = useTheme();
  
  return (
    <div 
      style={ styles.cont } 
      key={elementKey}
      onClick={onCardClick}
      // onSelect={elementKey}
    >
      <img 
        src={ imageSrc }
        style={ styles.image }
      />
      <p style={{
        fontSize: "16px",
        fontWeight: "bold",
        textAlign: "center",
        color: comp_themes[theme].carouselTextColour,
        margin: 0,
      }}>
        { movieName }
      </p>
    </div>
  )
}

var styles = {
  cont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",

    width: "180px",
    height: "260px",

    marginBottom: "3rem",

    cursor: "pointer",
  },
  image: {
    borderRadius: "20px",
    backgroundSize: "cover",
    width: "160px",
    height: "237px"
  }
}