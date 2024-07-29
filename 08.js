function racePromises(promises) {
  return Promise.race(promises);
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "first");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "second");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 300, "third");
});

racePromises([promise1, promise2, promise3]).then((result) =>
  console.log("Resolved with:", result)
);
