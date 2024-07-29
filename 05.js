const multiplyWithCallback = (array, callBack) => {
  let result = array.map((num) => num * 2);
  callBack(result);
};

const array = [2, 3, 1, 5, 6, 7];
multiplyWithCallback(array, (result) => {
  console.log(result);
});
