'use strict';

//факториал - чило умноженное на себя минус 1 и так до единицы
//Рекурсия

function factorial(n) {
    if (typeof(n) != 'number' || !Number.isInteger(n)) {
        return 'Введите целое число';
    } else if (n <= 0) {
        return 1;
    //умнажаем число на обращение к этой же функции
    } else if (n >= 1)  {
        return n * factorial(n - 1);
    }
}
console.log(factorial(3));
