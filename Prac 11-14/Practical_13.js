function fetchAPI(flag) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (flag) {
        const data = {
          test: "This is a test data",
        };
        resolve(data);
      } else {
        reject(new Error("Error"));
      }
    }, 5000);
  });
}

fetchAPI(true)
  .then((data) => {
    console.log(data);
    console.log("Successful Fetch");
  })
  .catch((err) => {
    console.log(err.message);
  });

fetchAPI(false)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
    console.log("Unsuccessful Fetch");
  });
