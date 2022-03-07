import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useTheme } from "@/utils/provider";
import { filtering, sortArr } from '@/utils/func';
import { movieJsonDataArr } from '@/comps/ImageCarousel/trending';
import { useRouter } from 'next/router';

//data
import movies from '@/utils/imdbTop250.json';

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
import TrendingCarousel from '@/comps/ImageCarousel/trending';
import GenreCarousel from '@/comps/ImageCarousel/genreTypes';
import YearlyCarousel from '@/comps/ImageCarousel/2021movies';
import PopUpCont from '@/comps/PopUpCont';

export default function PageLayout({ children }) {
  const { theme, setTheme } = useTheme();
  const [mode, setMode] = useState(false);
  const [view, setView] = useState(false);
  const [setPop, setSetPop] = useState(false);
  
  const [sbGenre, setSbGenre] = useState(false);
  const [sbYear, setSbYear] = useState(false);
  const [sbDuration, setSbDuration] = useState(false);
  const [movieDataGenre, setMovieDataGenre] = useState([]);
  const [inputSearchData, setInputSearchData] = useState([]);

  const [searchPage, setSearchPage] = useState(false);
  
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
    console.log(genre);
    router.push(`/search/${genre}`);
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
          <SearchBar onChange={ (e) => inputSearch(e.target.value) }/>
        </div>

        {/* drop down filter menus */}
        <div className='dropDownCont'>
          <GenreDropdownMenu onSelection={ sel => filteringMoviesByGenre(`${sel}`) } />
          <YearDropdownMenu />
          <DurationDropdownMenu />
        </div>

        { children }

        {/* nav bar */}
        <div className='navBarCont'>
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