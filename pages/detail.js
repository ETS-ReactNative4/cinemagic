import Head from 'next/head';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from "@/utils/provider";
import { comp_themes, themes } from "@/utils/themes";
import { useRouter } from 'next/router'

// components
import BackBtn from '@/comps/BackBtn';
import TextUI from '@/comps/TextUI';
import Card from '@/comps/Card';
import Info from '@/comps/Info';
import Description from '@/comps/Description'
import NavBar from '@/comps/NavBar';
import PopUpCont from '@/comps/PopUpCont';



export default function Detail({

}) {
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

  return (
    <div className='windowCont'>
      <div className='phoneSizeCont'>
        {/* detail page header container */}
        <div className='detail-headerCont'>
          <div className='detail-backBtnCont'>
            {/* back button in header */}
            <BackBtn onClick={ () => router.push('/index.js') } />
          </div>
          <div className='titleCont detail-title'>
            {/* movie heading */}
            <TextUI 
              Title='MOVIE DETAIL' 
              TextUIColor={ comp_themes[theme].TextUI } 
            />
          </div>          
        </div>
        {/* main movie detail content container */}
        <section className='detail-mainCont'>
          {/* movie photo */}
          <div className='detail-moviePhoto'>
            <Card 
              CardImgHeight='405px' 
              CardImgWidth='279px' 
            />
          </div>
          <div className='detail-squaresCont'>
            <Info 
              infoSrc={ comp_themes[theme].info_genre } 
              title='Genre'
            />          
            <Info 
              infoSrc={ comp_themes[theme].info_genre } 
              title='1h 20m'
            />          
            <Info 
              infoSrc={ comp_themes[theme].info_genre } 
              title='Rating'
              text='8/10'
            />
          </div>
        </section>
        {/* movie description */}
        <section className='detail-descCont'>
          <Description title='Placeholder' />
        </section>

        <section className='navBarCont'>
          <NavBar 
            onClickSetting={ setting } 
            onClickHome={ () => router.push('/') } 
          />
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