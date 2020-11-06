const expect = require('chai').expect;
const http = require('../index');

describe('PUT http method', () => {
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