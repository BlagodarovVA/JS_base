'use strict';

//task 1
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
//console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i]; 
}
console.log(result);


//task 2
const data = [5, 10, 'Shopping', 20, 'Homework'];
let lenData = data.length;
for (let i = 0; i < data.length; i++) {
    if (typeof(data[i]) == typeof(1)) {
        data[i] = data[i] * 2;
    }
    if (typeof(data[i]) == typeof('str'))  {
        data[i] = data[i] +" - done";
    }
}
console.log(data);


//task 3
const data1 = [5, 10, 'Shopping', 20, 'Homework'];
let lenData1 = data1.length;
const result1 = [];
for (let i = 0; i < lenData1; i++) {
    result1[i] = data1[lenData1 - i - 1];
}
console.log(result1);

