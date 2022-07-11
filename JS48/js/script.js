/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

//код помещаем внутрь листенера, чтобы срабатывал после загрузки ДОМ структуры
document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Обливион",
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Сифон и Борода",
            "Avatar"
        ]
    };
    
    
    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = document.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),     //класс, поэтому с точкой
        checkbox = addForm.querySelector('[type="checkbox"]');  //в квадратных скобках html-атрибуты

    //обработчик события, отслеживающий отправку формы
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();                         //отменяем стандартное поведение браузера - обновление страницы

        let newFilm = addInput.value;                 //в свойстве содержится то, что ввел пользователь
        const favorite = checkbox.checked;              //атрибут в html для получения свойства чекбокса

        //условие, чтобы не записывалась пустая строка
        if (newFilm) {
            //обрезаем после 21 символа и вставляем ...
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 21)}...`;
            }

            if (favorite) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();                           //сброс элемента, на котором событие

    });
    
    // удаление в функцию
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    
    const makeChanges = () => {
        genre.textContent = 'драма';

        poster.style.backgroundImage = 'url("img/bg.jpg")'; //нужно делать разные ковычки при конвертировании
    };


    const sortArr = (arr) => {
        arr.sort();
    };
    

    function createMovieList(films, parent) {
        parent.innerHTML = "";  //очистка
        sortArr(films);         //помещаем в функцию для сортировки при вызове
        
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${film}
                <div class="delete"></div>
            </li>  
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
            btn.parentElement.remove();                 //удаляем родительский элемент корзинки
            movieDB.movies.splice(i, 1);                //удаляем из базы i-й элемент, 1 шт
                
                createMovieList(films, parent);         //вызываем рекурсивно эту же функцию для перестройки нумерации
            });
        });
    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});

