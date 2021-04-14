import request from 'supertest';
import app from '../app';

describe('GET distance', () => {
    it('/GET distance for jerusalem and telaviv', async (done) => {
        const res = await request(app).get('/distance?source=telaviv&destination=jerusalem')
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('distance')
        done()
    });
});
