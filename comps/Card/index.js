import React from 'react';
import scss from './card.module.scss';
import styled from 'styled-components';

<<<<<<< HEAD
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/themes";

export default function Card({
  caption,
  src,
  captionColour = "#E0E0E0"
}){
  const { theme } = useTheme();

=======
const Card = ({
  CardImgSrc="https://i.pinimg.com/564x/02/be/85/02be8597e6265fcbc9eb90501600ea18.jpg",
  CardWidth = "123px",
  CardHeight = "173px",
  CardImgWidth ="123px",
  CardImgHeight = "173px",
  CardTitle = "",
  CardTextColor = "#E0E0E0",
  CardTextSize ="14px",
  marginBot = "0px",
  onClickCard = () =>{}
}) => {
>>>>>>> 484dbff14a6d7e743e49dbc64ebd477323381ee4
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