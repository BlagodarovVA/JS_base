'use strict';

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Zaluppo'];

function sortStudentsByGroups(arr) {
    let group1 = [];
    let group2 = [];
    let group3 = [];
    let str4 = '';
    arr.sort();
    console.log(arr.length);

    for (let i = 0; i < 3; i++) {
        group1.push(arr[i]);
    }
    for (let i = 3; i < 6; i++) {
        group2.push(arr[i]);
    }
    for (let i = 6; i < 9; i++) {
        group3.push(arr[i]);
    }
    //console.log(group1, group2, group3);

    let res = [];
    //помещаем массивы в массив
    res.push(group1, group2, group3);
    console.log(res);

    if (arr.length == 9) {
        str4 = 'Оставшиеся студенты: -';
    } else if (arr.length > 9) {
        str4 = `Оставшиеся студенты: `;
        for (let i = 9; i < arr.length; i++) {
            str4 += `${arr[i]}`;
            if (i < arr.length - 1) {
                str4 += ', ';
            }
            
        }
    }
    res.push(str4);
    console.log(res);
return res;
}

sortStudentsByGroups(students);