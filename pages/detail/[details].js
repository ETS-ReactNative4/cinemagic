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
import PopUpFavCont from '@/comps/PopUpFavCont';

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
  const [chatIcon, setChatIcon] = useState(false);
  const [favPop, setFavPop] = useState(false);

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
    setChatIcon(!chatIcon);
  }

  const setting = () => {
    setSetPop(!setPop);
    setChatIcon(!chatIcon);
  }

  const favourite = () => {
    setFavPop(!favPop);
    setChatIcon(!chatIcon);
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
          <Card src={ arr.Poster } key={ arr.Title } />
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
            key={ movie.Title }
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
            key={ movie.Title }
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
            key={ movie.Title }
          />
        ))}
      </>
    )
  }
  const FindMovieDescDetails = () => {
    return (
      <>
        {identifiedMovie.map(movie => (
          <Description 
            title={fixedURL}
            directorList={movie.Director}
            castList={movie.Cast1 + "," + movie.Cast2 + "," + movie.Cast3 + "," + movie.Cast4}
            key={movie.Title}
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
            <FindMovieGenre />
            <FindMovieRunTime />      
            <FindMovieRating />
          </div>
        </section>

        {/* movie description */}
        <section className={scss.descCont}>
          <FindMovieDescDetails />
        </section>

        {/* Chat icon*/}
        <ChatIcons 
        onClickChat={chatbox}
        display={chatIcon === false ? "visible":"hidden"}
        />

        {/* Chatbox pop up */}
        <ChatBox 
          display={chatPop === true ? "block" : "none"}
          onPressCloseCB={chatbox}
        />
        {/* Navbar setting */}
        <section className={scss.navBarCont}>
          <NavBar 
            onClickSetting={ setting } 
            onClickFav={favourite}
            onClickHome={ () => router.push('/') } 
            display={setNav === true ? "hidden" : "visible"} 
          />
          {/* setting popup */}
          <PopUpCont 
            darkLight={changeTheme} 
            gridList={changeView} 
            onPressCloseBtn={setting} 
            display={setPop === true ? "visible" : "hidden"} 
            position1={mode === true ? "0px" : "27px"} 
            position2={view === true ? "0px" : "27px"} 
          />
          {/* fav popup */}
          <PopUpFavCont
            display={favPop === true ? "visible" : "hidden"}
            onPressCloseBtn={favourite}
          />
        </section>
      </div>
    </div>
  )
}