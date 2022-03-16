import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from "@/utils/provider";
import { useRouter } from 'next/router';
import scss from '@/styles/pageStyles/home.module.scss';

// components
import Logo from '@/comps/Logo';
import SearchBar from '@/comps/SearchBar';
import TextUI from '@/comps/TextUI';
import NavBar from '@/comps/NavBar';
import GenreDropdownMenu from '@/comps/DropDownPicker/genre';
import YearDropdownMenu from '@/comps/DropDownPicker/year';
import DurationDropdownMenu from '@/comps/DropDownPicker/duration';
import TrendingCarousel from '@/comps/ImageCarousel/trending';
import GenreCarousel from '@/comps/ImageCarousel/genreTypes';
import YearlyCarousel from '@/comps/ImageCarousel/2021movies';
import PopUpCont from '@/comps/PopUpCont';
import FuncIcons from '@/comps/FuncIcons';


export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mode, setMode] = useState(false);
  const [view, setView] = useState(false);
  const [setPop, setSetPop] = useState(false);
  
  const router = useRouter();

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

  const filteringMoviesByGenre = (genre) => {
    router.push(`/genre/${genre}`);
  }  
  const filteringMoviesByYear = (year) => {
    router.push(`/year/${year}`);
  }  
  const filteringMoviesByDuration = (dur) => {
    router.push(`/duration/${dur}`);
  }

  return (
    <div className={scss.windowCont}>
      <div className={scss.phoneSizeCont}>
        {/* cinemagic logo/title */}
        <div className={scss.titleCont}>
          <Logo />
        </div>

        {/* Functional Icons - Chat & Drag */}
        <div>
          <FuncIcons />
        </div>
       

        {/* search bar */}
        <div className={scss.searchBarCont}>
          <SearchBar onChange={ (e) => inputSearch(e.target.value) }/>
        </div>
        {/* drop down filter menus */}
        <div className={scss.dropDownCont}>
          <GenreDropdownMenu onSelection={ sel => filteringMoviesByGenre(`${sel}`) } />
          <YearDropdownMenu onSelection={ sel => filteringMoviesByYear(`${sel}`) } />
          <DurationDropdownMenu onSelection={ sel => filteringMoviesByDuration(`${sel}`) } />
        </div>
        {/* TRENDING subheading */}
        <div className={scss.trendingHeadingCont}>
          <TextUI Title="TRENDING" />
        </div>
        {/* movie carousel */}
        <div className={scss.carouselCont}>
          <TrendingCarousel />
        </div>
        {/* GENRE subheading */}
        <div className={scss.subHeadingCont}>
          <TextUI Title="GENRE" />
        </div>
        {/* movie carousel */}
        <div className={scss.carouselCont}>
          <GenreCarousel />
        </div>
        {/* 2021 movies subheading */}
        <div className={scss.subHeadingCont}>
          <TextUI Title="2021 MOVIES" />
        </div>
        {/* movie carousel */}
        <div className={scss.carouselCont2}>
          <YearlyCarousel />
        </div>
        {/* nav bar */}
        <div className={scss.navBarCont}>
          <NavBar onClickSetting={setting} />
        </div>

        {/* Setting pop up */}
        <PopUpCont 
          darkLight={changeTheme} 
          gridList={changeView} 
          onPressCloseBtn={setting} 
          display={setPop === true ? "block" : "none"} 
          position1={mode === true ? "0px" : "27px"} 
          position2={view === true ? "0px" : "27px"} 
        />
      </div>
    </div>
  )
}