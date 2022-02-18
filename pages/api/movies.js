import movies from '@/utils/imdbTop250.json';
import { filtering, sortArr } from '@/utils/func';

export default async function handler(req, res) {
  console.log(req.query, res.body);

  const { genre, year, duration } = req.query;
  var lists = [];

  if(genre){
    lists = filtering(movies, {
      Genre: genre
    })
  }

  if(year){
    lists = filtering(movies, {
      IMDByear: year
    })
  }

  if(duration){
    lists = filtering(movies, {
      RunTime: duration
    })
  }

  lists = lists.slice(0, 15);
}