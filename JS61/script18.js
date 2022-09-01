"use strict";

//проверить, что в строке есть каждая буква алфавита

function isPangram(string) {
    let atrAngl1 = 'abcdefghijklmnopqrstuvwxyz';
    let lengAngl = atrAngl1.length;
    console.log(lengAngl);

    let str1 = string.replace(/ /g, '');
    str1.toLowerCase();
    console.log('str1: ' + str1);
    let res = true;

    for (let i = 0; i < lengAngl; i++) {
        if (str1.includes(atrAngl1[i]) == false) {
            res = false;
            console.log(atrAngl1[i]);
            console.log(res);
            return res;
        } 

    }
    return res;
}

isPangram('Hello world');