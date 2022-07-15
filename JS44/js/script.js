/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Обливион",
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Бацька проциу усих",
        "Avatar"
    ]
};



const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = document.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');


// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
adv.forEach(item => {
    item.remove();
});

// 2) Изменить жанр фильма, поменять "комедия" на "драма"
genre.textContent = 'драма';

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
//Реализовать только при помощи JS
poster.style.backgroundImage = 'url("img/bg.jpg")'; //нужно делать разные ковычки при конвертировании

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
//Отсортировать их по алфавиту
movieList.innerHTML = "";  //очистка

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}. ${film}
        <div class="delete"></div>
    </li>  
    `;
});