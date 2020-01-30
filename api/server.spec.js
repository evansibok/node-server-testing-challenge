const server = require('./server');
const request = require('supertest');

describe('Server file', () => {
  test('should use the right environment setting', () => {
    expect(process.env.DB_ENV).toBe('testing');
  })
  
})