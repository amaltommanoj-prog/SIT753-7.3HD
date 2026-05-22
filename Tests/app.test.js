const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
    it('should return app running message', async () => {

        const res = await request(app).get('/');

        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('SIT753 DevOps Pipeline Running');

    });
});