import React, {useRouter} from 'react';
import styled from 'styled-components';
import TextUI from '../TextUI';
import CloseBtn from '../CloseBtn';
import Card from '../Card';

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    width: 258px;
    height: 310px;
    background-color: #2C2C2C;
    border-radius: 25px 25px 20px 20px;
`;

const PopFavCont = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const PopFavContTitle = styled.div`
    margin-left: 20%;
`;

const PopCard = styled.div`
    display: flex;
    flex-direction: row; 
    margin-left: 10px;
`;

const PopUpFavCont = ({
    onClickFav = () =>{},
    onPressFavCloseBtn = () =>{}
}) => {
    return <Cont onClick={onClickFav}>
        <PopFavCont>
            <PopFavContTitle>
                <TextUI TextUISize="14px" TextUIColor="#E0E0E0" Title="YOUR FAVOURITE"/> 
            </PopFavContTitle>
            <CloseBtn onClick={onPressFavCloseBtn} CloseSrc='/close-dark.svg'/>
        </PopFavCont>
        <PopCard>
            <Card CardImgWidth='93px' CardImgHeight='130px' CardTextSize='12px'/>
        </PopCard>
        
    </Cont>
}

export default PopUpFavCont;