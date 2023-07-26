let a = 10;
a = 20;
console.log(a);

const PI = 3.14;

const add = (x, y) => x + y;
console.log(add(67, 10));

const arr1 = [19, 29, 39, 56, 79, 89];
const arr2 = [...arr1, 43, 53];
console.log(arr2);

const vegie = ["potato", "onion", "brinjal"];
for (const each of vegie) {
  console.log(each);
}

const mp = new Map();
mp.set("key1", "value1");
mp.set("key2", "value2");
console.log(mp.get("key1"));

const st = new Set([12, 22, 32, 23, 42, 52, 62, 72, 82]);
console.log(st);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} & I am ${this.age} years old.`);
  }
}

const userInfo = new Person("Om Modi", 20);
userInfo.greet();

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 5000);
  });
};

fetchData().then((data) => {
  console.log(data);
});

const sym1 = Symbol("foo");
const sym2 = Symbol("foo");
console.log(sym1 === sym2);

const greet = (name = "Guest") => {
  console.log(`Hello, ${name}!`);
};

greet();
greet("Om Modi");

const sum = (...numbers) => {
  return numbers.reduce((acc, num) => acc + num, 0);
};

console.log(sum(18, 82, 38, 49, 50));
