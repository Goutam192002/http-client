"use strict";

function Http() {
}

Http.prototype = {
    get: () => {},
    post: () => {},
    put: () => {},
    patch: () => {},
    delete: () => {},
    options: () => {}
}

module.exports = (function () {
    return new Http();
}());