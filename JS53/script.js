"use strict";

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;    //оператор ИЛИ вернёт первое правдивое значение
    elem.style.width = `${w ?? 200}px`;     // например аргументы не переданы в стр 13
    elem.innerHTML = (h ?? 200) * (w ?? 200);   // если существует высота, то умножим на существующую ширину
}                                               // скобки нужны т.к. разный приоритет операций

changeParams(box, newHeight, newWidth);

let userName;                           //оператор nullish реагирует на null и undefined
let userKey;

console.log(userName ?? userKey ?? 'User');        //не работает тут, работает в браузере
                                                    //можно строить цепочку из значений для поиска первого значения

