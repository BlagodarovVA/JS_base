'use strict';
/*
//task 1
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 3; i++) {
    const f1 = prompt('Один из последних просмотренных фильмов', ''),
          r1 = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[f1] = r1;
}
console.log(personalMovieDB);


//task 2
for (let i = 0; i < 3; i++) {
    const f1 = prompt('Один из последних просмотренных фильмов', ''),
          r1 = prompt('На сколько оцените его?', '');
    if (f1 != null && r1 != null && f1 != '' && r1 != '' && f1.length <30) {
        personalMovieDB.movies[f1] = r1;
        console.log('done');
    } else {
        i--;
        console.log('error');
    }
}
console.log(personalMovieDB);


//task 3
const numberOfFilms1 = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms1);

if (numberOfFilms1 < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (numberOfFilms1 >= 10 && numberOfFilms1 < 50) {
    alert('Вы классический зритель');
} else if (numberOfFilms1 >= 50) {
    alert('Вы киноман');
} else {
    alert('Ошибка введённых данных');
}  
*/

// task 4
const numberOfFilms1 = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms1);
let err = true;

if (numberOfFilms1 < 10) {
    alert('Просмотрено довольно мало фильмов');
    err = false;
}
if (numberOfFilms1 >= 10 && numberOfFilms1 < 50) {
    alert('Вы классический зритель');
    err = false;
}    
if (numberOfFilms1 >= 50) {
    alert('Вы киноман');
    err = false;    
}
if (err == true) {alert('Ошибка введённых данных');}
