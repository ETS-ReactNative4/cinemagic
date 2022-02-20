import Head from 'next/head';
import styled from 'styled-components';
import React, { useState } from 'react';

// components
import Logo from '@/comps/Logo';
import SearchBar from '@/comps/SearchBar';
import TextUI from '@/comps/TextUI';
import Card from '@/comps/Card';
import DotNavBar from '@/comps/DotNavBar';
import NavBar from '@/comps/NavBar';
import DropDownPicker from '@/comps/DropDownPicker';
import GenreDropdownMenu from '@/comps/DropDownPicker/genre';
import YearDropdownMenu from '@/comps/DropDownPicker/year';
import DurationDropdownMenu from '@/comps/DropDownPicker/duration';
import Carousel from '@/comps/ImageCarousel';
import Carousel2 from '@/comps/ImageCarousel/version2';
import PopUpCont from '@/comps/PopUpCont';

// functions
import { filtering, sortArr } from '@/utils/func';


export default function Home() {
  const [mode, setMode] = useState(false);
  const [view, setView] = useState(false);
  const [setPop, setSetPop] = useState(false);

  const changeTheme = () => {
    setMode(!mode);
  }

  const changeView = () => {
    setView(!view);
  }

  const setting = () =>{
    setSetPop(!setPop);
  }

  return (
    <div className='windowCont'>
      <div className='phoneSizeCont'>
        {/* cinemagic logo/title */}
        <div className='titleCont'>
          <Logo />
        </div>

        {/* search bar */}
        <div className='searchBarCont'>
          <SearchBar />
        </div>

        {/* drop down filter menus */}
        <div className='dropDownCont'>
          <GenreDropdownMenu />
          <YearDropdownMenu />
          <DurationDropdownMenu />
        </div>

        {/* TRENDING subheading */}
        <div className='trendingHeadingCont'>
          <TextUI Title="TRENDING" />
        </div>

        {/* movie carousel */}
        <div className='carouselCont'>
          <Carousel />
        </div>

        {/* GENRE subheading */}
        <div className='subHeadingCont'>
          <TextUI Title="GENRE" />
        </div>

        {/* movie carousel */}
        <div className='carouselCont'>
          <Carousel2 />
        </div>

        {/* 2021 movies subheading */}
        <div className='subHeadingCont'>
          <TextUI Title="2021 MOVIES" />
        </div>

        {/* movie carousel */}
        <div className='carouselCont2'>
          <Carousel2 />
        </div>

        {/* nav bar */}
        <div className='navBarCont'>
          <NavBar onClickSetting={setting} />
        </div>

         {/* Setting pop up */}
        <PopUpCont darkLight={changeTheme} gridList={changeView} onPressCloseBtn={setting} display={setPop === true? "block" : "none"} position1={mode === true ? "0px" : "27px"} position2={view === true ? "0px" : "27px"}/>
      </div>
    </div>
  )
}