var expect = require('chai').expect;
var http =  require('../index');
var nock = require('nock');

describe('DELETE http request', function () {
    before(function () {
        nock('http://localhost:3000').delete('/delete').reply(200, 'OK');
    });

    it('should make a normal delete request', async function () {
        var result = await http.delete('http://localhost:3000/delete');
        expect(result.data).to.equal('OK');
    });
});