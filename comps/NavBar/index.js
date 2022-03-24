import React from 'react';
import scss from './navbar.module.scss';
import styled from 'styled-components';
import { useTheme } from "@/utils/provider";
import { comp_themes } from "@/utils/themes";

export default function NavBar({
  onClickNavBar = () => {},
  onClickHome = () => {},
  onClickSetting = () => {},
  display= "visible"
}){
  const { theme } = useTheme();

  return (
    <Cont display={display} bgColor={ comp_themes[theme].navbar }>
      <img 
        className={ scss.image }
        src={ comp_themes[theme].navbar_fav }
        onClick={ onClickNavBar }
      />      
      <img 
        className={ scss.image }
        src={ comp_themes[theme].navbar_home }
        onClick={ onClickHome }
      />      
      <img 
        className={ scss.image }
        src={ comp_themes[theme].navbar_setting }
        onClick={ onClickSetting }
      />
    </Cont>
  )
}

const Cont = styled.div`
  visibility: ${props=>props.display};
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