/**
 *
 * @param {object|buffer} data - Data to be sent in the body of the request
 * @param {string} auth - username:password string for basic authentication
 * @param {object} headers - Headers to be sent to server
 * @param {string} contentType - Content Type of data
 * @constructor
 */
function RequestOptions({ data, auth, headers, contentType }) {
    this.auth = auth || '';
    this.data = data ? JSON.stringify(data) : '';
    this.headers = headers || {};
    this.headers['Content-Type'] =  contentType || 'application/json';
    this.headers['Content-Length'] = Buffer.byteLength(this.data);
    return this;
}

module.exports = RequestOptions;