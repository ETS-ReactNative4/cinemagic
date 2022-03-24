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
  var cutURLUpperCase = cutURL.toUpperCase();

  var movieFilteredArr = [];

  const FilterMoviesByQuery = () => {
    movieFilteredArr = filtering(movies, {
      duration: cutURL
    });
    var slicedArr = movieFilteredArr.slice(0, 20);

    return (
      <div className={scss.contentRow}>
        {slicedArr.map(data => (
          <GridCard movieName={data.Title} key={data.Title}/>
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