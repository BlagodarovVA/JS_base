'use strict';

const usdCurr = 2.6;
const eurCurr = 2.8;


function convert(amount, curr) {
    console.log('Convert - ' + curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);
