import Head from 'next/head';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTheme } from "@/utils/provider";
import { filtering, sortArr } from '@/utils/func';
import { movieJsonDataArr } from '@/comps/ImageCarousel/trending';

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
import FuncIcons from '@/comps/FuncIcons';


const dataArrSlicing = () => {
  // for(let i = 0; i < 15; i++){
    // console.log("THIS IS THE SLICED ARRAY: " + movieJsonDataArr[i]);
  // }
  // var movieJsonDataArrSliced = [];
  // movieJsonDataArrSliced = movieJsonDataArr.slice(0, 15);
  movieJsonDataArr.splice(0, 15);

  { movieJsonDataArr.map(() => {
    for(let i = 0; i < 15; i++){
      console.log("THIS IS THE IMPORTED ARRAY: " + movieJsonDataArr[i]);
    }
  }) }
}

var timer = null;

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mode, setMode] = useState(false);
  const [view, setView] = useState(false);
  const [setPop, setSetPop] = useState(false);

  const [sbGenre, setSbGenre] = useState(false);
  const [sbYear, setSbYear] = useState(false);
  const [sbDuration, setSbDuration] = useState(false);
  const [movieDataGenre, setMovieDataGenre] = useState([]);

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

  useEffect(() => {
    dataArrSlicing();
  }, [movieJsonDataArr]);

  useEffect(() => {
    filteringMoviesByGenre();
  }, []);

  const filteringMoviesByGenre = async (genre) => {
    if(timer){
      clearTimeout(timer);
      timer = null;
    }

    if(timer === null){
      timer = setTimeout( async () => {
        const res = await axios.get("/api/movies", {
          params: {
            genre: genre,
          }
        })
        setMovieDataGenre(res.movieDataGenre);
        timer = null;
      }, 1000);
    }
  }

  return (
    <div className='windowCont'>
      <div className='phoneSizeCont'>
        {/* cinemagic logo/title */}
        <div className='titleCont'>
          <Logo />
        </div>

        {/* Functional Icons - Chat & Drag */}
        <div>
          <FuncIcons />
        </div>
       

        {/* search bar */}
        <div className='searchBarCont'>
          <SearchBar />
        </div>

        {/* drop down filter menus */}
        <div className='dropDownCont'>
          <GenreDropdownMenu selected={ (e) => filteringMoviesByGenre(e.target.value) } />
          <YearDropdownMenu />
          <DurationDropdownMenu />
        </div>

        {/* TRENDING subheading */}
        <div className='trendingHeadingCont'>
          <TextUI Title="TRENDING" />
        </div>

        {/* movie carousel */}
        <div className='carouselCont' style={{}}>
          <TrendingCarousel />
        </div>

        {/* GENRE subheading */}
        <div className='subHeadingCont'>
          <TextUI Title="GENRE" />
        </div>

        {/* movie carousel */}
        <div className='carouselCont'>
          <GenreCarousel />
        </div>

        {/* 2021 movies subheading */}
        <div className='subHeadingCont'>
          <TextUI Title="2021 MOVIES" />
        </div>

        {/* movie carousel */}
        <div className='carouselCont2'>
          <YearlyCarousel />
        </div>

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