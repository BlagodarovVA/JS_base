"use strict";

/*
let id = Symbol("id");  

const obj = {
    'name': 'Test',                  //name строка, поэтому можно в ковычках
    [id]: 1,                        // ссылка
    getId: function() {             // метод возвращает на ружу id
        return this[id];
    }
};*/

/*let id = Symbol("id");              //переменная с символом. можно с пустыми кавычками
obj[id] = 1;                        //объекту назначаем новое свойство


console.log(obj[id]);*/

//console.log(obj.getId());
//console.log(Object.getOwnPropertySymbols(obj));     //ссылка на символ
//console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);     //значение символа

//for (let value in obj) console.log(value);      //не выводит символ


// пример
const myAwesomeDb = {
    movies: [],
    actors: [],
    [Symbol("id")]: 123         //id не будет перезаписан
};

// сторонний код

myAwesomeDb.id = '1246547';     //перезапись id, чего не должно быть
console.log(myAwesomeDb["id"]);
console.log(myAwesomeDb);