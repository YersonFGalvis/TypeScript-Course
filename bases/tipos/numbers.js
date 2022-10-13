"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    //esto no marca errores porque number devuelve un numero, en este caso devuelve un Nan y Nan se considera un Numero
    avengers = Number('55A');
    console.log({ avengers });
})();
