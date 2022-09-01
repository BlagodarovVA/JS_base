"use strict";

//1 - 9
//2 - 90 - 180
//3 - 190...

function amountOfPages(summary){
    let res = 0;
    if (summary < 10) {
        res = summary;
        console.log(res);
        return res;
    } else if (summary > 9 && summary < 190) {
        res  = ((summary - 9)/2) + 9;
        console.log(res);
        return res;      
    } else if (summary > 189) {
        res = ((summary - 189)/3) + 99;
        console.log(res);
        return res;        
    }

}


amountOfPages(1095);