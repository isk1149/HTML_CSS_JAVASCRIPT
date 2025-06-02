//Async/Await 역시 Promise와 동일한 목적으로 사용한다.
//Async는 비동기 실행을 의마하여, Await는 비동기로 실행한 결과가 올 때까지 기다리는 것을 의미한다

//Fetch API는 그 자체가 Promise이다.
//다음 예제 코드처럼 서버로부터 응답이 오면 then() 함수를 이용해서 응답받은 결과를 이용한 코드를 작성할 수 있다
function myFunction() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
}

//그런데 서버로 요청을 보내고 응답을 받은 후 응답받은 결과를 바탕으로 다시 서버로 요청을 보내는 코드를 작성한다면
//다음과 같이 코드가 매우 복잡해지고, 가독성이 떨어지게 된다
function myFunction2() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        body: JSON.stringify({
          id: 1,
          title: "foo",
          body: "bar",
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    });
}

//Async/Await를 사용하면 간결하고, 가독성이 높은 코드를 구현할 수 있다.
//비동기 함수를 호출할 때 함수 안에 await를 정의하면 비동기 함수가 실행되고,
//서버로부터 응답을 받을 때까지 대기(await)한 후 결과를 받으면 실행되도록 한다.
async function myFunction3() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const resJson = await res.json();
  console.log(resJson);
  //한 줄로 만들면 await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
  /**
   * await fetch("https://jsonplaceholder.typecode.com/posts/1").json(); 이런 코드가 잘못된 이유는
   * fetch()가 비동기 함수이기 때문에 fetch()의 결과인 Response 객체가 반환되기 전에 json() 함수가 실행될 수 있기 때문임.
   */

  const res2 = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const res2Json = await res2.json();
  console.log(res2Json);
}
myFunction3();

//Async/Await은 같은 Scope에서 결과 값을 관리한다.
//await을 사용하는 코드가 작성된 함수는 async를 선언해줘야 한다.
