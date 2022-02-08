import React, {useState} from 'react';
import styled from 'styled-components';

const TitleTextUI = styled.div`
font-size: ${props=>props.fontsize};
font-weight:  ${props=>props.fontweight};
color:  ${props=>props.color};
font-family:
`;

const TitleText = ({
    fontsize = "15px",
    fontweight = "bold",
    color="#E0E0E0",
    text="Trending"
}) => {

    return <TitleTextUI fontsize={fontsize} fontweight={fontweight} color={color}>{text}</TitleTextUI>
}

export default TitleText;

