function fetchAPI(callback) {
  setTimeout(() => {
    const data = {
      test: "This is a test data",
    };
    callback(data);
  }, 5000);
}

function getData(data) {
  console.log(data);
}

console.log("Fetch data");
fetchAPI(getData);
console.log("Fetched data");
