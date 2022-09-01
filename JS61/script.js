"use strict";

//max int
console.log(Number.MAX_SAFE_INTEGER);

//создаем bigInt
const bigint = 123467489798756435467897897684564889789456897n;

const sameBigint = BigInt(123467489798756435467897897684564889789456897);

console.log(typeof(bigint));

//ошибка
//console.log(52n +4);

console.log(52n / 4n);