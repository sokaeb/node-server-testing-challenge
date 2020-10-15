const supertest = require('supertest');
const server = require('../api/server');
const { add, remove } = require('./students-model');
const db = require('../data/db-config');

describe('students-router.js', () => {
    describe('GET /', () => {
        it('should return 200 OK', () => {
            return supertest(server)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });
    });

    describe('POST /wizards', () => {
        // clearing the tables before test is being run
        beforeEach( async () => { 
            await db("students").truncate();
          });
        it('should return data with new wizard', async () => {
            const cedric = await supertest(server)
            .post('/wizards')
            .send({
                name: "Cedric Diggory",
                house: "Hufflepuff"
            });
            expect(cedric.body.data.name).toBe("Cedric Diggory")

            const ginny = await supertest(server)
            .post('/wizards')
            .send({
                name: "Ginny Weasley",
                house: "Griffindor"
            });
            expect(ginny.body.data.name).toBe("Ginny Weasley")
        });
    });


});