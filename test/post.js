var expect = require('chai').expect;
var http = require('../index');
var fs = require('fs');
var nock = require('nock');

describe('POST http method', function () {
    before(function () {
        nock('http://localhost:3000').post('/post', {
            name: 'Goutam'
        }).reply(200, 'Goutam');
    });

    it('should make a normal post request with correct content type', async function () {
        var result = await http.post('http://localhost:3000/post', {
            contentType: 'application/json',
            data: {
                name: 'Goutam'
            }
        });
        expect(result.data).to.equal('Goutam');
    });
});