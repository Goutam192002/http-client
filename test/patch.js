var expect = require('chai').expect;
var http = require('../index');

describe('PATCH http method', () => {
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