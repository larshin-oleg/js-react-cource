"use strict";

let numberOfFilms;

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function (){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '0');
    
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
            numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '0');
        }
    },
    rememberMyFilms: function (){
        for (let i = 0; i < 2; i++){
        
            const lastWatchedMovie = prompt("Один из просмотренных фильмов?", ''),
                rating = +prompt("На сколько оцените его?", '');
            
            if(lastWatchedMovie != null && rating != null && lastWatchedMovie != '' && !isNaN(rating) && rating != '' && lastWatchedMovie.length < 50){
                personalMovieDB.movies[lastWatchedMovie] = rating;
                // console.log(typeof(rating));
                console.log(`done iteration ${i}`);
            } else {
                console.log(`error iteration ${i}`);
                i--
            }
                
        };
        
        //  let i = 0;
        //  while (i < 2) {
        //     const lastWatchedMovie = prompt("Один из просмотренных фильмов?", ''),
        //     rating = +prompt("На сколько оцените его?", '');
                
        //     if(lastWatchedMovie != null && rating != null && lastWatchedMovie != '' && !isNaN(rating) && rating != '' && lastWatchedMovie.length < 50){
        //         personalMovieDB.movies[lastWatchedMovie] = rating;
        //         console.log(typeof(rating));
        //         console.log(`done iteration ${i}`);
        //     } else {
        //         console.log(`error iteration ${i}`);
        //         i--
        //     }
        
        //     i++;
        // };
        
        // do {
        //     const lastWatchedMovie = prompt("Один из просмотренных фильмов?", ''),
        //     rating = +prompt("На сколько оцените его?", '');
                
        //     if(lastWatchedMovie != null && rating != null && lastWatchedMovie != '' && !isNaN(rating) && rating != '' && lastWatchedMovie.length < 50){
        //         personalMovieDB.movies[lastWatchedMovie] = rating;
        //         console.log(typeof(rating));
        //         console.log(`done iteration ${i}`);
        //     } else {
        //         console.log(`error iteration ${i}`);
        //         i--
        //     }
                
        //     i++;
        // } while (i < 2);
        
    },
    detectPersonalLevel: function (){
        if (personalMovieDB.count > 0 && personalMovieDB.count < 10){
            alert("Просмотренно довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function (){
        if (personalMovieDB.privat === false){
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },
    writeYourGenres: function (){
        for (let i = 0; i < 3; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
            if (genre != null && genre != ''){
                personalMovieDB.genres[i] = genre;
                console.log(`done iteration genre ${i}`);
            } else {
                console.log(`ERROR iteration genre ${i}`);
                i--;
            }
        }
        
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр №${i+1} - это ${item}`);
        });
    }
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres();

// personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
