'use strict';

//fibo
function fib(num) {
    let result = '';
    let a = 0;
    let b = 1;
    let c;
    for (let i = 0; i < num + 1; i++) {
        c = a + b;
        result += a;
        //result += b;
        //result += c;
        a = b;
        b = c;
        result += ' ';
    }

return result;
}
console.log(fib(7));