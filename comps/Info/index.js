import React from 'react';
import styled from 'styled-components';
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/themes";

const Cont = styled.div`
    display: flex;
`;
const Card = styled.button`
    height: 78px;
    width: 80px;
    border: ${props=>props.border}; 
    border-radius: 20px;
    background-color:transparent;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
`
const InfoIcon = styled.img`
    width: ${props=>props.width};
    height: ${props=>props.height};
`
const Title = styled.div`
    font-size: 11px;
    font-weight:400;
    color: ${props=>props.titleColor};
    font-family: 'Sen', sans-serif;
`
const Text = styled.div`
    font-size: 13px;
    font-weight:700;
    color:  ${props=>props.textColor};
    font-family: 'Sen', sans-serif;
`

const Info = ({
    width = "15px",
    height = "15px",
    infoSrc= "/duration-dark.svg",
    title="Duration",
    text="Action",
}) => {
    const { theme } = useTheme();
    return <Cont>
        <Card border={comp_themes[theme].info_border}>
            <InfoIcon/>
            <InfoIcon width={width} height={height} src={infoSrc}></InfoIcon>
            <Title titleColor={comp_themes[theme].info_title}>{title}</Title>
            <Text textColor={comp_themes[theme].info_text}>{text}</Text>
        </Card>
    </Cont>
}

export default Info;

