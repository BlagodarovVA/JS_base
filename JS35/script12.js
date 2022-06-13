'use strict';

//1 - Вывести строку в обратном порядке
const someString = 'Я твой дом труба шатал';

function reverse(str) {
    let newStr = '';
    if (typeof(str) === 'string') {
        //console.log(str.length);
        //console.log(str[0]);
        for (let i = str.length - 1; i >= 0; i--) {
            newStr += str[i];
        }
    } else { 
        newStr = 'Ошибка!';
    }
return newStr;
}
console.log(reverse(someString));



//2 - вывод доступных валют из массивов
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
//конкатенация массивов
const allCur = [...baseCurrencies, ...additionalCurrencies];
//const allCur = [];
//console.log(allCur.length);

function availableCurr(arr, missingCurr) {
    let resultCurr = '';
    if (arr.length === 0) {
        resultCurr = 'Нет доступных валют';
    } else if (arr.length !== 0 && missingCurr === '') {
        resultCurr = `Доступные валюты:\n`;
        for (let i in arr) {
            resultCurr += `${arr[i]}\n`;
        }
    } else if (arr.length !== 0 && missingCurr !== '') {
        resultCurr = `Доступные валюты:\n`;
        for (let i in arr) {
            if (arr[i] !== missingCurr) {
                resultCurr += `${arr[i]}\n`;
            }  
        }
    }
return resultCurr;
}
console.log(availableCurr(allCur, 'UAH'));



//2 - оптимальное решение
const baseCurrencies1 = ['USD', 'EUR'];
const additionalCurrencies1 = ['UAH', 'RUB', 'CNY'];
const allCur1 = [...baseCurrencies1, ...additionalCurrencies1];

function availableCurr(arr, missingCurr) {
    let str = '';
    //Если массив пустой, то 'Нет доступных валют', иначе 'Доступные валюты:\n'
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';
    //каждый элемент массива, если он не равен missingCurr, добавить в строку вывода
    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}
console.log(availableCurr(allCur1, 'UAH'));