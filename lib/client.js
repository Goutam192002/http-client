const method = require('./method');
const methods = require('./methods');

module.exports = Client;

/**
 * Represents the HTTP Client.
 * @constructor
 */
function Client() {
}

/**
 * Method to make GET Requests
 * @param { string } url - URL pointing to the endpoint
 * @param { object } extra - extra options for making requests
 * @returns {Promise<unknown>}
 */
Client.prototype.get = function (url, extra) {
    return method(methods.GET, url, extra);
};

/**
 * Method to make POST Requests
 * @param {string} url - URL pointing to the endpoint
 * @param {object} extra - extra options for making requests
 * @returns {Promise<unknown>}
 */
Client.prototype.post = function (url, extra) {
    return method(methods.POST, url, extra)
};

/**
 * Method to make PUT Requests
 * @param {string} url - URL pointing to the endpoint
 * @param {object} extra - extra options for making requests
 * @returns {Promise<unknown>}
 */
Client.prototype.put = function (url, extra) {
    return method(methods.PUT, url, extra);
};

/**
 * Method to make PATCH Requests
 * @param {string} url - URL of the endpoint
 * @param {object} extra - Extra options
 * @returns {Promise<unknown>}
 */
Client.prototype.patch = function (url, extra) {
    return method(methods.PATCH, url, extra);
};

/**
 * Method to make DELETE Requests
 * @param {string} url - URL of the endpoint
 * @param {object} extra - Extra options
 * @returns {Promise<unknown>}
 */
Client.prototype.delete = function (url, extra) {
    return method(methods.DELETE, url, extra);
};
