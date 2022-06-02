'use strict';

//fibo
function fib(num) {
    let result = '';
    let a;
    let b;
    let c;
    for (let i = 0; i < num + 1; i++) {
        a = 0;
        b = 1;
        c = a + b;
        result += a;
        result += b;
        result += c;
        a = b;
        b = c;
    }

return result;
}
console.log(fib(5));