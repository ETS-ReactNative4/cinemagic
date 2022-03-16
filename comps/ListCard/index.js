import React, {useRouter} from 'react';
import styled from 'styled-components';
import TextUI from '../TextUI';
import DetailsBtn from '../DetailsBtn';

const ListCard = ({
    CardListImgSrc="https://i.pinimg.com/564x/02/be/85/02be8597e6265fcbc9eb90501600ea18.jpg",
    AddFavList='/favorite-dark.svg',
    onClickCard = () =>{},
    onClickAddFav = () =>{},
}) => {
  return <Cont onClick={onClickCard}>
    <CardCont>
      <ListCardImg src={CardListImgSrc}></ListCardImg>
      <ListCardInfo>
        <TextUI TextUISize="14px" TextUIWeight="600" TextUIColor="#E0E0E0" Title="Shangchi"></TextUI>
        <TextUI TextUISize="12px" TextUIWeight="lighter" TextUIColor="#E0E0E0" Title="Rating: 4/5"></TextUI>
        <TextUI TextUISize="12px" TextUIWeight="lighter" TextUIColor="#E0E0E0" Title="1hr 20mins"></TextUI>
        <DetailButton>
          <DetailsBtn />
        </DetailButton>
      </ListCardInfo>
      <ListCardIcon onClick={onClickAddFav} src={AddFavList}/>
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
    width: 300px;
    height: 143px;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    background: #303234;
`;

const ListCardImg = styled.img`
    height: 145px;
    width: 110px;
    border-radius: 15px;
    object-fit: cover;
`;

const ListCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 7px;
    margin-left: 20px;
    line-height: 2.0;
`;

const ListCardIcon = styled.img`
    display: flex;
    width: 20px;
    height: 20px;
    margin-left: 50px;
    margin-top: 10px;
    cursor: pointer;
`;

const DetailButton = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    margin-left: 5px;
`;