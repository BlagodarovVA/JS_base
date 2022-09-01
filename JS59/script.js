"use strict";

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1990',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

const userMap = new Map(Object.entries(user));      //из объекта массив с массивами

const newUserObj = Object.fromEntries(userMap);     //из массивоподобного объекта создаем объект
console.log(newUserObj);


const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const budget = [5000, 15000, 25000];

const map = new Map([
    [{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});

console.log(map);

/*
map.set(shops[0], 5000)
    .set(shops[1], 15000)
    .set(shops[2], 25000);*/

//console.log(map.get(shops[0]));     //получить значение
//console.log(map.has(shops[0]));     //проверка на наличие

//map.delete(key);
//map.clear();
//map. size;
//map.keys();

/*
//вывод всех товаров
const goods = [];
for (let shop of map.keys()) {
    goods.push(Object.keys(shop)[0]);
    console.log(shop);
}
console.log(goods);
*/

//вывод значений
for (let price of map.values()) {
    console.log(price);
}

/*
//вывод нескольких параметров
for (let [shop, price] of map.entries()) {
    console.log(price, shop);
}*/

/*перебор аналогичный предыдущему
map.forEach((value, key, map) => {
    console.log(key, value);
});
*/
