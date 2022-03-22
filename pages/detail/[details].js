import React, { useEffect, useState } from 'react';
import scss from '@/styles/pageStyles/detail.module.scss';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { useTheme } from "@/utils/provider";
import { comp_themes, themes } from "@/utils/themes";
import { filtering, sortArr } from '@/utils/func';

import movies from '@/utils/imdbTop250.json';

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
  const router = useRouter();
  const { asPath } = useRouter();
  const cutURL = asPath.substring(8);
  const fixedURL = cutURL.replace(/%20/g, ' ');

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

  const FindMovieImg = () => {
    var findImg = filtering(movies, {
      title: fixedURL
    });

    var slicedArr = findImg.slice(0, 1);

    return (
      <>
        {slicedArr.map(arr => (
          <Card src={ arr.Poster } caption={ arr.Title } key={ arr.Title } />
        ))}
      </>
    )
  }

  return (
    <div className={scss.windowCont}>
      <div className={scss.phoneSizeCont}>
        {/* detail page header container */}
        <div className={scss.headerCont}>
          <div className={scss.backBtnCont}>
            {/* back button in header */}
            <BackBtn onBackBtnClick={ () => router.back() } />
          </div>
          <div className={`${scss.titleCont} ${scss.detailTitle}`}>
            {/* movie heading */}
            <TextUI 
              Title={fixedURL} 
              TextUIColor={ comp_themes[theme].TextUI } 
            />
          </div>          
        </div>
        {/* main movie detail content container */}
        <section className={scss.mainCont}>
          {/* movie photo */}
          <div className={scss.moviePhoto}>
            <FindMovieImg />
          </div>
          <div className={scss.squaresCont}>
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
        <section className={scss.descCont}>
          <Description title={fixedURL} />
        </section>

        <section className={scss.navBarCont}>
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