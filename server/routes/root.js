const path = require('path');

module.exports = (_, res, fs) => {
  res.setHeader('Content-Type', 'text/html');
  return res.end(fs.readFileSync(path.join(__dirname, './../../client/index.html')));
};
