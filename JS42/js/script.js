'use strict';

//старые методы
//получить по ID
const box = document.getElementById('box');
console.log(box);

//получить по имени тега
const btns = document.getElementsByTagName('button')[1];
console.log(btns);

//получить по классу
const circles = document.getElementsByClassName('circle');
console.log(circles);


//современные методы
//поддерживает css селекторы
const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
    console.log(item);
});

//позволяет вернуть один первый попавшийся элемент, подошедший по условиям
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);
