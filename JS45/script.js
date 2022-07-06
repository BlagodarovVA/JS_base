'use strict';

const //btn = document.querySelector('button'),
    btn = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');

//редко используется такой обработчик
/*
btn.onclick = function() {
    alert('Click');
};
*/

//добавлен слушатель событий. Если произойдет это событие, то слушатель запустит обработчик
//передаем название события, затем coolback функцию
/*btn.addEventListener('click', () => {
    alert('Click');
});*/

//Можно повесить несколько действий на одно событие
/*
btn.addEventListener('mouseenter', () => {
    console.log('Hover');
});
*/
//назначаем переменной функцию для возможности ее дальнейшего удаления
//let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
   // i++;
   // if (i == 1) {
   //     btn.removeEventListener('click', deleteElement);
   // }
};

//Можно повесить несколько действий на одно событие
// (e) - передаёт информацию о событии, в том числе taget, type

/*btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);*/

//добавлена опция события {once: true}. Событие сробатывает только 1 раз
btn.forEach(item => {
    item.addEventListener('click', deleteElement, {once: true});
});


//отмена стандартного поведения браузера при событии
const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(event.target);
});


