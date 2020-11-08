var expect = require('chai').expect;
var http = require('../index');
var Client = require('../lib/client');


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
});