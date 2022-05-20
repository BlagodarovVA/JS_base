'use strict';

if (4) {
    console.log('Ok!');
} else {
    console.log('Error');
}


const num = 50;
if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok');
}


const num1 = 50;
//(num1 === 50) ? console.log ('Okay') : console.log ('Error');

switch (num1) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 51:
        console.log('Good Waldemar!');
        break;
    default: //если не один кейз не подошёл
        console.log('default');
        break;
}