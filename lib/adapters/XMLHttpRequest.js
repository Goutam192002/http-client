var RequestOptions = require("../requestOptions");
var Response = require("../response");

/**
 * @method
 * Abstract method for making request in browser environment using XMLHttpRequest.
 * @param {string} method - Could be GET, POST, PUT, PATCH, DELETE.
 * @param {string} url - URL pointing to endpoint.
 * @param {{data: (Object | buffer), auth: string, headers: Object, contentType: string} } extra - Object containing extra properties.
 * @returns {Promise<Response>}
 */
module.exports =  (method, url, extra) => {
    extra = extra || {};
    return new Promise((resolve, reject) => {
        var requestOptions = new RequestOptions(extra);
        var http = new XMLHttpRequest();
        http.onreadystatechange = function () {
            if (this.readyState === 4) {
                var response = new Response(this.status, this.statusText, {}, JSON.parse(this.response));
                if (response.statusCode < 400) {
                    resolve(response);
                } else {
                    reject(response);
                }
            }
        };
        http.open(method, url);
        var headerKeys = Object.keys(requestOptions.headers);
        for (var header of headerKeys) {
            http.setRequestHeader(header, headerKeys[header]);
        }
        if (requestOptions.auth) {
            http.setRequestHeader('Authorization', `Basic ${Buffer.from(requestOptions.auth).toString('base64')}`);
        }
        if (extra.data) {
            http.send(extra.data);
        } else {
            http.send();
        }
    });
};
