const app = require('http').createServer(handler);
const io = require('socket.io')(app);
const fs = require('fs');
const root = require('./routes/root');

const HOSTNAME = '127.0.0.1';
const PORT = 3000;

function handler(req, res) {
  if (req.method === 'GET') {
    if (req.url === '/') {
      root(req, res, fs);
    }
  }
}

io.on('connection', socket => {
  console.log('a user connected');
});

app.listen(PORT, HOSTNAME, () => console.log(`Server is running on port ${PORT.toString()}!`));
