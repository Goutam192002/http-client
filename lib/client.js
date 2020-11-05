const method = require('./method');
const methods = require('./methods');

module.exports = Client;

function Client() {
}

Client.prototype.get = function (url, extra) {
    return method(methods.GET, url, extra);
};

Client.prototype.post = function (url, extra) {
    return method(methods.POST, url, extra)
};

Client.prototype.put = function (url, extra) {
    return method(methods.PUT, url, extra);
};

Client.prototype.patch = function (url, extra) {
    return method(methods.PATCH, url, extra);
};

Client.prototype.delete = function (url, extra) {
    return method(methods.DELETE, url, extra);
};
