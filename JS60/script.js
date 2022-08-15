'use strict';

const arr = ['Alex', 'Anna', 'Oleg', 'Alex', 'Styapan'];

function unique(arr) {
    //return new Set(arr);
    return Array.from(new Set(arr));
}

console.log(unique(arr));

/*
const set = new Set(arr);               //отбор уникальных
set.add('Ivan')
    .add('Styapan');

console.log(set);
*/

//set.delete(value);  //удалить значение
//set.has(value);     //проверка на наличие
//set.clear();        //очистка
//set.size;           //размер набора

//for (let value of set) console.log(value);

/*
set.forEach((value, valueAgain, set) => {       //повторяется аргумент для совместимости
    console.log(value, valueAgain);
});

//вывод значений
console.log(set.values());
//аналогично
console.log(set.keys());
//
console.log(set.entries());
console.log('---------------------');
*/
