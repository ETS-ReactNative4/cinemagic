import React, { useEffect, useState } from 'react';
import scss from '@/styles/pageStyles/genreFiltered.module.scss';
import { useRouter } from 'next/router';
import { filtering, sortArr } from '@/utils/func';
import movies from '@/utils/imdbTop250.json';
import PageLayout from '@/styles/pageLayout';

// components
import TextUI from '@/comps/TextUI';
import GridCard from '@/comps/GridCard';
import { stringify } from '@firebase/util';

export default function FilteredPage({

}){
  const router = useRouter();
  const { asPath } = useRouter();
  var cutURL = asPath.substring(7);
  var cutURLUpperCase = cutURL.toUpperCase();

  var movieFilteredArr = [];

  const handleCardClick = sel => router.push(`/detail/${sel}`);

  const FilterMoviesByQuery = () => {
    movieFilteredArr = filtering(movies, {
      genre: cutURL
    });
    var slicedArr = movieFilteredArr.slice(0, 20);

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