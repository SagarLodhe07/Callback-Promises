const fetchMultipleData = async (urls) => {
  const fetchData = urls.map((url) =>
    fetch(url).then((response) => response.json())
  );
  const result = await Promise.all(fetchData);
  return result;
};

const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
];

fetchMultipleData(urls).then((res) => {
  console.log(res);
});
