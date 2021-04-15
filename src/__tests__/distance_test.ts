import request from 'supertest';
import app from '../app';

describe('GET distance', () => {
    it('/GET distance for jerusalem and telaviv', async (done) => {
        const res = await request(app).get('/distance?source=telaviv&destination=jerusalem')
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('distance')
        done()
    });

    it('/GET error source is missing', async (done) => {
        const res = await request(app).get('/distance?destination=jerusalem')
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty('errors')
        done()
    });

    it('/GET error destination is missing', async (done) => {
        const res = await request(app).get('/distance?source=jerusalem')
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty('errors')
        done()
    });

    it('/GET error missing one or more information', async (done) => {
        const res = await request(app).get('/distance?source=jerusalem&destination')
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty('error')
        done()
    });

    it('/POST add distance for test and test 2', async (done) => {
        const res = await request(app).post('/distance')
            .send({
                "source": "test", "destination": "test2", "distance": 79
            })
        expect(res.status).toBe(201);
        done()
    });

    it('/POST get error distance is missing', async (done) => {
        const res = await request(app).post('/distance')
            .send({
                "source": "test", "destination": "test2"
            })
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty('errors')
        done()
    });
});
