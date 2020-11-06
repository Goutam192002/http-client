/**
 *
 * @param {{data: (Object | buffer), auth: string, headers: Object, contentType: string}} options - Options passed
 * to http request
 * @constructor
 */
function RequestOptions(options) {
    options = options || {};
    this.auth = options.auth || '';
    this.data = options.data ? JSON.stringify(options.data) : '';
    this.headers = options.headers || {};
    this.headers['Content-Type'] =  options.contentType || 'application/json';
    this.headers['Content-Length'] = Buffer.byteLength(this.data);
    return this;
}

module.exports = RequestOptions;