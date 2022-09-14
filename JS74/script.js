'use strict';

const box = document.querySelector('.box');

let observer = new MutationObserver(mutationRecords => {    // слежение за изменением элемента
    console.log(mutationRecords);
});

observer.observe(box, {     // если элемент меняется, выполняем функцию
    childList: true
});

observer.disconnect();      // перестать следить