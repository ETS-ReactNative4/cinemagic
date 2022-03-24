import movies from '@/utils/imdbTop250.json'

export function filtering(
    arr=[],
    config={
      genre:null, 
      year:null, 
      duration:null,
      title:null,
      gross:null,
      yearGreaterThan:null
    } 
){
    const {title, genre, year, duration, gross, yearGreaterThan} = config;

    if(title || genre || year || duration || gross || yearGreaterThan){
      const filtered_arr = arr.filter((o) => {
        var cond = true;
        if(title) return cond = cond && o.Title.includes(title);

        if(genre) return cond = cond && o.Genre.includes(genre);

        if(year) return cond = cond && Number(o.Date) === Number(year);

        if(duration) return cond = cond && Number(o.RunTime) >= Number(duration);

        if(gross) return cond = cond && Number(o.Gross) >= Number(gross);

        if(yearGreaterThan) return cond = cond && Number(o.Date) > Number(yearGreaterThan);

        return cond;
      })
      return filtered_arr;
    } else {
      return [];
    }
}

// const movies = require('./imdbTop250.json')

// var f_movies = filtering(movies, {
//     genre:"Action",
//     year: 1996,
//     duration:180
// })

// console.log(f_movies)

//----------------------------------sorting--------------------------------------
export function sortArr(
    arr=[],
    config={key:null, type:null}
){
   const {key, type} = config;

   if(key){
    arr.sort((cur, next)=>{
        var num1 = Number(cur[key]);
        var num2 = Number(next[key]);

        if(isNaN(cur[key])){
            num1 = cur[key];
            num2 = cur[key];
        }

        if(num1 > num2){
            if(type && type === "desc"){
                return -1;
            }else{
                return 1;
            }
        }
        if(num1 < num2){
            if(type && type === "desc"){
                return 1;
            }else{
                return -1;
            }
        }
        return 0;
       })
   }
   return arr;
}

// var f_movies = sortArr(f_movies, {
//     key:"Ranking",
//     type:"desc"
// })

// console.log(f_movies)