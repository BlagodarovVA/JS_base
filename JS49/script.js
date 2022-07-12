'use strict';

// touchstart
// touchmove - движение пальца при касании
// touchend - конец касания
// touchenter - ведем палец по экрану и заходим на элемент
// touchleave - палец ушел за пределы элемента
// touchcancel - например палец вышел за пределы браузера

window.addEventListener('DOMContentLoaded', () => {
    //получаем объект бокс из html
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {     //начало касания
        e.preventDefault();                         //отменяем стандартное поведение браузера
        
        console.log('Start');
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e) => {      //начало движения с области объекта
        e.preventDefault();                         //отменяем стандартное поведение браузера
        console.log(e.targetTouches[0].pageX);      //принт координатов
    });

    /*box.addEventListener('touchend', (e) => {       //конец касания
        e.preventDefault();                         //отменяем стандартное поведение браузера
        console.log('End');
    });*/
});

//свойства при работе с сенсорными устройствам
// touches - список палецев, которые сейчас взаимодействуют с экраном
// targetTouches - все пальцы, которые взаимодействуют именно с этим элементом
// changedTouches - пальцы, которые совершили какое-то событие
