const xhr = new XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
xhr.setRequestHeader("content-type", "application/json; charset=UTF-8");
xhr.send(JSON.stringify({ title: "foo", body: "bar", userId: 1 }));

xhr.onload = () => {
  if (xhr.status === 201) {
    const res = JSON.parse(xhr.response);
    console.log(res);
  } else {
    console.error(xhr.status, xhr.statusText);
  }
};
