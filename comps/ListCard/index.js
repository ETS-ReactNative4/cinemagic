import React, {useRouter} from 'react';
import styled from 'styled-components';

const ListCard = ({
    CardListImgSrc="https://i.pinimg.com/564x/02/be/85/02be8597e6265fcbc9eb90501600ea18.jpg",
    AddFavList='/favorite-dark.svg',
    onClickCard = () =>{},
    onClickAddFav = () =>{},
    ListText = "Name",
    ListTextSize = "14px",
    ListTextWeight = "bold",
    ListColor = "#FFFFFF"
}) => {
  return <Cont onClick={onClickCard}>
    <CardCont>
      <ListCardImg src={CardListImgSrc}></ListCardImg>
      <ListCardInfo>
        <ListCardText ListColor={ListColor} ListTextSize={ListTextSize} ListTextWeight={ListTextWeight}>{ListText}</ListCardText>
        <ListCardText ListColor={ListColor} ListTextSize={ListTextSize} ListTextWeight={ListTextWeight}>{ListText}</ListCardText>
      </ListCardInfo>
    </CardCont>
  </Cont>
}

export default ListCard;

const Cont = styled.div`
    display: flex;
`;

const CardCont = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: flex-start;
    width: 350px;
    height: 125px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    background: #303234;
`;

const ListCardImg = styled.img`
    height: 120;
    width: 95px;
    border-radius: 15px;
    object-fit: cover;
`;

const ListCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-direction: flex-start;
    line-height: 2.0;
    margin-top: 20px;
    margin-left: 30px;
`;

const ListCardText = styled.h3`
    font-size: ${props=>props.ListTextSize};
    font-weight:  ${props=>props.ListWeight};
    color: ${props=>props.ListColor};
`;