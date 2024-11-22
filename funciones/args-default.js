"use strict";
(() => {
    const fullName = (firstName, lastName, upter = false) => {
        if (upter === true) {
            return `${firstName} ${lastName || '*-*-*'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || '*-*-*'}`;
        }
    };
    const name = fullName('Tony', 'Strak', true);
    console.log({ name });
})();
