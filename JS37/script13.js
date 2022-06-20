'use strict';

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};


function isBudgetEnough(data) {
    let countShop = 0;
    let area = 0;
    let vol = 0;
    let sum = 0;

    for (let shops in data) {
        countShop++;
    }

    for (let i = 0; i <countShop; i++ ) {
        area += data.shops[i].width * data.shops[i].length;
    }

    vol = area * shoppingMallData.height;
    sum = vol * shoppingMallData.moneyPer1m3;

    if (sum <= shoppingMallData.budget) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }

}

isBudgetEnough(shoppingMallData);