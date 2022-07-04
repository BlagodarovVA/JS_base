'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');

//box.style.backgroundColor = 'blue';
//box.style.width = '500px';

btns[1].style.borderRadius = '100%';

//нужно обращаться к конкретному элементу, сам псевдомасив ничего не знает о стилях
circles[0].style.backgroundColor = 'red';

//css text
let num = 400;
box.style.cssText = `background-color: blue; width: ${num}px`;


// одни и те же действия над несколькими элементами: for, for of, forEach
/*for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}
*/

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

//создание элементов скриптом
const div = document.createElement('div');
const text = document.createTextNode('Тут был я');

//выполнение действий с классом
div.classList.add('black');

//помещаем элемент div в конец тега body
//document.body.append(div);

wrapper.append(div);

//устаревший способ добавления
//wrapper.appendChild(div);

//вставка впереди
//wrapper.prepend(div);

//вставка перед
//hearts[0].before(div);

//вставка после
//hearts[0].after(div);

//устаревшая вставка
//wrapper.insertBefore(div, hearts[1]);

//удаление
//circles[0].remove();

//устаревшее удаление
//wrapper.removeChild(hearts[1]);

//замена
hearts[0].replaceWith(circles[0]);

//устаревшая замена
//wrapper.replaceChild(circles[0], hearts[0]);

//вставка текста или HTML-структуры
div.innerHTML = "<h2>Задарова Вася</h2>";

//только текст - при работе с пользователем, чтобы не ьыл передан вредоносный скрипт
//div.textContent = "Hello";

//вставка html кода перед или после определенного тега
div.insertAdjacentHTML("afterend", '<h2>Hiii</h2>');