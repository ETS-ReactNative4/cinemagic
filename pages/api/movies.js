import movies from '@/utils/imdbTop250.json';
import { filtering, sortArr } from '@/utils/func';

export default async function handler(req, res) {
  const { genre, year, duration } = req.query;
  var moviesList = [];

  if(genre){
    moviesList = filtering(movies, {
      Genre: genre
    })
  }

  if(year){
    moviesList = filtering(movies, {
      Date: year
    })
  }

  if(duration){
    moviesList = filtering(movies, {
      RunTime: duration
    })
  }

  moviesList = moviesList.slice(0, 15);

  res.status(200).json(moviesList);
}