import Head from 'next/head';
import { useTheme } from "@/utils/provider";
import { themes } from "@/utils/themes";
import { comp_themes } from "@/utils/themes";
import styled from 'styled-components';
import React, { useState } from 'react';
import { useRouter } from 'next/router'
import BackBtn from '@/comps/BackBtn';
import TextUI from '@/comps/TextUI';
import Card from '@/comps/Card';
import Info from '@/comps/Info';
import Description from '@/comps/Description'
import NavBar from '@/comps/NavBar';
import PopUpCont from '@/comps/PopUpCont';
import Carousel2 from '@/comps/ImageCarousel/version2';
import ChatBox from '@/comps/ChatBox';

const DetailCont = styled.div`
  margin:0;
  display: flex;
  background-color: ${props=>props.bgColor};
  overflow-x: hidden;
  width: 100vw;
`;

export default function Detail() {
  const router = useRouter()

  const { theme, setTheme } = useTheme();
  const [mode, setMode] = useState(false);
  const [view, setView] = useState(false);
  const [setPop, setSetPop] = useState(false);

  const changeTheme = () => {
    setMode(!mode);
    setTheme(theme === 'light' ? 'default' : 'light')
    console.log("Theme", mode)
  }

  const changeView = () => {
    setView(!view);
    console.log("View", view)
  }

  const setting = () => {
    setSetPop(!setPop);
  }

  const home = () =>{
    router.push('/');
  }

  return <DetailCont bgColor={themes[theme].body}>
    
    <ChatBox />
  
    <NavBar onClickSetting={setting} onClickHome={home}/>
    {/* Setting pop up */}
    <PopUpCont darkLight={changeTheme} gridList={changeView} onPressCloseBtn={setting} display={setPop === true ? "block" : "none"} position1={mode === true ? "0px" : "27px"} position2={view === true ? "0px" : "27px"} />
  </DetailCont>

}