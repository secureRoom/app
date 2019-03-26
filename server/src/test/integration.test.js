const request = require('supertest');

const server = 'http://localhost:3000';

test('should pass integration tests', (done) => {
  request(server)
    .get('/')
    .expect(200)
    .expect(' Content-Type', /text\/html/)
    .end((err) => {
      if (err) throw done(err);
      done();
    });
});
