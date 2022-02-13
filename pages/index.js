import Head from 'next/head';
import styled from 'styled-components';
import React, {useState}  from 'react';
import Logo from '@/comps/Logo';
import SearchBar from '@/comps/SearchBar';
import TextUI from '@/comps/TextUI';
import Card from '@/comps/Card';
import DotNavBar from '@/comps/DotNavBar';
import NavBar from '@/comps/NavBar';
import fakeData from '@/data/fakeData.json';

const HomeCont = styled.div`
  margin:0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #252525;
  width: 100vw;
  height: 100vh;

  .section{
    display: flex;
    width: 100vw;
    margin-left: 25px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .card{
    display: flex;
    max-height: 220px;
    width: 100vw;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .card::-webkit-scrollbar{
    width:0;
    height:0;
  }

  .marginTop{
    margin-top: 25px;
    margin-bottom: 10px;
  }

  .margin{
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .marginBot{
    margin-bottom: 80px;
  }
`;

export default function Home() {
  return <HomeCont>
    <div className='marginTop'>
      <Logo/>
    </div>
    <div className='margin'>
      <SearchBar/>
    </div>
    <div className='margin'>
      <div style={{height:"30px", backgroundColor:"#FAB"}}>FilterButton</div>
    </div>
    <div className='margin'>
      <TextUI Title='TRENDING'/>
    </div>
    <div className='card'>
      {fakeData.map((data, card)=><Card key={card} CardImgHeight='175px' CardImgWidth='160px' CardTitle={data.CardTitle} CardImgSrc={data.CardImgSrc}/>)}
    </div>
      <DotNavBar/>
    <div className='section'>
      <TextUI Title='GENRE'/>
    </div>
    <div className='card'>
      {fakeData.map((data, card)=><Card key={card} CardTitle={data.CardTitle} CardImgSrc={data.CardImgSrc}/>)}
    </div>
    <div className='section'>
      <TextUI Title='2021 Movies'/>
    </div>
    <div className='marginBot'>
      <div className='card'>
        {fakeData.map((data, card)=><Card key={card} CardTitle={data.CardTitle} CardImgSrc={data.CardImgSrc}/>)}
      </div>
    </div>
    <NavBar/>
    </HomeCont>
  }