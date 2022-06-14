'use strict';

let str = "some";
let strObj = new String(str);

//console.log(typeof(str));
//console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

/*const john = {
    health: 100
};*/

//создаем новый объект, который будет прототипно наследоваться от солдата
const john = Object.create(soldier);

//устаревший формат установки прототипа
//john.__proto__ = soldier;

//console.log(john.armor);

//новый формат установки прототипа
//Object.setPrototypeOf(john, soldier);

//метод в прототипе
john.sayHello();

