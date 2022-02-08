import { useState, useEffect } from "react";
import styled from "styled-components";

const ButtonUI = styled.button`
font-size: ${props=>props.fontsize};
color: white;
background-color: ${props=>props.bgcolor};
border-radius:15px;
font-weight: ${props=>props.fontweight}
height: ${props=>props.height};
width: ${props=>props.width};
border: none;
letter-spacing:0.5px;
`;

const DetailsBut = ({
    fontsize = "14px",
    fontweight = "bold",
    height = "33px",
    width = "79px",
    bgcolor = "#D02A1C",
    text = "DETAILS",
    handleClick
}) => {
    return (<ButtonUI onClick={handleClick}fontsize={fontsize} fontweight={fontweight} height={height} width={width} bgcolor={bgcolor}>{text}</ButtonUI>
    );
}

export default DetailsBut;
