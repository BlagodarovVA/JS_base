'use strict';

//fibo
function fib(num) {
    let result = '';
    let a = 0;
    let b = 1;
    let c;
    if (typeof(num) !== 'number' || num % 1 !== 0 || num <= 0) {
        return result;
    } else {
        for (let i = 0; i < num; i++) {
            c = a + b;
            result += a;
            a = b;
            b = c;
            if (i < num -1) {
                result += ' ';
            }
        }
    }

return result;
}
console.log(fib(8));