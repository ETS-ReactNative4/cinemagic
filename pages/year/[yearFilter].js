import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { filtering, sortArr } from '@/utils/func';
import movies from '@/utils/imdbTop250.json';
import PageLayout from '@/styles/pageLayout';
import scss from '@/styles/pageStyles/genreFiltered.module.scss';

// components
import Logo from '@/comps/Logo';
import SearchBar from '@/comps/SearchBar';
import NavBar from '@/comps/NavBar';
import GenreDropdownMenu from '@/comps/DropDownPicker/genre';
import YearDropdownMenu from '@/comps/DropDownPicker/year';
import DurationDropdownMenu from '@/comps/DropDownPicker/duration';
import TextUI from '@/comps/TextUI';
import GridCard from '@/comps/GridCard';

export default function FilteredPage({

}){
  const router = useRouter();
  const { asPath } = useRouter();
  var cutURL = asPath.substring(6);
  var cutURLUpperCase = cutURL.toUpperCase();

  var movieFilteredArr = [];
  var uniqueMovieFilteredArry = new Set();

  const handleCardClick = sel => router.push(`/detail/${sel}`);

  const FilterMoviesByQuery = () => {
    movieFilteredArr = filtering(movies, {
      year: cutURL
    });

    const uniqueArrFinder = movieFilteredArr.filter((obj) => {
      const isPresentinSet = uniqueMovieFilteredArry.has(obj.Title && obj.Poster);
      uniqueMovieFilteredArry.add(obj.Title && obj.Poster);

      return !isPresentinSet;
    });

    var slicedArr = uniqueArrFinder.slice(0, 20);

    function sliceTitle(movie){
      if(movie.length < 14){
        return "";
      }else if(movie.length > 14 ){
        return "...";
    }
  }

    return (
      <div className={scss.contentRow}>
        {slicedArr.map(data => (
          <GridCard 
            movieName={data.Title.slice(0,14) + sliceTitle(data.Title)} 
            imageSrc={ data.Poster } 
            key={data.Title} 
            onCardClick={ () => handleCardClick(`${data.Title}`)} 
          />
        ))}
      </div>
    )
  }

  return (
    <PageLayout>
      {/* subheading */}
      <div className={scss.trendingHeadingCont}>
        <TextUI Title={`${cutURLUpperCase} MOVIES`} />
      </div>

      {/* filtered movies */}
      <div className={scss.contentContainer}>
        <FilterMoviesByQuery />
      </div>
    </PageLayout>
  )
}