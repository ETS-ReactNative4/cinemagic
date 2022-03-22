import React from 'react';
import scss from './card.module.scss';
import styled from 'styled-components';

import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/themes";

export default function Card({
  caption,
  src
}){
  const { theme } = useTheme();

  return (
    <div className={scss.container}>
      <img 
        className={scss.image} 
        src={src}
      />
      <Caption CardTextColor={ comp_themes[theme].carouselTextColour }>{ caption }</Caption>
    </div>
  )
}

const Caption = styled.p`
  color: ${props=>props.CardTextColor};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`