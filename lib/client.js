const http = require('http');

module.exports = Client;

function Client() {
}

Client.prototype.get = function (url, extra) {
    extra = extra || {};
    return new Promise((resolve, reject) => {
        var parsedUrl = new URL(url);
        var options = {
            auth: extra.auth,
            headers: extra.headers,
            host: parsedUrl.hostname,
            path: parsedUrl.pathname+parsedUrl.searchParams,
            port: parsedUrl.port,
            method: 'GET'
        }, callback;
        callback = function (response) {
            var contentType = response.headers['content-type'] || 'text/plain';
            var res = {};

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
        http.request(options, callback).end();
    })
};

Client.prototype.post = function () {};
Client.prototype.put = function () {};
Client.prototype.patch = function () {};
Client.prototype.delete = function () {};
