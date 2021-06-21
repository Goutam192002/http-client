/**
 *
 * @param {{data: (Object | buffer), auth: string, headers: Object, contentType: string} | {}} options - Options passed
 * to http request
 * @constructor
 */
function RequestOptions(options) {
    options = options || {};
    this.auth = options.auth || '';
    this.headers = options.headers || {};
    this.data = typeof options.data === 'object' ? JSON.stringify(options.data) : options.data || '';
    this.headers['Content-Type'] =  options.contentType || 'application/octet-stream';
    if (this.data) {
        this.headers['Content-Length'] = Buffer.byteLength(this.data);
    }
    return this;
}

module.exports = RequestOptions;
