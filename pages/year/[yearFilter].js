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

  const handleCardClick = sel => router.push(`/detail/${sel}`);

  const FilterMoviesByQuery = () => {
    movieFilteredArr = filtering(movies, {
      year: cutURL
    });
    var slicedArr = movieFilteredArr.slice(0, 20);

    function sliceTitle(movie){
      if(movie.length > 14){
        return "...";
      }
    }

    for(let i = 0; i < slicedArr.length; i++){
      return (
        <div className={scss.contentRow}>
          {slicedArr.map(data => (
            <GridCard movieName={data.Title + sliceTitle(data.Title)} imageSrc={ data.Poster } key={data.Title} onCardClick={ () => handleCardClick(`${data.Title}`)} />
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

  const YearFilteredPage = () => {
    var cutURLUpperCase = cutURL.toUpperCase();

    switch( cutURL ){
      case '1996':
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
      case '1997':
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
      case '1998':
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
      case '1999':
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
      case '2000':
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
      case '2001':
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
      case '2002':
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
      case '2003':
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
      case '2004':
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
      case '2005':
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
      case '2006':
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
      case '2007':
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
      case '2008':
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
      case '2009':
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
      case '2010':
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
      case '2011':
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
      case '2012':
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
      case '2013':
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
      case '2014':
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
      case '2015':
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
      case '2016':
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
      case '2017':
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
      case '2018':
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
      case '2019':
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
      case '2020':
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
      case '2021':
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
      default: 
        return (
          <>
            error
          </>
        )
    }
  }

  return (
    <YearFilteredPage />
  )
}