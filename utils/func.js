export function filtering(
    arr=[],
    config={genre:null, year:null, duration:null,} 
){
    const {genre, year, duration} = config;

    if(genre || year || duration){
    const filtered_arr = arr.filter((o)=>{
        var cond = true;

            if(genre){
                cond = cond && o.Genre.includes(genre);
            }
    
            if(year){
                cond = cond && Number(o.Date) === Number(year);
            }
    
            if(duration){
                cond = cond && Number(o.RunTime) >= Number(duration);
            }
            return cond;
        })
        return filtered_arr;
    }else{
        return [];
    }
}

const movies = require('./imdbTop250.json')

var f_movies = filtering(movies, {
    genre:"Action",
    year: 1996,
    duration:180
})

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

var f_movies = sortArr(f_movies, {
    key:"Ranking",
    type:"desc"
})

console.log(f_movies)