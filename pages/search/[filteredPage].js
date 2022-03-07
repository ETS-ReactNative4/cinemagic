import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { filtering, sortArr } from '@/utils/func';
import movies from '@/utils/imdbTop250.json';
import PageLayout from '@/styles/pageLayout';

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
  const changeTheme = () => {
    setMode(!mode);
    setTheme(theme === 'light' ? 'default' : 'light')
    console.log("Theme", mode)
  }

  const changeView = () => {
    setView(!view);
    console.log("View", view)
  }

  const setting = () => {
    setSetPop(!setPop);
  }

  const router = useRouter();
  const { asPath } = useRouter();
  var cutURL = asPath.substring(8);

  var movieFilteredArr = [];

  const filteringMoviesByGenre = (genre) => {
    console.log(genre);
    router.push(`/search/${genre}`);
  }

  useEffect(() => {
    FilterMoviesByQuery();
  }, [])

  const FilterMoviesByQuery = () => {
    movieFilteredArr = filtering(movies, {
      genre: cutURL
    });

    // console.log(movieFilteredArr);

    for(let i = 0; i < movieFilteredArr.length; i++){
      return (
        <div className='genreFilter-ContentRow'>
          {movieFilteredArr.map(data => (
            <GridCard movieName={movieFilteredArr[i].Title} elementKey={data.Title}/>
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


  const GenreFilteredPage = () => {
    var cutURLUpperCase = cutURL.toUpperCase();

    switch( cutURL ){
      case 'Action':
        return (
          <PageLayout>
            {/* subheading */}
            <div className='trendingHeadingCont'>
              <TextUI Title={`${cutURLUpperCase} MOVIES`} />
            </div>

            {/* filtered movies */}
            <div className='genreFilter-ContentContainer'>
              <FilterMoviesByQuery />
            </div>
          </PageLayout>
        );
      case 'Adventure':
        return (
          <PageLayout>
            {/* subheading */}
            <div className='trendingHeadingCont'>
              <TextUI Title={`${cutURLUpperCase} MOVIES`} />
            </div>

            {/* filtered movies */}
            <div className='genreFilter-ContentContainer'>
              <FilterMoviesByQuery />
            </div>
          </PageLayout>
        );
      case 'Animation':
        return (
          <PageLayout>
            {/* subheading */}
            <div className='trendingHeadingCont'>
              <TextUI Title={`${cutURLUpperCase} MOVIES`} />
            </div>

            {/* filtered movies */}
            <div className='genreFilter-ContentContainer'>
              <FilterMoviesByQuery />
            </div>
          </PageLayout>
        );
      case 'Biography':
        return (
          <PageLayout>
            {/* subheading */}
            <div className='trendingHeadingCont'>
              <TextUI Title={`${cutURLUpperCase} MOVIES`} />
            </div>

            {/* filtered movies */}
            <div className='genreFilter-ContentContainer'>
              <FilterMoviesByQuery />
            </div>
          </PageLayout>
        )
      case 'Comedy':
        return (
          <PageLayout>
            {/* subheading */}
            <div className='trendingHeadingCont'>
              <TextUI Title={`${cutURLUpperCase} MOVIES`} />
            </div>

            {/* filtered movies */}
            <div className='genreFilter-ContentContainer'>
              <FilterMoviesByQuery />
            </div>
          </PageLayout>
        )
      case 'Crime':
        return (
          <PageLayout>
            {/* subheading */}
            <div className='trendingHeadingCont'>
              <TextUI Title={`${cutURLUpperCase} MOVIES`} />
            </div>

            {/* filtered movies */}
            <div className='genreFilter-ContentContainer'>
              <FilterMoviesByQuery />
            </div>
          </PageLayout>
        )
      case 'Drama':
        return (
          <PageLayout>
            {/* subheading */}
            <div className='trendingHeadingCont'>
              <TextUI Title={`${cutURLUpperCase} MOVIES`} />
            </div>

            {/* filtered movies */}
            <div className='genreFilter-ContentContainer'>
              <FilterMoviesByQuery />
            </div>
          </PageLayout>
        )
      case 'Family':
        return (
          <PageLayout>
            {/* subheading */}
            <div className='trendingHeadingCont'>
              <TextUI Title={`${cutURLUpperCase} MOVIES`} />
            </div>

            {/* filtered movies */}
            <div className='genreFilter-ContentContainer'>
              <FilterMoviesByQuery />
            </div>
          </PageLayout>
        )
      case 'Fantasy':
        return (
          <PageLayout>
            {/* subheading */}
            <div className='trendingHeadingCont'>
              <TextUI Title={`${cutURLUpperCase} MOVIES`} />
            </div>

            {/* filtered movies */}
            <div className='genreFilter-ContentContainer'>
              <FilterMoviesByQuery />
            </div>
          </PageLayout>
        )
      case 'Film Noir':
        return (
          <PageLayout>
            {/* subheading */}
            <div className='trendingHeadingCont'>
              <TextUI Title={`${cutURLUpperCase} MOVIES`} />
            </div>

            {/* filtered movies */}
            <div className='genreFilter-ContentContainer'>
              <FilterMoviesByQuery />
            </div>
          </PageLayout>
        )
      case 'History':
        return (
          <PageLayout>
            {/* subheading */}
            <div className='trendingHeadingCont'>
              <TextUI Title={`${cutURLUpperCase} MOVIES`} />
            </div>

            {/* filtered movies */}
            <div className='genreFilter-ContentContainer'>
              <FilterMoviesByQuery />
            </div>
          </PageLayout>
        )
      case 'Horror':
        return (
          <PageLayout>
            {/* subheading */}
            <div className='trendingHeadingCont'>
              <TextUI Title={`${cutURLUpperCase} MOVIES`} />
            </div>

            {/* filtered movies */}
            <div className='genreFilter-ContentContainer'>
              <FilterMoviesByQuery />
            </div>
          </PageLayout>
        )
      case 'Music':
        return (
          <PageLayout>
            {/* subheading */}
            <div className='trendingHeadingCont'>
              <TextUI Title={`${cutURLUpperCase} MOVIES`} />
            </div>

            {/* filtered movies */}
            <div className='genreFilter-ContentContainer'>
              <FilterMoviesByQuery />
            </div>
          </PageLayout>
        )      
      case 'Musical':
        return (
          <PageLayout>
            {/* subheading */}
            <div className='trendingHeadingCont'>
              <TextUI Title={`${cutURLUpperCase} MOVIES`} />
            </div>

            {/* filtered movies */}
            <div className='genreFilter-ContentContainer'>
              <FilterMoviesByQuery />
            </div>
          </PageLayout>
        )      
      case 'Mystery':
        return (
          <PageLayout>
            {/* subheading */}
            <div className='trendingHeadingCont'>
              <TextUI Title={`${cutURLUpperCase} MOVIES`} />
            </div>

            {/* filtered movies */}
            <div className='genreFilter-ContentContainer'>
              <FilterMoviesByQuery />
            </div>
          </PageLayout>
        )      
      case 'Romance':
        return (
          <PageLayout>
            {/* subheading */}
            <div className='trendingHeadingCont'>
              <TextUI Title={`${cutURLUpperCase} MOVIES`} />
            </div>

            {/* filtered movies */}
            <div className='genreFilter-ContentContainer'>
              <FilterMoviesByQuery />
            </div>
          </PageLayout>
        )      
      case 'Sci-Fi':
        return (
          <PageLayout>
            {/* subheading */}
            <div className='trendingHeadingCont'>
              <TextUI Title={`${cutURLUpperCase} MOVIES`} />
            </div>

            {/* filtered movies */}
            <div className='genreFilter-ContentContainer'>
              <FilterMoviesByQuery />
            </div>
          </PageLayout>
        )      
      case 'Short':
        return (
          <PageLayout>
            {/* subheading */}
            <div className='trendingHeadingCont'>
              <TextUI Title={`${cutURLUpperCase} MOVIES`} />
            </div>

            {/* filtered movies */}
            <div className='genreFilter-ContentContainer'>
              <FilterMoviesByQuery />
            </div>
          </PageLayout>
        )      
      case 'Sport':
        return (
          <PageLayout>
            {/* subheading */}
            <div className='trendingHeadingCont'>
              <TextUI Title={`${cutURLUpperCase} MOVIES`} />
            </div>

            {/* filtered movies */}
            <div className='genreFilter-ContentContainer'>
              <FilterMoviesByQuery />
            </div>
          </PageLayout>
        )      
      case 'Thriller':
        return (
          <PageLayout>
            {/* subheading */}
            <div className='trendingHeadingCont'>
              <TextUI Title={`${cutURLUpperCase} MOVIES`} />
            </div>

            {/* filtered movies */}
            <div className='genreFilter-ContentContainer'>
              <FilterMoviesByQuery />
            </div>
          </PageLayout>
        )      
      case 'War':
        return (
          <PageLayout>
            {/* subheading */}
            <div className='trendingHeadingCont'>
              <TextUI Title={`${cutURLUpperCase} MOVIES`} />
            </div>

            {/* filtered movies */}
            <div className='genreFilter-ContentContainer'>
              <FilterMoviesByQuery />
            </div>
          </PageLayout>
        )      
      case 'Western':
        return (
          <PageLayout>
            {/* subheading */}
            <div className='trendingHeadingCont'>
              <TextUI Title={`${cutURLUpperCase} MOVIES`} />
            </div>

            {/* filtered movies */}
            <div className='genreFilter-ContentContainer'>
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
    <GenreFilteredPage />
  )
}