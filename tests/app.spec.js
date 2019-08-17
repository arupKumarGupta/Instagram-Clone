const {expect} = require('chai');
const app = require('../src/app');
describe('Server', () => {
    it('tests that server is running',(done)=>{
        expect(app.port).to.equal(+process.env.PORT);
        done();
    });
});