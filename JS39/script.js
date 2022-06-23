'use strict';

// to string
//1
console.log(typeof(String(4)));
console.log(typeof(4));

//2
console.log(typeof(5 + ''));

const num = 5;
console.log('https://vk.com/catalog/' + num);


// to number
// 1
console.log(typeof(Number('4')));

// 2
console.log(typeof(+'4'));

// 3
console.log(typeof(parseInt("15px", 10)));

//в число строку от юзера
let answ = +prompt("Hello", "");


// to boolean

// always false:
// 0, '', null, undefined, NaN;

// 1
let switcher = null;

 if (switcher) {
    console.log('Working 1...');
 }

 switcher =1;

 if (switcher) {
    console.log('Working 2...');
 }

 // 2 реже
 console.log(typeof(Boolean('4')));

 // 3 редко
 console.log(typeof(!!"4444"));