import movies from '@/utils/imdbTop250.json';
import { filtering, sortArr } from '@/utils/func';

export default async function handler(req, res) {
  const { text, genre, year, duration } = req.query;
  var moviesList = [];

  if(text){
    moviesList = filtering(movies, {
      title: text
    })
  }

  if(genre){
    moviesList = filtering(movies, {
      genre: genre
    })
  }

  if(year){
    moviesList = filtering(movies, {
      date: year
    })
  }

  if(duration){
    moviesList = filtering(movies, {
      duration: duration
    })
  }

  moviesList = moviesList.slice(0, 15);

  res.status(200).json(moviesList);
}