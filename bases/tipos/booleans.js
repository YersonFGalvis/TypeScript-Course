"use strict";
(() => {
    let isBatman = false;
    let isSuperman = true;
    // en caso de resolverse, typescript sabe que boolean no deberia retornar un string
    // isSuperman = (isBatman)? true : 'false'; 
    isSuperman = (isBatman) ? true : false;
})();
