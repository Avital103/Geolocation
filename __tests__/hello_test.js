let request = require('supertest');
const app = require('../app');

describe('GET hello', () => {
    it('/GET - should return code 200', async (done) => {
        const res = await request(app).get('/hello')
        expect(res.status).toBe(200);
        done()
    });
});
