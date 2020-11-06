/**
 *
 * @param {{data: (Object | buffer), auth: string, headers: Object, contentType: string} | {}} options - Options passed
 * to http request
 * @constructor
 */
function RequestOptions(options) {
    options = options || {};
    this.auth = options.auth || '';
    this.data = typeof options.data === 'object' ? JSON.stringify(options.data) : options.data;
    this.headers = options.headers || {};
    this.headers['Content-Type'] =  options.contentType || 'application/octet-stream';
    this.headers['Content-Length'] = Buffer.byteLength(this.data);
    return this;
}

module.exports = RequestOptions;