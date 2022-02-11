import React, {useState} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const Cont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 70px;
    height: 10px;
`;

const NavBarDot = styled.div`
    width: 8px;
    height: 8px;
    background-color: ${props=>props.dotcolour};
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
    return <Cont>
        <NavBarDot onClick={onClick1} dotcolour={clickcolour}></NavBarDot>
        <NavBarDot onClick={onClick2} dotcolour={colour}></NavBarDot>
        <NavBarDot onClick={onClick3} dotcolour={colour}></NavBarDot>
        <NavBarDot onClick={onClick4} dotcolour={colour}></NavBarDot>
        <NavBarDot onClick={onClick5} dotcolour={colour}></NavBarDot>
    </Cont>
}

export default DotNavBar;