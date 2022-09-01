"use strict";

const p = document.querySelectorAll('p');
console.log(p);

//добавляем тег скрипта в html

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;       //чтобы не был асинхронным
    document.body.append(script);
}

loadScript("script1.js");
loadScript("script2.js");
