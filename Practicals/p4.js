let globalVar = "global variable";

function factorial_Recursive(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial_Recursive(n - 1);
  }
}

function outerFunction() {
  let outerVar = "variable in outer Function";

  function nestedFunction() {
    let nestedVar = "variable in nested Function";

    console.log("Accessing global variable:", globalVar);
    console.log("Accessing variable of outer Function:", outerVar);
    console.log("Accessing variable of nested Function:", nestedVar);
  }

  nestedFunction();
}

const num = 5;
const result = factorial_Recursive(num);
console.log(`Factorial of ${num} is:`, result);

outerFunction();
