import React from 'react';
import styled from 'styled-components';
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/themes";

const Cont = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    height: 65px;
    background-color: ${props=>props.bgColor};
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
    const { theme } = useTheme();
    return <Cont bgColor={comp_themes[theme].navbar}>
        <NavBarIcon onClick={onClickNavBar} src={comp_themes[theme].navbar_fav} width='35px' height='35px'></NavBarIcon>
        <NavBarIcon onClick={onClickNavBar} src={comp_themes[theme].navbar_home} width={width} height={height}></NavBarIcon>
        <NavBarIcon onClick={onClickSetting} src={comp_themes[theme].navbar_setting} width={width} height={height}></NavBarIcon>
    </Cont>
}

export default NavBar;