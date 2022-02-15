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
          <DropDownPicker dropDownTitle='Action'/>
          <DropDownPicker dropDownTitle='Year'/>
          <DropDownPicker dropDownTitle='Duration'/>
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
          <Carousel />
        </div>

        {/* 2021 movies subheading */}
        <div className='subHeadingCont'>
          <TextUI Title="2021 MOVIES" />
        </div>

        {/* movie carousel */}
        <div className='carouselCont2'>
          <Carousel />
        </div>

        {/* nav bar */}
        <div className='navBarCont'>
          <NavBar />
        </div>
      </div>
    </div>
  )
}