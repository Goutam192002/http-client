var expect = require('chai').expect;
var http = require('../index');
var Client = require('../lib/client');


describe('init http client object', function () {
    it('should match instance types', function () {
        var objectTypesMatch = http instanceof Client;
        expect(objectTypesMatch).to.equal(true);
    });
});