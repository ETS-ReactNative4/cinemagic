import React, {useRouter} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display: flex;
`;
const Card = styled.button`
    height: 78px;
    width: 80px;
    border: 2px solid #C8C8C8; 
    border-radius: 20px;
    background-color:transparent;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
`
const InfoIcon = styled.img`
    width: ${props=>props.width};
    heigth: ${props=>props.height};
    icon: ${props=>props.icon};
`
const Title = styled.div`
font-size: 11px;
font-weight:400;
color: #C6C3C3;
font-family: 'Sen', sans-serif;
`
const Text = styled.div`
font-size: 13px;
font-weight:700;
color: #FAFAFA;
font-family: 'Sen', sans-serif;
`

const Info = ({
    width = "15px",
    height = "15px",
    infoSrc= "/duration-dark.svg",
    title="Duration",
    text="Action",
}) => {

    return <Cont>
        <Card>
            <InfoIcon/>
            <InfoIcon width={width} height={height} src={infoSrc}></InfoIcon>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </Card>
    </Cont>
}

export default Info;

