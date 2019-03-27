const io = require('socket.io-client');

let socket;
describe('Suite of unit tests', () => {
  beforeEach((done) => {
    // Setup
    socket = io.connect('http://localhost:3000', {
      'reconnection delay': 0,
      'reopen delay': 0,
      'force new connection': true,
      transports: ['websocket'],
    });
    socket.on('connect', () => {
      console.log('worked...');
      done();
    });
    socket.on('disconnect', () => {
      console.log('disconnected...');
    });
  });

  /**
   * Run after each test
   */
  afterEach((done) => {
    // Cleanup
    if (socket.connected) {
      console.log('disconnecting...');
      socket.disconnect();
    } else {
      console.log('no connection to break...');
    }
    done();
  });

  describe('dummy', () => {
    test('dummyTest', () => {
      expect(true).toBe(true);
    });
  });
});
