const server = require('./server');
const request = require('supertest');

describe('Server file', () => {
  test('should use the right environment setting', () => {
    expect(process.env.DB_ENV).toBe('testing');
  })
  
  describe("Main '/api/' endpoint works", () => {
    test('should return 200 OK using supertest', () => {
      request(server).get('/')
      .expect(200);
    })

    test('should return the right header', () => {
      request(server).get('/')
        .expect('Content-Length', '14');
    })
  })
})