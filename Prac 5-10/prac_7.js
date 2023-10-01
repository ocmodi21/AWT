class Calculator {
  addition(a, b) {
    return a + b;
  }

  subtraction(a, b) {
    return a - b;
  }

  multiplication(a, b) {
    return a * b;
  }

  division(a, b) {
    return a / b;
  }
}

module.exports = Calculator;

const Calculator = require("./calculator");

const mycalculator = new Calculator();

console.log(mycalculator.addition(100, 50));

console.log(mycalculator.subtraction(100, 50));

console.log(mycalculator.multiplication(100, 50));

console.log(mycalculator.division(100, 50));
