"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'No lastName'}`;
    };
    let noName;
    const name = fullName('Tony');
    console.log(name);
})();
