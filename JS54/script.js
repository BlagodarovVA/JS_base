"use strict";

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);

/*if (block) {                              //если блок не существует, то код продолжит выполняться,
    console.log(block.textContent);         //  а не станет на ошибке
}

console.log(block?.textContent);            // существует ли блок? если да, то получаем свойство
                                            // если нет, то получаем undefined и продолжаем
console.log(1 + 2);


block?.textContent = '123';                 // работает на чтение свойства, но при записи получим ошибку
*/

const userData = {
    name: 'Fedor',
    age: null,
    say: function() {
        console.log('Hello');
    }
};


userData.say();
userData.hey?.();                                              // ?. - проверка, что метод существует
/* if (userData && userData.skills && userData.skills.js) {    //чтобы не получить ошибку нужен конский if
    console.log(userData.skills.js);
}*/

console.log(userData?.skills?.js);           // ? проверит часть слева от себя. если она существует
                                            // то код пойдет дальше. если нет, то undefined









