var expect = require('chai').expect;
var http =  require('../index');

describe('DELETE http request', () => {
    it('should make a normal delete request', async function () {
        var result = await http.delete('http://localhost:3000/delete');
        expect(result.data).to.equal('OK');
    });
});