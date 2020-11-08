const http = require('../index');
const expect = require('chai').expect;
const nock = require('nock');

describe('GET http method', function () {

    before(function () {
        nock('http://localhost:3000').get('/plaintext').reply(200, 'Hello world');
        nock('http://localhost:3000').get('/json').reply(200, {
            message: 'Hello world'
        });
    });

    it('should get plaintext response', async function () {
        var result = await http.get('http://localhost:3000/plaintext');
        expect(result.data).to.equal('Hello world');
    });

    it('should get json response', async function () {
        var result = await http.get('http://localhost:3000/json');
        expect(result.data).to.eql({ message: 'Hello world' });
    });
});