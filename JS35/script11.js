'use strict';

// вывод элементов массива в строку, если не пустой
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let familyRes = '';
    if (family.length === 0) {
        familyRes = 'Семья пуста';
    } else {
        familyRes = 'Семья состоит из: ';
        for (let i in arr) {
            familyRes += `${arr[i]} `;
        }
    }
    return familyRes;
}
console.log(showFamily(family));



//вывод массива построчно в нижнем регистре
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].toLowerCase());
    }
}
standardizeStrings(favoriteCities);
