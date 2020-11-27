var RequestOptions = require("../requestOptions");
var Response = require("../response");

module.exports =  (method, url, extra) => {
    return new Promise((resolve, reject) => {
        var requestOptions = new RequestOptions(extra);
        var http = new XMLHttpRequest();
        var headerKeys = Object.keys(requestOptions.headers);
        for (var header in headerKeys) {
            http.setRequestHeader(header, headerKeys[header]);
        }
        if (requestOptions.auth) {
            http.setRequestHeader('Authorization', `Basic ${Buffer.from(requestOptions.auth).toString('base64')}`);
        }
        http.onreadystatechange = () => {
            if (this.readyState === 4) {
                var response = new Response(this.statusCode, this.statusMessage, this.getAllResponseHeaders(), this.response);
                if (response.statusCode < 400) {
                    resolve(response);
                } else {
                    reject(response);
                }
            }
        };
        http.open(method, url);
        http.send(extra.data);
    });
};
