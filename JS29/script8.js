'use strict';

//task1
function getTimeFromMinutes(minutes) {
    let result = '';
    let i;
    if (isNaN(minutes) === true || minutes < 0 || Number.isInteger(minutes) === false) {
        result = 'Ошибка, проверьте данные';
    } else if (minutes >= 0 && minutes < 60) {
        result = 'Это 0 часов и ' + minutes + ' минут';
    } else if (minutes > 59) {
        for (i = 0; minutes > 59; i++) {
            minutes = minutes - 60;
        }
        if (i === 0 || i > 4) {
            result = 'Это ' + i + ' часов и ' + minutes + ' минут';
        } else if (i === 1) {
            result = 'Это ' + i + ' час и ' + minutes + ' минут';
        } else if (i > 1 && i < 5) {
            result = 'Это ' + i + ' часа и ' + minutes + ' минут';
        }
    }
return result;
}
console.log(getTimeFromMinutes(146));


//task 2
function findMaxNumber(a, b, c, d) {
    let result;
    if (isNaN(a) === true || isNaN(b) === true || isNaN(c) === true || isNaN(d) === true ||
    typeof(a) !== typeof(1) || typeof(b) !== typeof(1) || typeof(c) !== typeof(1) ||
    typeof(d) !== typeof(1)) {
        result = 0;
    } else {
        result = Math.max(a, b, c, d);
    }

return result;
}
console.log(findMaxNumber(-33, -9.25, 20.5, 34));
