async function fetchData(url) {
  const res = await fetch(url);

  const data = await res.json();
  return data;
}

fetchData("https://jsonplaceholder.typicode.com/todos/1").then((message) =>
  console.log(message)
);
