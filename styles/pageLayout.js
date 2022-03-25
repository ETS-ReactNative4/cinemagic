import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from "@/utils/provider";
import { useRouter } from 'next/router';
import scss from '@/styles/pageStyles/genreFiltered.module.scss';

// components
import Logo from '@/comps/Logo';
import SearchBar from '@/comps/SearchBar';
import NavBar from '@/comps/NavBar';
import GenreDropdownMenu from '@/comps/DropDownPicker/genre';
import YearDropdownMenu from '@/comps/DropDownPicker/year';
import DurationDropdownMenu from '@/comps/DropDownPicker/duration';
import PopUpCont from '@/comps/PopUpCont';
import PopUpFavCont from '@/comps/PopUpFavCont';

export default function PageLayout({ children }) {
  const { theme, setTheme } = useTheme();
  const [mode, setMode] = useState(false);
  const [view, setView] = useState(false);
  const [setPop, setSetPop] = useState(false);
  const [favPop, setFavPop] = useState(false);
  
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

  const filteringMoviesByGenre = (genre) => {
    router.push(`/genre/${genre}`);
  }
  const filteringMoviesByYear = (year) => {
    router.push(`/year/${year}`);
  }  
  const filteringMoviesByDuration = (dur) => {
    var trimmedStr = dur.split(' ').join('');
    router.push(`/duration/${trimmedStr}`);
  }
  
  return (
    <div className={scss.windowCont}>
      <div className={scss.phoneSizeCont}>
        {/* cinemagic logo/title */}
        <div className={scss.titleCont}>
          <Logo />
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

        { children }

        {/* nav bar */}
        <div className={scss.navBarCont}>
          <NavBar 
          onClickSetting={setting} 
          onClickFav={favourite}/>
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
          />
      </div>
    </div>
  )
}