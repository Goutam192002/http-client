var nodeHttp = require('./adapters/node_http');
var browserRequest = require('./adapters/XMLHttpRequest');
var methods = require('./methods');

module.exports = Client;

/**
 * Represents the HTTP Client.
 * @constructor
 */
function Client() {
    // Detect environment
    if (global.window) {
        this._environment = 'browser';
        this._adapter = browserRequest;
    } else {
        this._environment = 'node';
        this._adapter = nodeHttp;
    }
}

/**
 * Method to make GET Requests
 * @param { string } url - URL pointing to the endpoint
 * @param { {data: (Object | buffer), auth: string, headers: Object, contentType: string} } extra - extra options for making requests
 * @returns {Promise<Response>}
 */
Client.prototype.get = function (url, extra) {
    return this._adapter(methods.GET, url, extra);
};

/**
 * Method to make POST Requests
 * @param {string} url - URL pointing to the endpoint
 * @param {{data: (Object | buffer), auth: string, headers: Object, contentType: string}} extra - extra options for making requests
 * @returns {Promise<Response>}
 */
Client.prototype.post = function (url, extra) {
    return this._adapter(methods.POST, url, extra)
};

/**
 * Method to make PUT Requests
 * @param {string} url - URL pointing to the endpoint
 * @param {{data: (Object | buffer), auth: string, headers: Object, contentType: string}} extra - extra options for making requests
 * @returns {Promise<Response>}
 */
Client.prototype.put = function (url, extra) {
    return this._adapter(methods.PUT, url, extra);
};

/**
 * Method to make PATCH Requests
 * @param {string} url - URL of the endpoint
 * @param {{data: (Object | buffer), auth: string, headers: Object, contentType: string}} extra - Extra options
 * @returns {Promise<Response>}
 */
Client.prototype.patch = function (url, extra) {
    return this._adapter(methods.PATCH, url, extra);
};

/**
 * Method to make DELETE Requests
 * @param {string} url - URL of the endpoint
 * @param {{data: (Object | buffer), auth: string, headers: Object, contentType: string}} extra - Extra options
 * @returns {Promise<Response>}
 */
Client.prototype.delete = function (url, extra) {
    return this._adapter(methods.DELETE, url, extra);
};
