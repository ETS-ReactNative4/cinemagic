import React, {useState} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
`;

const LogoText = styled.div`
font-size:20px;
font-weight:bold;
color: #D02A1C;
font-family: 
`;


const Logo = ({
    handleClick
}) => {

    return <Cont>
       <LogoText onClickLogo={handleClick}>CINEMAGIC</LogoText>
    </Cont>
}

export default Logo;