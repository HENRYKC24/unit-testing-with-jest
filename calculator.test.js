// const { expect } = require('@jest/globals');
// const { describe } = require('yargs');
const Calulator = require('./calculator');
const calculate = new Calulator();
const { add, subtract, multiply, divide } = calculate;


describe('Addition test', () => {
  test('Add -1 to 10 and get 9', () => {
    expect(add(-1, 10)).toBe(9);
  })

  test('Add 0 to 0 and get 0', () => {
    expect(add(0, 0)).toBe(0);
  })

  test('Add 20 to -19 and get 1', () => {
    expect(add(20, -19)).toBe(1);
  })
});

describe('Subtraction test', () => {
  test('Remove -1 from -5 and get -6', () => {
    expect(subtract(-1, 5)).toBe(6);
  })

  test('Remove 11 from 90 and get 79', () => {
    expect(subtract(11, 90)).toBe(79);
  })

  test('Remove 11000 from 81000 and get 70000', () => {
    expect(subtract(11000, 81000)).toEqual(70000);
  })
})

describe('Multiplication test', () => {
  test('multiply 3 by 8 and get 24', () => {
    expect(multiply(3, 8)).toBe(24);
  })

  test('muyltiply 800 by 0', () => {
    expect(multiply(800, 0)).toBe(0);
  })

  test('Remove 11000 from 81000 and get 70000', () => {
    expect(multiply(10, 0.5)).toEqual(5);
  })
})

describe('Division test', () => {
  test('divide 10 by 2 and get 5', () => {
    expect(divide(10, 2)).toBe(5);
  })

  test('divide 99 by 1 and get 99', () => {
    expect(divide(99, 1)).toBe(99);
  })

  test('divide 22 by 4 and get 5.5', () => {
    expect(divide(22, 4)).toEqual(5.5);
  })
})