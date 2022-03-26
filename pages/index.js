import React, { useEffect, useState, useRef } from 'react';
import scss from '@/styles/pageStyles/home.module.scss';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useTheme } from "@/utils/provider";
import { filtering } from '@/utils/func';

import movies from '@/utils/imdbTop250.json';

// components
import Logo from '@/comps/Logo';
import SearchBar from '@/comps/SearchBar';
import TextUI from '@/comps/TextUI';
import NavBar from '@/comps/NavBar';
import GenreDropdownMenu from '@/comps/DropDownPicker/genre';
import YearDropdownMenu from '@/comps/DropDownPicker/year';
import DurationDropdownMenu from '@/comps/DropDownPicker/duration';
import GenreCarousel from '@/comps/ImageCarousel/genreTypes';
import YearlyCarousel from '@/comps/ImageCarousel/2021movies';
import PopUpCont from '@/comps/PopUpCont';
import PopUpFavCont from '@/comps/PopUpFavCont';
import GridCard from '@/comps/GridCard';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mode, setMode] = useState(false);
  const [view, setView] = useState(false);
  const [setPop, setSetPop] = useState(false);
  const [favPop, setFavPop] = useState(false);
  const [displayFav, setDisplayFav] = useState(false);
  const [searched, setSearched] = useState([]);
  const [search, setSearch] = useState(false);
  
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

  const favourite = () => {
    setFavPop(!favPop);
  }

  const handleCardClick = sel => router.push(`/detail/${sel}`);

  useEffect(() => {
    InputSearched();
  }, []);

  const InputSearched = async (val) => {
    var inputVal = val + " ";

    if(inputVal.length > 2) {
      const res = await axios.get("/api/movies", {
        params: {
          text: val
        }
      })
  
      setSearched(res.data);
    }

    console.log(val);
    
    if(inputVal.length > 1) {
      inputVal.trim();
      SearchCards(searched);
    }

    function SearchCards(val){
      // var searchedVal = filtering(movies, {
      //   title: val
      // })
      var slicedSearchArr = val.slice(0, 20);
  
      function sliceTitle(movie){
        if(movie.length < 14){
          return "";
        }else if(movie.length > 14 ){
          return "...";
        }
      }
  
      return (
        <div className={scss.contentContainer}>
          <div className={scss.contentRow}>
            {slicedSearchArr.map(data => (
              <GridCard 
                movieName={data.Title.slice(0,14) + sliceTitle(data.Title)} 
                imageSrc={ data.Poster } 
                key={ data.Title } 
                onCardClick={ () => handleCardClick(`${data.Title}`)} 
              />
            ))}
          </div>
        </div>
      )
    }

    return (
      <>
        <SearchCards />
      </>
    )
  }

  useEffect(() => {
    if(searched.length >= 1) return setSearch(true);
    if(searched.length <= 1) return setSearch(false);
  }, [searched])

  const filteringMoviesByGenre = genre => router.push(`/genre/${genre}`); 
  const filteringMoviesByYear = year => router.push(`/year/${year}`); 
  const filteringMoviesByDuration = dur => router.push(`/duration/${dur}`);

  return (
    <div className={scss.windowCont}>
      <div className={scss.phoneSizeCont}>
        {/* cinemagic logo/title */}
        <div className={scss.titleCont}>
          <Logo />
        </div>
      
        {/* search bar */}
        <div className={scss.searchBarCont}>
          <SearchBar onChange={ e => InputSearched(e.target.value) } />
        </div>

        {/* drop down filter menus */}
        <div className={scss.dropDownCont}>
          <GenreDropdownMenu onSelection={ sel => filteringMoviesByGenre(`${sel}`) } />
          <YearDropdownMenu onSelection={ sel => filteringMoviesByYear(`${sel}`) } />
          <DurationDropdownMenu onSelection={ sel => filteringMoviesByDuration(`${sel}`) } />
        </div>

        {/* TRENDING subheading */}
        <div className={scss.trendingHeadingCont}>
          <TextUI Title="RECENT MOVIES" />
        </div>

          {
            search ? <InputSearched /> : 
            <>
              <div className={scss.carouselCont}>
              {/* <TrendingCarousel /> */}
                <YearlyCarousel />
              </div>

              <div className={scss.subHeadingCont}>
                <TextUI Title="GENRE" />
              </div>

              {/* movie carousel */}
              <div className={scss.carouselContGenre}>
                <GenreCarousel />
              </div>
            </>
          }

        {/* nav bar */}
        <div className={scss.navBarCont}>
          <NavBar 
          onClickSetting={setting} 
          onClickFav={favourite}
          />
        </div>

        {/* Setting pop up */}
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
            cardDisplay={displayFav === true ? "block" : "none"} 
          />
      </div>
    </div>
  )
}
