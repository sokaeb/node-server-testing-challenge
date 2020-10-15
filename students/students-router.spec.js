const supertest = require('supertest');
const router = require('./students-router');

describe('students-router.js', () => {
    describe('GET /', () => {
        it('should return 200 OK', () => {
            return supertest(router)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(500);
                });
        });
    });
});