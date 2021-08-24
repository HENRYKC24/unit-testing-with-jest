class Calculator {
  add(...args) {
    return args.reduce((total, number) => total + number, 0);
  }

  divide(numerator, denominator) {
    return numerator/denominator;
  }

  subtract(a, b) {
    return b - a;
  }

  multiply(a, b) {
    return a * b;
  }
}

module.exports = Calculator;