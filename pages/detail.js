import Head from 'next/head';
import styled from 'styled-components';
import React, {useState}  from 'react';
import BackBtn from '@/comps/BackBtn';
import TextUI from '@/comps/TextUI';
import Card from '@/comps/Card';
import Info from '@/comps/Info';
import Description from '@/comps/Description'
import fakeData from '@/data/fakeData.json'
import NavBar from '@/comps/NavBar';

const DetailCont = styled.div`
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
    margin-bottom: 20px;
  }

  .top{
    display: flex;
    width: 100vw;
    justify-content: space-evenly;
    margin-bottom: 20px;
  }

  .infoCard{
    display: flex;
    flex-direction: column;
    height: 320px;
    justify-content: space-between;
  }

  .bot{
    display: flex;
    width: 100vw;
    margin-left: 70px;
    margin-top: 40px;
    margin-bottom: 10px;
  }

  .card{
    display: flex;
    width: 100vw;
    overflow-x: auto;
  }

  .card::-webkit-scrollbar{
    width:0;
  }

  .marginBot{
    margin-bottom: 70px;
  }
`;

export default function Detail() {
  return <DetailCont>
    <div className='backBtm'>
        <BackBtn/>
    </div>
    <div className='title'>
        <TextUI Title='MOVIE DETAIL'/>
    </div>
    <div className='top'>
        <Card CardTitle="" CardImgHeight='320px' CardImgWidth='220px'/>
        <div className='infoCard'>
            <Info infoSrc='/video-dark.svg' title='Genre'/>
            <Info text='1h 20m'/>
            <Info infoSrc='/star-black.svg' title='Rating' text='8/10'/>
        </div>
    </div>
    <Description title='Yi Bo Number 1'/>
    <div className='bot'>
        <TextUI Title='ACTORS'/>
    </div>
    <div className='marginBot'>
        <div className='card'>
        {fakeData.map((data, card)=><Card key={card} CardTitle={data.CardTitle} CardImgSrc={data.CardImgSrc}/>)}
        </div>
    </div>
    <NavBar/>
    </DetailCont>
    
}