'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1990',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};
/*
for (const key of user) {
    console.log(user[key]);
}*/

const arr = ['b', 'a', 'c'];
Array.prototype.someMethod = function() {};

console.dir(arr);


for (const key of arr) {
    console.log(key);
}
console.log('-------------');

/*
const str = 'string';

for (const key in str) {
    console.log(str[key]);
}
*/


const salaries = {
    johan: 500,
    uasya: 1000,
    ganna: 5000,
    sayHello: function() {
        console.log('Hi-hi');
    }
};

salaries[Symbol.iterator] = function() {        //метод для перебора for of
    return {   
        current: this.johan,
        last: this.ganna,
                                                        //вернуть объект с методом next
        next() {                                
            if (this.current < this.last) {             //условие перебора по 500
                this.current = this.current + 500;      //увеличиваем
                return {done: false, value: this.current}   //цикл еще работает и возвращаем значение
            } else {
                return {done: true}                         //если цикл завершен
            }
        }
    }
}

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());                   //ручной метод вызова next

/*
for (let res of salaries) {
    console.log(res);
}*/

