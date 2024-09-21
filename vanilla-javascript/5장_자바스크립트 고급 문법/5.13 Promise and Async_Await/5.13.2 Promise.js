//Promise는 자바스크립트에서 비동기 처리에 사용되는 객체이다.
//비동기 처리란 특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 실행할 수 있게 해주는 방식이다

//원래 웹은 요청에 대한 응답이 순차적으로 이뤄지고, 먼저 실행된 코드가 실행이 완료되어야 다음 코드를 실행하는 순서를 가지고 있다
//그런데 자바스크립트에 Ajax(Asynchronous JavaScript and XML)가 추가되면서 XMLHttpRequest 통신이 가능해졌고
//서버로 요청을 보낸 후 요청에 대한 응답을 받을 때까지 기다릴 필요 없이 다음 코드를 실행할 수 있게 되었다

//Promise는 자바스크립트에서 브라우저가 제공하는 비동기 함수인 Web APIs를 실행할 때
//실행한 코드가 완료될 때까지 대기하지 않고 바로 다음 코드를 실행할 수 있게 해주고
//비동기 함수의 실행이 완료되면 then()함수를 통해 그 결과에 대한 코드를 실행할 수 있게 해준다

//Promise는 new 생성자 함수를 사용해 생성한다
//요청에 대한 응답이 성공적으로 오면, resolve() 함수에 결과를 전달한다.
//요청에 대한 응답에 실패하면 reject() 함수에 에러를 전달한다.

// const promise = new Promise((resolve, reject) => {
//   if (/*처리성공*/) {
//     resolve("결과 데이터");
//   } else {
//     reject(new Error("에러"));
//   }
// });

//클라이언트에서 서버로 요청을 보내고 서버로부터 응답받은 데이터를 이용해 구현해야 하는 코드가 있다면
//Promise를 사용하여 응답이 완료된 후 호출되는 then() 함수를 통해 결과를 받고 나서 구현해야할 코드를 작성할 수 있다
function getDataPromise() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
    xhr.setRequestHeader("conetent-type", "application/json");
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        const res = JSON.parse(xhr.response);
        resolve(res);
      } else {
        console.error(xhr.status, xhr.statusText);
        reject(new Error(xhr.status));
      }
    };
  });
}

getDataPromise().then((res) => {
  console.log(res);
  console.log("다음 코드를 실행합니다");
});
