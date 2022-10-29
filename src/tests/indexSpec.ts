import { Request, response } from 'express';
import supertest from 'supertest';
import app from '../Main';
import sharp from 'sharp';
const request = supertest(app);

describe('Test endpoint ', async () => {
  it('get the api ', async () => {
    const response = await request.get('/route.ts/250/250/fjord.jpg');
    expect(response.status).toBe(200);
  });
});
