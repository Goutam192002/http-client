var http = require('http');
var Response = require('./response');
var RequestOptions = require('./requestOptions');

/**
 * @method
 * Abstract method for making request using node http.
 * @param {string} method - Could be GET, POST, PUT, PATCH, DELETE.
 * @param {string} url - URL pointing to endpoint.
 * @param {{data: (Object | buffer), auth: string, headers: Object, contentType: string} } extra - Object containing extra properties.
 * @returns {Promise<Response>}
 */
module.exports = function (method, url, extra) {
    return new Promise(function (resolve, reject) {
        var requestOptions = new RequestOptions(extra);
        var parsedUrl = new URL(url);
        var options = {
            auth: requestOptions.auth,
            headers: requestOptions.headers,
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
                var res = new Response(response.statusCode, response.statusMessage, response.headers, data);
                if (res.statusCode < 400) resolve(res);
                reject(res);
            })
        }
        var req = http.request(options, callback);
        req.write(requestOptions.data);
        req.end();
    })
}