'use strict';

//объект
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    //метод внутри объекта
    makeTest: function() {
        console.log(" metod makeTest");
    }
};

//options.makeTest();

//деструктуризация объекта
const {border, bg} = options.colors;
console.log(bg);


/*console.log(options.name);

delete options.name;
console.log(options);*/

//вывод свойств объекта
//подсчет свойств объекта
let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`|__Объект ${key} имеет свойство ${i} со значением ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
//не точный счетчик
console.log(counter);

console.log(Object.keys(options).length);


