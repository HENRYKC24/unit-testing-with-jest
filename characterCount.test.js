const characterCount = require('./characterCount');

test('Returns the number of characters in a string', () => {
  expect(characterCount('manpower')).toBe(8);
});

test('Returns the number of characters in a string', () => {
  expect(characterCount('jjil')).toBe(4);
});

test('Can not be less than 1 or more than 10', () => {
  expect(characterCount('')).toThrowError('This input is invalid');
});