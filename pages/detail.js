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

const DetailCont = styled.div`
  margin:0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props=>props.bgColor};
  overflow-x: hidden;
  width: 100vw;

  .backBtm{
    width: 100vw;
    height: 50px;
    position: fixed;
    right: -20px;
    display: flex;
    align-items: center;
  }

  .title{
    height: 50px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .top{
    display: flex;
    width: 100vw;
    justify-content: space-evenly;
    margin-bottom: 20px;
  }

  .infoCard{
    display: flex;
    flex-direction: column;
    height: 320px;
    justify-content: space-between;
  }

  .bot{
    display: flex;
    width: 100vw;
    margin-left: 70px;
    margin-top: 40px;
    margin-bottom: 10px;
  }

  .card{
    display: flex;
    flex-direction: row;
    width: 100vw;
    overflow-x: auto;
  }

  .card::-webkit-scrollbar{
    width:0;
  }

  .marginBot{
    margin-bottom: 70px;
  }
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
    <div className='backBtm'>
      <BackBtn onPressBackBtn={home}/>
    </div>
    <div className='title'>
      <TextUI Title='MOVIE DETAIL' TextUIColor={comp_themes[theme].TextUI}/>
    </div>
    <div className='top'>
      <Card CardTitle="" CardImgHeight='320px' CardImgWidth='220px' />
      <div className='infoCard'>
        <Info infoSrc={comp_themes[theme].info_genre} title='Genre' />
        <Info infoSrc={comp_themes[theme].info_duration} text='1h 20m' />
        <Info infoSrc={comp_themes[theme].info_rating} title='Rating' text='8/10' />
      </div>
    </div>
    <Description title='Yi Bo Number 1' />
    <div className='bot'>
      <TextUI Title='ACTORS' />
    </div>
    <NavBar onClickSetting={setting} onClickHome={home}/>
    {/* Setting pop up */}
    <PopUpCont darkLight={changeTheme} gridList={changeView} onPressCloseBtn={setting} display={setPop === true ? "block" : "none"} position1={mode === true ? "0px" : "27px"} position2={view === true ? "0px" : "27px"} />
  </DetailCont>

}