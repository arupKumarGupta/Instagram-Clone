const request = require('supertest');
const app = require('../../src/app');
require('../seeds/users.seed');
describe('check user related routes', () => {
    // read
    it('should fetch users',(done) => {
        request(app)
        .get('/api/user')
        .expect('Content-Type',/json/)
        .expect(200,done);
    });
    // create
    it('should create a user successfully', (done) => {
        request(app)
        .post('/api/user')
        .send({
            username: '1test',
            email: '1test@example.com',
            password: '1test',
        })
        .expect(200)
        .then(response => {
            expect(response.result.email).to.equal('1test@example.com');
            done();
        }).catch(err => done(err));
    });
    // TODO: update and delete 
});
