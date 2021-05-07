let numerOfFilms; 

function start () { 
    numerOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '') ; 

    while (numerOfFilms == '' || numerOfFilms == null || isNaN(numerOfFilms)) { 
        numerOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '') ; 
    }
}

start () ; 

const personalMovieDB = {
    count: numerOfFilms, 
    movies: {}, 
    actors: {},
    genres: {}, 
    privat: false 
} ; 

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');



    function rememberMyFilms () { 

        for (let i =0 ; i < 2 ; i++) { 

            const  a = prompt('Один из последних просмотренных фильмов?', ''),  
                   b = prompt('На сколько оцените его?', '');
     
             if (a !=null && b != null && a !=' ' && b!= '' && a.length < 50) {
             personalMovieDB.movies[a] = b ; 
             console.log ('Done') ; 
             }
     
             else {
                 console.log ('Error') ;
                 i -- ; 
             }
     
         }
    }

    rememberMyFilms () ; 




   function detectPersonalLevel () { 


    if (personalMovieDB.count < 10 ) { 
        console.log ('Вы просмотерли мало фильмов') ; 
    }

    else if ( personalMovieDB.count >= 10 && personalMovieDB.count <30  ) { 
console.log ('Вы среднячок!'); 
    }
    else if ( personalMovieDB.count >= 30 && personalMovieDB.count <50 ) {
        console.log ('Вы киноман!'); 
    }

    else {
        console.log ('Error') ; 
    }

   }

   detectPersonalLevel () ; 


   function showMyDB (hidden) { 

       if (!hidden) {
           
        console.log (personalMovieDB) ; 

       }
   }

    showMyDB(personalMovieDB.privat); 



    function writeGunres( ) { 
            for (let i = 1 ; i <= 3; i++) { 
                const genre = prompt("Ваш любимый жанр под номером" + i  + "?")

                personalMovieDB.genres[i - 1] = genre ; 

            }
    }

    writeGunres( ) ; 

       console.log(personalMovieDB); 
