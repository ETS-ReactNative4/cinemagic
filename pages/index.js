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

        
      </div>
    </div>

    // <HomeCont>
    //   <div className='marginTop'>
    //     <Logo/>
    //   </div>
    //   <div className='margin'>
    //     <SearchBar/>
    //   </div>
    //   <div className='margin'>
    //     <div style={{height:"30px", backgroundColor:"#FAB"}}>FilterButton</div>
    //   </div>
    //   <div className='margin'>
    //     <TextUI Title='TRENDING'/>
    //   </div>
    //   <div className='card'>
    //     {fakeData.map((data, card)=><Card key={card} CardImgHeight='175px' CardImgWidth='160px' CardTitle={data.CardTitle} CardImgSrc={data.CardImgSrc}/>)}
    //   </div>
    //     <DotNavBar/>
    //   <div className='section'>
    //     <TextUI Title='GENRE'/>
    //   </div>
    //   <div className='card'>
    //     {fakeData.map((data, card)=><Card key={card} CardTitle={data.CardTitle} CardImgSrc={data.CardImgSrc}/>)}
    //   </div>
    //   <div className='section'>
    //     <TextUI Title='2021 Movies'/>
    //   </div>
    //   <div className='marginBot'>
    //     <div className='card'>
    //       {fakeData.map((data, card)=><Card key={card} CardTitle={data.CardTitle} CardImgSrc={data.CardImgSrc}/>)}
    //     </div>
    //   </div>
    //   <NavBar/>
    // </HomeCont>
  )
}
  
const HomeCont = styled.div`
margin:0;
display: flex;
flex-direction: column;
align-items: center;
background-color: #252525;
overflow-x: hidden;
width: 100vw;

.section{
  display: flex;
  width: 100vw;
  margin-left: 25px;
  margin-top: 10px;
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

.marginTop{
  margin-top: 25px;
  margin-bottom: 10px;
}

.margin{
  margin-top: 10px;
  margin-bottom: 10px;
}

.marginBot{
  margin-bottom: 70px;
}
`;

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
  }

}