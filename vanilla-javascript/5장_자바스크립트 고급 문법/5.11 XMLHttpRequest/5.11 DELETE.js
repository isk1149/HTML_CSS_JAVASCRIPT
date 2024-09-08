const xhr = new XMLHttpRequest();
xhr.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
xhr.setRequestHeader("content-type", "application/json; charset=UTF-8");
xhr.send();

xhr.onload = () => {
  if (xhr.status === 200) {
    const res = JSON.parse(xhr.response);
    console.log(res);
  } else {
    console.error(xhr.status, xhr.statusText);
  }
};
