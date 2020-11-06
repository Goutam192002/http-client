const http = require('../index');
const expect = require('chai').expect;

describe('GET http method', function () {

    it('should get response from google.com', async function () {
        var result = await http.get('https://www.google.com/');
        expect(result.data);
    });

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
    });

    it('should get response with basic authenticaton', async function () {
        var result = await http.get('http://localhost:3000/protected-basic-auth/hi', {
            auth: 'user:password'
        });
        expect(result.data).to.equal('hi');
    });

    it('should get response with auth headers', async function () {
        var result = await http.get('http://localhost:3000/protected-auth/hi', {
            headers: {
                authorization: `Bearer someverylongtoken`
            }
        });
        expect(result.data).to.equal('hi');
    });
});