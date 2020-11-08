var expect = require('chai').expect;
var http = require('../index');
var nock = require('nock');

describe('PATCH http method', function () {
    before(function () {
        nock('http://localhost:3000').patch('/patch').reply(200, 'PATCH')
    });

    it('should make a normal PATCH request', async function () {
        var result = await http.patch('http://localhost:3000/patch', {
            contentType: 'application/json',
            data: {
                method: 'PATCH'
            }
        });
        expect(result.data).to.equal('PATCH');
    });
});