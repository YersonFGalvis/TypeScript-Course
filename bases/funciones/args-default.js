"use strict";
(() => {
    const fullName = (firstName, lastName, uper = false) => {
        if (uper) {
            return `${firstName} ${lastName || 'No lastName'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'No lastName'}`;
        }
    };
    let noName;
    const name = fullName('Tony', 'Stark', true);
    console.log(name);
})();
