var expect = require('chai').expect;
var http = require('../index');
var Client = require('../lib/client');
var nodeHttp = require('../lib/adapters/node_http');

describe('init http client object', function () {
    it('should match instance types', function () {
        var objectTypesMatch = http instanceof Client;
        expect(objectTypesMatch).to.equal(true);
        expect(typeof http.get).to.equal("function");
        expect(typeof http.post).to.equal("function");
        expect(typeof http.put).to.equal("function");
        expect(typeof http.patch).to.equal("function");
        expect(typeof http.delete).to.equal("function");
    });

    it('should be using node adapter', function () {
        expect(http._environment).to.equal("node");
        expect(http._adapter).to.equal(nodeHttp);
    });
});
