const root = require('../routes/root');

describe('index route', () => {
  const readFileSync = jest.fn();
  const fs = {
    readFileSync
  }
  const end = jest.fn();
  const setHeader = jest.fn();
  const res = {
    end,
    setHeader,
  };

  test('should call res.end() with Hello World!', () => {
    root({}, res, fs);
    expect(end.mock.calls).toHaveLength(1);
    expect(setHeader.mock.calls).toHaveLength(1);
    expect(setHeader.mock.calls[0][0]).toBe('Content-Type', /text\/html/);
  });
});
