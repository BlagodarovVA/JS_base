'use strict';

//fibo
function fib(num) {
    let result = '';
    let a = 0;
    let b = 1;
    let c;
<<<<<<< HEAD
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
=======
    for (let i = 0; i < num + 1; i++) {
        c = a + b;
        result += a;
        //result += b;
        //result += c;
        a = b;
        b = c;
        result += ' ';
>>>>>>> 4fa9f812247e78dd69c1d775591f6a2ee0de419b
    }

return result;
}
<<<<<<< HEAD
console.log(fib(8));
=======
console.log(fib(7));
>>>>>>> 4fa9f812247e78dd69c1d775591f6a2ee0de419b
