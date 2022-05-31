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
}
rememberMyFilms();

//определение уровня киномании
function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 50) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 50) {
        alert('Вы киноман');
    } else {
        alert('О-ё-ёй, о-ё-ёй, о-ё-ёй, что-то пошло не так...');
    }
}
detectPersonalLevel();

//отображение в консоль, если не приватная база
function showMyDB(hidden) {
    if (!hidden) {                  //если выражение true, то база отображается
        console.log(personalMovieDB);
    }
    /*if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }*/
}
showMyDB(personalMovieDB.privat);

//запись жанров в бд
function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}
writeYourGenres();
