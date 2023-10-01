const fs = require("fs");

function readFile(filename, callback) {
  fs.readFile(filename, "utf-8", (err, data) => {
    callback(data);
  });
}

function showFileContent(data) {
  console.log(data);
}

const filename = "practicalFile.txt";

console.log("Read file");
readFile(filename, showFileContent);
console.log("Read file");
