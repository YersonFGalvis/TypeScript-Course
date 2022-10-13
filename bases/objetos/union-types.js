"use strict";
(() => {
    let myCustomVariable = 'Yerson';
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['No tiene']
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
