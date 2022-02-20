import React, {useRouter} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    height: 65px;
    background-color: #303234;
    border-radius: 30px 30px 0px 0px;
    position: fixed;
    bottom: 0px;
`;

const NavBarIcon = styled.img`
    width: ${props=>props.width};
    height: ${props=>props.height};
`

const NavBar = ({
    width = "30px",
    height = "30px",
    onClickSetting = () =>{},
    onClickNavBar= () =>{},
}) => {
    return <Cont>
        <NavBarIcon onClick={onClickNavBar} src="/favorite-dark.svg" width='35px' height='35px'></NavBarIcon>
        <NavBarIcon onClick={onClickNavBar} src="/home-dark.svg" width={width} height={height}></NavBarIcon>
        <NavBarIcon onClick={onClickSetting} src="/setting-dark.svg" width={width} height={height}></NavBarIcon>
    </Cont>
}

export default NavBar;