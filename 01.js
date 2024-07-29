function sumAsync(a, b, callBack) {
  setTimeout(() => {
    let sum = a + b;
    callBack(sum);
  }, 1000);
}

  sumAsync(5, 5, (res) => {
    console.log(`Sum is ${res}`);
  })
