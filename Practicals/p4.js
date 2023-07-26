let globalVar = "I am a global variable";

function factorialRecursive(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorialRecursive(num - 1);
  }
}

function outerFunction() {
  let outerVar = "I am a variable in outerFunction";

  function nestedFunction() {
    let nestedVar = "I am a variable in nestedFunction";

    console.log("Accessing global variable:", globalVar);
    console.log("Accessing variable in outerFunction:", outerVar);
    console.log("Accessing variable in nestedFunction:", nestedVar);
  }

  nestedFunction();
}

const numToFactorial = 5;
const result = factorialRecursive(numToFactorial);
console.log(`Factorial of ${numToFactorial} is:`, result);

outerFunction();
