'use strict';

const arr = [12, 2, 31, 16, 8];

//сортирует как строки, не числа
/*arr.sort();
console.log(arr);*/

//сортирует как числа
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

/*arr[99] = 0;
console.log(arr.length);
console.log(arr);*/

//гибкий перебор массива
/*arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});*/

//удаление последнего элемента массива
//arr.pop();

//добавление элемента в конец массива
/*arr.push(10);
console.log(arr);*/

/*for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}*/

//перебор элементов массива for of
/*for (let znak of arr) {
    console.log(znak);
}*/


const str = prompt ("", "");
const products = str.split(", ");
//console.log(products);
products.sort();
console.log(products.join('; '));


