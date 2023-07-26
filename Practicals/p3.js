let x = 10;
x = 20;
console.log(x);

const PI = 3.14;

const add = (a, b) => a + b;
console.log(add(5, 10));

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
  console.log(fruit);
}

const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
console.log(map.get("key1"));

const set = new Set([1, 2, 3, 3, 4, 5]);
console.log(set);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const john = new Person("John", 30);
john.greet();

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
};

fetchData().then((data) => {
  console.log(data);
});

const sym1 = Symbol("symbol1");
const sym2 = Symbol("symbol2");
console.log(sym1 === sym2);

const greet = (name = "Guest") => {
  console.log(`Hello, ${name}!`);
};

greet();
greet("John");

const sum = (...numbers) => {
  return numbers.reduce((acc, num) => acc + num, 0);
};

console.log(sum(1, 2, 3, 4, 5));
