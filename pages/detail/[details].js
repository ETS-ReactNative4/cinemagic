import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTheme } from "@/utils/provider";
import { comp_themes, themes } from "@/utils/themes";
import { useRouter } from 'next/router'
import scss from '@/styles/pageStyles/detail.module.scss';

// components
import BackBtn from '@/comps/BackBtn';
import TextUI from '@/comps/TextUI';
import Card from '@/comps/Card';
import Info from '@/comps/Info';
import Description from '@/comps/Description'
import NavBar from '@/comps/NavBar';
import PopUpCont from '@/comps/PopUpCont';
import ChatIcons from '@/comps/ChatIcon';
import ChatBox from '@/comps/ChatBox';

export default function Detail({

}) {
  const router = useRouter();
  const { asPath } = useRouter();
  const cutURL = asPath.substring(8);
  const fixedURL = cutURL.replace(/%20/g, ' ');

  const { theme, setTheme } = useTheme();
  const [mode, setMode] = useState(false);
  const [view, setView] = useState(false);
  const [chatPop, setChatPop] = useState(false);
  const [setPop, setSetPop] = useState(false);
  const [setNav, setSetNav] = useState(false);

  const changeTheme = () => {
    setMode(!mode);
    setTheme(theme === 'light' ? 'default' : 'light')
    console.log("Theme", mode)
  }

  const changeView = () => {
    setView(!view);
    console.log("View", view)
  }

  const chatbox = () => {
    setChatPop(!chatPop);
    setSetNav(!setNav);
  }

  const setting = () => {
    setSetPop(!setPop);
  }

  return (
    <div className={scss.windowCont}>
      <div className={scss.phoneSizeCont}>
        {/* detail page header container */}
        <div className={scss.headerCont}>
          <div className={scss.backBtnCont}>
            {/* back button in header */}
            <BackBtn onBackBtnClick={ () => router.push('/') } />
          </div>
          <div className={`${scss.titleCont} ${scss.detailTitle}`}>
            {/* movie heading */}
            <TextUI 
              Title={fixedURL} 
              TextUIColor={ comp_themes[theme].TextUI } 
              
            />
                    {/* D icon*/}
        <div>
          <ChatIcons/>
        </div>
          </div>          
        </div>
        {/* main movie detail content container */}
        <section className={scss.mainCont}>
          {/* movie photo */}
          <div className={scss.moviePhoto}>
            <Card 
              CardImgHeight='405px' 
              CardImgWidth='279px' 
            />
          </div>
          {/* movie info */}
          <div className={scss.squaresCont}>
            <Info 
              infoSrc={ comp_themes[theme].info_genre } 
              title='Genre'
            />          
            <Info 
              infoSrc={ comp_themes[theme].info_duration } 
              title='Duration'
              text='1h 20m'
            />          
            <Info 
              infoSrc={ comp_themes[theme].info_rating} 
              title='Rating'
              text='8/10'
            />
          </div>
        </section>
        {/* movie description */}
        <section className={scss.descCont}>
          <Description title={fixedURL} />
        </section>

        {/* Chat icon*/}
        <div>
        <ChatIcons onClickChat={chatbox}/>
        </div>

        {/* Chatbox pop up */}
        <ChatBox 
          display={chatPop === true ? "block" : "none"}
          onPressCloseCB={chatbox}
        />
        {/* Navbar setting */}
        <section className={scss.navBarCont}>
          <NavBar 
            onClickSetting={ setting } 
            onClickHome={ () => router.push('/') } 
            display={setNav === true ? "hidden" : "visible"} 
          />
          {/* setting popup */}
          <PopUpCont 
            darkLight={changeTheme} 
            gridList={changeView} 
            onPressCloseBtn={setting} 
            display={setPop === true ? "block" : "none"} 
            position1={mode === true ? "0px" : "27px"} 
            position2={view === true ? "0px" : "27px"} 
          />
        </section>
      </div>
    </div>
  )
}