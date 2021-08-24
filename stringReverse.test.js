const stringReverse = require("./stringReverse")

test('Passing "move" returns "evom"', () => {
  expect(stringReverse("move")).toBe('evom');
})

test('Passing "" returns ""', () => {
  expect(stringReverse("")).toBe("");
})

test('Passing 5654 returns "5654"', () => {
  expect(stringReverse(5654)).toBe("4565");
})