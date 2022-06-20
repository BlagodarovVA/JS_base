'use strict';

//функцию заносим в объект, как метод
let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов уже?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов уже?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLeve: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 50) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count >= 50) {
            alert('Вы киноман');
        } else {
            alert('О-ё-ёй, о-ё-ёй, о-ё-ёй, что-то пошло не так...');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {                  //если выражение true, то база отображается
            console.log(personalMovieDB);
        }
        /*if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }*/
    },
    writeYourGenres: function() {
        //1 способ
        for (let i = 1; i < 2; i++) {
            /*let genres = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genres == '' || genres == null) {
                console.log('Вы ввели некорректные данные');
                i--;
            } else {
                personalMovieDB.genres[i-1] = genres;
            }

            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${[i + 1]} - это ${item}`);
            });*/
        
        //2 способ
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
            if (genres == '' || genres == null) {
                console.log('Вы ввели некорректные данные');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();                  //сортировка по алфавиту
            }
            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${[i + 1]} - это ${item}`);
            });
        }

    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};
