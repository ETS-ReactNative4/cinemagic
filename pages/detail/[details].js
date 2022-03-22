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
  }

  const setting = () => {
    setSetPop(!setPop);
  }

// code below is to identify and get the appropriate movie details
  const identifyMovie = filtering(movies, {
    title: fixedURL
  });
  const identifiedMovie = identifyMovie.slice(0, 1);

  const FindMovieImg = () => {
    return (
      <>
        {identifiedMovie.map(arr => (
          <Card src={ arr.Poster } caption={ arr.Title } key={ arr.Title } />
        ))}
      </>
    )
  }
  const FindMovieGenre = () => {
    return (
      <>
        {identifiedMovie.map(movie => (
          <Info 
            title="Genre" 
            text={ movie.Genre.split(",")[0] } 
            infoSrc={ comp_themes[theme].info_genre } 
          />
        ))}
      </>
    )
  }
  const FindMovieRunTime = () => {
    return (
      <>
        {identifiedMovie.map(movie => (
          <Info
            title="Duration"
            text={ movie.RunTime + "mins" }
            infoSrc={ comp_themes[theme].info_genre }
          />
        ))}
      </>
    )
  }
  const FindMovieRating = () => {
    return (
      <>
        {identifiedMovie.map(movie => (
          <Info
            title="Rating"
            text={ movie.Rating + "/10" }
            infoSrc={ comp_themes[theme].info_genre }
          />
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
              Title={"MOVIE DETAIL"} 
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
            <FindMovieImg />
          </div>
          {/* movie info */}
          <div className={scss.squaresCont}>
<<<<<<< HEAD
            <FindMovieGenre />
            <FindMovieRunTime />      
            <FindMovieRating />
=======
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
>>>>>>> 484dbff14a6d7e743e49dbc64ebd477323381ee4
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