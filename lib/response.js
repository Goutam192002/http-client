/**
 * Response
 * @param {number} statusCode - status code returned by server.
 * @param {string} statusMessage - status message returned by server.
 * @param {object} headers - headers returned by server.
 * @param {object|string} data - response returned by server.
 * @constructor
 */
function Response(statusCode, statusMessage, headers, data) {
    this.statusCode = statusCode;
    this.statusMessage = statusMessage;
    this.headers = headers;
    this.data = data;
    return this;
}


module.exports = Response;