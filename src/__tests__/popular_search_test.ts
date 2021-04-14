import request from 'supertest';
import app from '../app';

describe('GET popular search', () => {
    it('/GET - should return popular search', async (done) => {
        const res = await request(app).get('/popularSearch')
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('source')
        expect(res.body).toHaveProperty('destination')
        expect(res.body).toHaveProperty('hits')
        done()
    });
});
