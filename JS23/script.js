'use strict';
//23
for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 10; j < 13; j++) {
        console.log(j);
    }
}

//*
//**
//***
//****
//*****
//******

let result = '';
const leng = 7;
for (let i = 1; i < leng; i++) {
    for (let j = 0; j < i; j++) {
        result += "*";
    }
    result += '\n';
}
console.log(result);


first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) { 
                continue first;
            }
            console.log(`Third level: ${k}`);
        }
    }
}

//tasks 3
//task 1
for (let i = 5; i < 11; i++) {
    console.log(i);
}

//task 2
for (let i = 20; i > 9; i--) {
    if (i === 13) {
        break;
    }
    console.log(i);
}

//task 3
for (let i = 2; i < 11; i++) {
    if ( i % 2 === 0) {
        console.log(i);
    } 
}

//task 4
let k = 2;
while (k < 16) {
    if (k % 2 !== 0) {
        console.log(k);
    }    
    k++;
}

// task 5
const arrayOfNumbers = [];
let i = 5;
let j = 0;
while (i < 11) {
    arrayOfNumbers[j] = i;
    i++;
    j++;
}
console.log(arrayOfNumbers);
