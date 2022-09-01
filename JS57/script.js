"use strict";

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1990',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

// флаги:
// writable
// enumerable
// configurable

Object.defineProperty(user, 'birthday', {writable: false});         //запрещена запись свойства
Object.defineProperty(user, 'gender', {value: 'male'});         // свойство создаётся со всеми флагами false

console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));     //просмотр флагов
console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));           // свойство сделано, как нередактируемое


Object.defineProperty(user, 'showMyPublicData', {enumerable: false});   //метод showMyPublicData не увидим в циклах

for (let key in user) console.log(key);            


//редактирование нескльких свойств
Object.defineProperties(user, {
    name: {writable: false},
    surname: {writable: false}
});

