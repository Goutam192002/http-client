var http = require('http');
var methods = require('methods');
var Response = require('./response');

/**
 * @method
 * Abstract method for making request using node http.
 * @param {string} method - Could be GET, POST, PUT, PATCH, DELETE.
 * @param {string} url - URL pointing to endpoint.
 * @param {object} extra - Object containing extra properties.
 * @returns {Promise<Response>}
 */
module.exports = function (method, url, extra) {
    extra = extra || {};
    var data = extra.data ? JSON.stringify(extra.data) : '';
    extra.headers = extra.headers || {}
    extra.headers['Content-Type'] =  extra.contentType || 'application/json';
    extra.headers['Content-Length'] = Buffer.byteLength(data);

    return new Promise((resolve, reject) => {
        var parsedUrl = new URL(url);
        var options = {
            auth: extra.auth,
            headers: extra.headers,
            host: parsedUrl.hostname,
            path: parsedUrl.pathname + parsedUrl.searchParams,
            port: parsedUrl.port,
            method: method,
        }, callback;
        callback = function (response) {
            var contentType = response.headers['content-type'] || 'text/plain';
            var str = '';

            response.on('data', function (chunk) {
                str += chunk;
            });

            response.on('end', function () {
                var data = contentType.split(';')[0] === 'application/json' ? JSON.parse(str): str;
                var res = Response(response.statusCode, response.statusMessage, response.headers, data);
                if (res.statusCode < 400) resolve(res);
                reject(res);
            })
        }
        var req = http.request(options, callback);
        req.write(data);
        req.end();
    })
}