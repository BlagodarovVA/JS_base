"use strict";

const boxesQuery = document.querySelectorAll('.box');     //получаем все элементы класса. имеет методы для работы
const boxesGet = document.getElementsByClassName('box');  //то же самое что и выше, но менее полезно, без методов.

boxesQuery.forEach(box => {                     //перебрать все элементы, найти по тот что подходит по css селектору
    if (box.matches('.this')) console.log(box);
});


console.log(boxesQuery[0].closest('.wrapper')); //ищем ближайший элемент с селектором .wrapper

/*
boxesQuery[0].remove();                //3 стр - коллекция статична. показывает количество на момент обращения в 3 строке, до удаления
boxesGet[0].remove();                  //4 стр - живая коллекция. показывает состояние на текущий момент

for (let i = 0; i < 5; i++) {
    const div = document.createElement('div');  //создаем элемент
    div.classList.add('box');                   //назначаем класс
    document.body.append(div);                  //помещаем боксы в body html
}

console.log(boxesQuery);
console.log(boxesGet);
//console.log(document.body.children);   //просто еще один метод

console.log(Array.from(boxesGet));       //создаем массив из коллекции. но он статичен, не отслеживает изменения
*/