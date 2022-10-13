"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    let noName;
    const name = fullName('Tony', true);
    console.log(name);
})();
