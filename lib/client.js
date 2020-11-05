const method = require('./method');

module.exports = Client;

function Client() {
}

Client.prototype.get = function (url, extra) {
    return method('GET', url, extra);
};

Client.prototype.post = function () {};
Client.prototype.put = function () {};
Client.prototype.patch = function () {};
Client.prototype.delete = function () {};
