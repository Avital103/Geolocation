import request from 'supertest';
import app from '../app';

describe('GET hello', () => {
    it('/GET - should return code 200', async (done) => {
        const res = await request(app).get('/hello')
        expect(res.status).toBe(200);
        done()
    });
});
