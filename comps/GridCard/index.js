import React from 'react';
import styled from 'styled-components';
import { useTheme } from '@/utils/provider';
import { comp_themes } from '@/utils/themes';

export default function GridCard({
  movieName = "movie title",
  elementKey,
}){
  const { theme } = useTheme();
  
  return (
    <div style={ styles.cont } key={elementKey}>
      <img 
        src='http://placekitten.com/180/230'
        style={ styles.image }
      />
      <p style={{
        fontSize: "16px",
        fontWeight: "bold",
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

    marginBottom: "3rem"
  },
  image: {
    borderRadius: "20px"
  }
}