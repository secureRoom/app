module.exports = (_, res, fs) => {
  res.setHeader('Content-Type', 'text/html');
  return res.end(fs.readFileSync(__dirname.concat('client/')));
};
