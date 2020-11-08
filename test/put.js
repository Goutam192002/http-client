var expect = require('chai').expect;
var http = require('../index');
var nock = require('nock');

describe('PUT http method', function () {
    before(function () {
       nock('http://localhost:3000').put('/put', {
           method: "PUT"
       }).reply(200, "PUT");
    });

    it('should make a normal put request with correct content type', async function () {
        var result = await http.put('http://localhost:3000/put', {
            contentType: 'application/json',
            data: {
                method: 'PUT'
            }
        });
        expect(result.data).to.equal('PUT');
    });
});