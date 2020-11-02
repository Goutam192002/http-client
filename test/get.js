const http = require('../index');
const expect = require('chai').expect;

describe('GET http method', () => {
    it('should get plaintext response', async function () {
        var result = await http.get('http://localhost:3000/plaintext');
        expect(result.data).to.equal('Hello world');
    });

    it('should get json response', async function () {
        var result = await http.get('http://localhost:3000/json');
        expect(result.data).to.eql({ message: 'Hello world' });
    });

    it('should get html response', async function () {
        var result = await http.get('http://localhost:3000/');
        expect(result.data);
    })
});