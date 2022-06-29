'use strict';

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

// 1
function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}
console.log(isOpen(restorantData.openNow));

// 2 - Преобразовать в числа строки и вырезать символ $ для сложения и сравнения
function isAverageLunchPriceTrue(fDish, sDish, average) {
    console.log(Number(fDish.price.slice(0, -1)) + Number(sDish.price.slice(0, -1)));

    if (Number(fDish.price.slice(0, -1)) + Number(sDish.price.slice(0, -1)) < Number(average.slice(0, -1))) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}
console.log(isAverageLunchPriceTrue(restorantData.menu[2], restorantData.menu[3], restorantData.averageLunchPrice));


// 3 сделать копию объекта и добавить элемент, не изменяя оригинал
function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = [{name: 'Mike', age: 32}, ...copy.waitors];
    console.log(copy);
    return copy;
}

transferWaitors(restorantData);
console.log('------------------------------');
console.log(restorantData);