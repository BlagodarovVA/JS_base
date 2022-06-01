'use strict';

//task1
function calculateVolumeAndArea(lengSide) {
    let result = '';
    if (isNaN(lengSide) === false && lengSide > 0 && Number.isInteger(lengSide) === true) {
        let vol = lengSide * lengSide * lengSide;
        let area = 6 * lengSide * lengSide;
        result = 'Объем куба: ' + vol + ', площадь всей поверхности: ' + area;
    } else {
        result = 'При вычислении произошла ошибка';
    }
return result;
}

console.log(calculateVolumeAndArea(5));


//task2
function getCoupeNumber(placeNum) {
    let coupeNum = '';
    if (isNaN(placeNum) === false && placeNum > 0 && placeNum < 37 && Number.isInteger(placeNum) === true) {
        coupeNum = Math.ceil(placeNum/4);
    } else if (isNaN(placeNum) === true || Number.isInteger(placeNum) === false || placeNum < 0) {
        coupeNum = 'Ошибка. Проверьте правильность введенного номера места';
    } else if (placeNum === 0 || placeNum > 36) {
        coupeNum = 'Таких мест в вагоне не существует';
    }

return coupeNum;
}

console.log(getCoupeNumber(0));