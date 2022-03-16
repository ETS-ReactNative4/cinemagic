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
  const { asPath } = useRouter();
  var cutURL = asPath.substring(10);

  var movieFilteredArr = [];

  const FilterMoviesByQuery = () => {
    movieFilteredArr = filtering(movies, {
      duration: cutURL
    });
    var slicedArr = movieFilteredArr.slice(0, 20);

    for(let i = 0; i < slicedArr.length; i++){
      return (
        <div className={scss.contentRow}>
          {slicedArr.map(data => (
            <GridCard movieName={data.Title} elementKey={data.Title}/>
          ))}
        </div>
      )
    }
  }

  // make card component with prop values to hold movie details
  // then pass card component to THIS page
  // then create an empty array
  // then create filtering function to filter the json file for the URL QUERY genre
  // then place the filtered movies into the empty array
  // extract the necessary keys of the movie objects in the array and place them in the card components
  // then return the page with the filtered cards


  const DurationFilteredPage = () => {
    var cutURLUpperCase = cutURL.toUpperCase();

    switch( cutURL ){
      case 'Lessthan90mins':
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
        );
      case 'Morethan90mins':
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
        );
      default: 
        return (
          <>
            error
          </>
        )
    }
  }

  return (
    <DurationFilteredPage />
  )
}