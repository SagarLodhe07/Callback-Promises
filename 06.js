function fetchUserDataAndPosts(userId) {
  const userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
  const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

  return fetch(userUrl)
    .then((response) => response.json())
    .then((user) => {
      return fetch(postsUrl)
        .then((response) => {
          return response.json();
        })
        .then((posts) => {
          return {
            user,
            posts,
          };
        });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
}

fetchUserDataAndPosts(1)
  .then((data) => {
    console.log("User details:", data.user);
    console.log("User posts:", data.posts);
  })
  