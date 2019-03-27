const request = require('supertest');

const server = 'http://localhost:3000';

describe('should pass integration tests', () => {
  test('should serve html file on \'/\' endpoint', (done) => {
    request(server)
      .get('/')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end((err) => {
        if (err) throw done(err);
        done();
      });
  });
});
