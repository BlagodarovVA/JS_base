'use strict';

//t1
let hello = 'Привет, ';
function sayHello(name) {
    let res = hello + name + '!';
    return res;
}

console.log(sayHello('Антон'));

//t2
const arr = [];
function returnNeighboringNumbers(number) {
    arr[0] = number - 1;
    arr[1] = number;
    arr[2] = number + 1;
    return arr;
}
console.log(returnNeighboringNumbers(6));

//t3
function getMathResult(baseNum, repeatNum) {
    let resStr = '';
    let newNum = baseNum;
    for (let i = 0; i < repeatNum; i++){
        resStr += newNum;
        if (repeatNum > 0 && typeof(repeatNum) === typeof(1)) {
            if (i < repeatNum - 1) {
                resStr += '---';
            }
            newNum += baseNum;
        }
        else {
            break;
        }
    }
    if (repeatNum <= 0 || typeof(repeatNum) !== typeof(1)) {
        resStr = baseNum;
    }
    return resStr;   
}

console.log(getMathResult(10, '7'));


