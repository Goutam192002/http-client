var http = require('http');

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
            var res = {};

            // Can we use inheritance here?
            res.statusCode = response.statusCode;
            res.statusMessage = response.statusMessage;
            res.headers = response.headers;

            var str = '';

            response.on('data', function (chunk) {
                str += chunk;
            });

            response.on('end', function () {
                res.data = contentType.split(';')[0] === 'application/json' ? JSON.parse(str): str;
                if (res.statusCode < 400) resolve(res);
                reject(res);
            })
        }
        var req = http.request(options, callback);
        req.write(data);
        req.end();
    })
}