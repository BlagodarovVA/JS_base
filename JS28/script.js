'use strict';

const str = "tEst";
const arr = [1, 2, 5];

console.log(arr.length);
console.log(str[2]);

//методы изменения регистра
console.log(str.toUpperCase());
console.log(str.toLowerCase());


//поиск подстроки. выводится первый номер подстроки в строке
const fruit = "Some fruit";
console.log(fruit.indexOf("q"));

//взять подстроку
const logg = "Hello world";
console.log(logg.slice(6, 11));


console.log(logg.substring(6, 11));

//второй аргумент - сколько символов нужно вырезать
console.log(logg.substr(6, 5));


// Math - библиотека для работы с числами
//округление
const num = 12.5;
console.log(Math.round(num));

//конвертация строки в Int
const test = "12.2px";
console.log(parseInt(test));

console.log(parseFloat(test));
