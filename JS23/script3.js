'use strict';

//ёлка
let result = '';
const lines = 6;
let strLen = 11;
let str = 10;

for (let i = 1; i <= lines; i++) {
    for(let j = lines; j > i; j--) {
        result += ' ';
        }
    for (let k = 0; k <strLen - str; k++) {
        result += "*";
    }
    result += '\n';
    str = str - 2;
}
console.log(result);