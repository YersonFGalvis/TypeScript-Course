"use strict";
var Validations;
(function (Validations) {
    Validations.ValidateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    Validations.ValidateDate = (myDate) => {
        return (isNaN(myDate.valueOf()))
            ? false
            : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.ValidateText('Yer'));
console.log(Validations.ValidateText('Yer'));
//# sourceMappingURL=main.js.map