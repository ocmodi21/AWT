Array.prototype.customMethod = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i] + 1;
  }
};

const arr = [10, 20, 30, 40];
arr.customMethod();

console.log(arr);

String.prototype.customMethod = function () {
  return this.toUpperCase();
};

const str = "jatin mamtora";

const newstr = str.customMethod();

console.log(newstr);
