import React, {useRouter} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display: flex;
    margin-left: 10px;
    margin-right: 10px;
`;

const CardCont = styled.div`
    width: ${props=>props.CardWidth};
    height: ${props=>props.CardHeight};
    border: none;
    border-radius: 20px;
`;

const CardImg = styled.img`
    height: ${props=>props.CardImgWidth};
    width: ${props=>props.CardImgHeight};
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

const Card = ({
    CardImgSrc="https://i.pinimg.com/564x/02/be/85/02be8597e6265fcbc9eb90501600ea18.jpg",
    CardWidth = "123px",
    CardHeight = "173px",
    CardImgWidth ="123px",
    CardImgHeight = "173px",
    CardTitle = "Yibo <3",
    CardTextColor = "#E0E0E0",
    CardTextSize ="14px",
    onClickCard = () =>{}
}) => {
    return <Cont onClick={onClickCard}>
        <CardCont width={CardWidth} height={CardHeight}>
            <CardImg width={CardImgWidth} height={CardImgHeight} src={CardImgSrc}></CardImg>
            <CardText CardTextSize={CardTextSize} CardTextColor={CardTextColor}>{CardTitle}</CardText>
        </CardCont>
    </Cont>
}

export default Card;