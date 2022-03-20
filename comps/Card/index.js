import React, {useRouter} from 'react';
import styled from 'styled-components';

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
  return (
    <Cont onClick={onClickCard} marginBot={marginBot}>
      <CardImg CardImgHeight={CardImgHeight} CardImgWidth={CardImgWidth} src={CardImgSrc}></CardImg>
      <CardText CardTextSize={CardTextSize} CardTextColor={CardTextColor}>{CardTitle}</CardText>
    </Cont>
  )
}

export default Card;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props=>props.marginBot};
`;

// const CardCont = styled.div`
//   display: flex;
//   // flex-grow: 1;
//   // width: ${props=>props.CardWidth};
//   // height: ${props=>props.CardHeight};
//   border: none;
//   border-radius: 20px;
// `;

const CardImg = styled.img`
  height: ${props=>props.CardImgHeight};
  width: ${props=>props.CardImgWidth};
  border-radius: 20px;
  object-fit: cover;
`;

const CardText = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: ${props=>props.CardTextSize};
  color: ${props=>props.CardTextColor};
  
`;