const expect = require('chai').expect;
const http = require('../index');

describe('POST http method', function () {
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