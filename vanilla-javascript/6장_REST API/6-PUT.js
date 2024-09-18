fetch("http://localhost:3000/posts/2", {
  method: "PUT",
  body: JSON.stringify({
    id: 2,
    title: "The Great Jeremy",
    author: "Jeremy",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
