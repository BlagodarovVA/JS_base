'use strict';

let numberOfFilms;
function start() {
    numberOfFilms = +prompt('Сколько фильмов уже?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов уже?', '');
    }
}
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


//запрос фильмов и оценок у пользователя
function rememberMyFilms() {
    for (let i = 0; i < 3; i++) {
        //обрезка пробелов в результате f1
        const f1 = prompt('Один из последних просмотренных фильмов', '').trim(),
              r1 = prompt('На сколько оцените его?', '');

        if (f1 != null && r1 != null && f1 != '' && r1 != '' && f1.length <30) {
            personalMovieDB.movies[f1] = r1;
            console.log('done');
        } else {
            i--;
            console.log('error');
        }
    }
}
rememberMyFilms();

console.log(personalMovieDB);