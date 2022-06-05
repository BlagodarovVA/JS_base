'use strict';

function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();


function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

//2 аргумент - анонимная функция
learnJS('JavaScript', function() {
    console.log('Я прошел этот урок');
});