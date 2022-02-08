import React, {useState} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const DotNavBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90px;
    height: 20px;
`;

const NavBarDot = styled.div`
    width: 9px;
    height: 9px;
    background-color: ${props=>props.dotcolour};
    border-radius: 90px;
`;

const DotNavBar = ({
    clickcolour = "#5F5C5C",
    colour = "#C4C4C4",
    onClick1 = ()=>{},
    onClick2 = ()=>{},
    onClick3 = ()=>{},
    onClick4 = ()=>{},
    onClick5 = ()=>{},
}) => {
    return <DotNavBarContainer>
        <NavBarDot onClick={onClick1} dotcolour={clickcolour}></NavBarDot>
        <NavBarDot onClick={onClick2} dotcolour={colour}></NavBarDot>
        <NavBarDot onClick={onClick3} dotcolour={colour}></NavBarDot>
        <NavBarDot onClick={onClick4} dotcolour={colour}></NavBarDot>
        <NavBarDot onClick={onClick5} dotcolour={colour}></NavBarDot>
    </DotNavBarContainer>
}

export default DotNavBar;