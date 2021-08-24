const capitalize = require('./capitalize');

test('Should capitalize the first letter of a given string', () => {
  expect(capitalize('MAN')).toBe('Man');
})
test('Should capitalize the first letter of a given string', () => {
  expect(capitalize('man')).toBe('Man');
})