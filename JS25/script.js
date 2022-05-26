'use strict';

let num = 20;
function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage('Hallo');
console.log(num);

//
function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(7, 8));

//
function ret() {
    let num = 50;

    //

    return num;
}

const anotherNum = ret();
console.log(anotherNum);


//function expression
const logger = function() {
    console.log('Zadarova');

};

logger();


//стрелочная функция
const calc1 = (a, b) => a + b;

const calc2 = (a, b) => {
    console.log('Стрелочная шляпа!');
    return a + b;
};