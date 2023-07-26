const numbersArray = [10, "20", { 1: "ja3" }, 40.5, true];

const arrayLength = numbersArray.length;
console.log("Length of the array:", arrayLength);

console.log("Element at index 2:", numbersArray[2]);
console.log("Element at index 4:", numbersArray[4]);

numbersArray.push({ 60: "Pandya" });
console.log("Array after push:", numbersArray);

numbersArray.pop();
console.log("Array after pop:", numbersArray);

numbersArray.shift();
console.log("Array after shift:", numbersArray);

numbersArray.unshift(5);
console.log("Array after unshift:", numbersArray);

console.log("Joined array elements:", numbersArray.join(", "));

delete numbersArray[2];
console.log("Array after delete:", numbersArray);

const newArray = numbersArray.concat([70, 80]);
console.log("Concatenated array:", newArray);

const flatArray = [
  [1, 10],
  [3, 10],
  [5, 10],
].flat();
console.log("Flat array:", flatArray);

const splicedArray = numbersArray.splice(1, 2, 25, 35);
console.log("Array after splice:", numbersArray);
console.log("Removed elements:", splicedArray);

const slicedArray = numbersArray.slice(1, 4);
console.log("Sliced array:", slicedArray);

const person = {
  name: "Om Modi",
  age: 20,
  gender: "Male",
  sem: 5,
};

function displayPersonDetails(person) {
  console.log("Name:", person.name);
  console.log("Age:", person.age);
  console.log("Gender:", person.gender);
}

displayPersonDetails(person);
