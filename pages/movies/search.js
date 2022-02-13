import Head from 'next/head';
import styled from 'styled-components';
import React, {useState}  from 'react';
import SearchBar from '@/comps/SearchBar';
import TextUI from '@/comps/TextUI';
import Card from '@/comps/Card';
import NavBar from '@/comps/NavBar';
import fakeData from '@/data/fakeData.json';
import BackBtn from '@/comps/BackBtn';

const HomeCont = styled.div`
  margin:0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #252525;
  overflow-x: hidden;
  width: 100vw;

  .backBtm{
    width: 100vw;
    height: 50px;
    position: fixed;
    right: -20px;
    display: flex;
    align-items: center;
  }

  .title{
    height: 50px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .section{
    display: flex;
    width: 100vw;
    margin-left: 25px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .card{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100vw;
    margin-bottom: 80px;
  }

  .margin{
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .marginBot{
    margin-bottom: 70px;
  }
`;

export default function Home() {
  return <HomeCont>
    <div className='backBtm'>
        <BackBtn/>
    </div>
    <div className='title'>
        <TextUI Title='SEARCH'/>
    </div>
    <div className='margin'>
      <SearchBar/>
    </div>
    <div className='margin'>
      <div style={{height:"30px", backgroundColor:"#FAB"}}>sortButton</div>
    </div>
    <div className='margin'>
      <TextUI Title='YOUR RESEARCH'/>
    </div>
    <div className='card'>
      {fakeData.map((data, card)=><Card key={card} marginBot="15px" CardImgHeight="244px" CardImgWidth='180px' CardTitle={data.CardTitle} CardImgSrc={data.CardImgSrc}/>)}
    </div>
    <NavBar/>
    </HomeCont>
  }