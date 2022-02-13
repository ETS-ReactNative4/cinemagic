import Head from 'next/head';
import styled from 'styled-components';
import * as React from 'react';

// components
import Logo from '@/comps/Logo';
import SearchBar from '@/comps/SearchBar';
import TextUI from '@/comps/TextUI';
import Card from '@/comps/Card';
import DotNavBar from '@/comps/DotNavBar';
import NavBar from '@/comps/NavBar';
import fakeData from '@/data/fakeData.json';
import DropDownPicker from '@/comps/DropDownPicker';
import Carousel from '@/comps/ImageCarousel';


export default function Home() {
  return (
    <div style={ styles.windowCont }>
      <div style={ styles.phoneSizeCont }>
        {/* cinemagic logo/title */}
        <div style={ styles.titleCont }>
          <Logo />
        </div>

        {/* search bar */}
        <div style={ styles.searchBarCont }>
          <SearchBar />
        </div>

        {/* drop down filter menus */}
        <div style={ styles.dropDownCont }>
          <DropDownPicker />
          <DropDownPicker />
          <DropDownPicker />
        </div>

        <div style={ styles.trendingHeadingCont }>
          <TextUI Title="TRENDING" />
        </div>

        <div style={ styles.carouselCont }>
          <Carousel />
        </div>

        <div style={ styles.subHeadingCont }>
          <TextUI Title="GENRE" />
        </div>

        <div style={ styles.carouselCont }>
          <Carousel />
        </div>

        <div style={ styles.subHeadingCont }>
          <TextUI Title="2021 MOVIES" />
        </div>

        <div style={ styles.carouselCont }>
          <Carousel />
        </div>

        <div style={ styles.navBarCont }>
          <NavBar />
        </div>
      </div>
    </div>
  )
}

var styles = {
// entire window container
  windowCont: {
    display: "flex",
    justifyContent: "center",

    width: "100vw",
    height: "100vh"
  },

// 428px iPhone 13 Max container
  phoneSizeCont: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    width: "428px"
  },

// cinemagic title container
  titleCont: {
    display: "flex",
    justifyContent: "center",
    alignItems: "end",

    width: "100%",
    height: "50px"
  },

// search bar container
  searchBarCont: {
    display: "flex",
    justifyContent: "center",
    alignItems: "end",

    width: "100%",
    height: "55px"
  },

// drop down menu container
  dropDownCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "end",

    // width: "288px",
    width: "75%",
    height: "43px"
  },

// TRENDING header container
  trendingHeadingCont: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: "68px"
  },

// movie image gallery container
  carouselCont: {
    display: "flex",
    justifyContent: "center",
    
    width: "100%",
    height: "175px",
  },

// sub headings conts
  subHeadingCont: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",

    width: "90%",
    height: "68px"
  },

// nav bar container
  navBarCont: {
    display: "flex",
    position: "fixed",
    justifyContent: "center",
  }
}