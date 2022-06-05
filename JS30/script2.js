'use strict';

//task FooBar

let arr = [];
let str = '';
for (let i = 0; i < 101; i++) {
    if (i !== 0 && i % 3 == 0 && i % 5 == 0) {
        arr[i] = 'FooBar';
        str += 'FooBar ';
    } else if (i !== 0 && i % 3 == 0 && i % 5 !== 0) {
        arr[i] = 'Foo';
        str += 'Foo ';
    } else if (i !== 0 && i % 3 !== 0 && i % 5 == 0) {
        arr[i] = 'Bar';
        str += 'Bar ';
    } else {
        arr[i] = i;
        str += i + ' ';
    }
    
}
console.log(arr);
console.log(str);
