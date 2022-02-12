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

  .section{
    display: flex;
    width: 100vw;
    margin-left: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .card{
    display: flex;
    flex-direction: row;
    width:100vw;
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
    margin-bottom: 100px;
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
    <div style={{height:"175px", backgroundColor:"#FAB"}}>TRENDING card</div>
    <div className='margin'>
      <DotNavBar/>
    </div>
    <div className='section'>
      <TextUI Title='GENRE'/>
    </div>
    <div className='card'>
      {fakeData.map((o,i)=><Card CardTitle={o.CardTitle} CardImgSrc={o.CardImgSrc}/>)}
    </div>
    <div className='section'>
      <TextUI Title='2021 Movies'/>
    </div>
    <div className='marginBot'>
      <Card/>
    </div>
    <NavBar/>
    </HomeCont>
  }