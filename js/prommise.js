let countValue = new Promise((resolve, reject) => {
  if (true) {
    resolve("There is a count value.");
  } else {
    reject("There is no count value.");
  }
});

console.log(countValue);
