'use strict';

const usdCurr = 2.6;
const eurCurr = 2.8;
const discount = 0.9;


function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);


function test() {
    for (let i = 0; i <5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('done');
}

test();


function doNothing() {};
console.log(doNothing() === undefined);

