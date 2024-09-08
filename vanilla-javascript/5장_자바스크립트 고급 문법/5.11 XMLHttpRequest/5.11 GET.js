//XMLHttpRequest 객체는 서버와 상호작용하기 위해 사용한다.
//전체 페이지를 새로고침하지 않아도 URL을 통해 데이터를 전송하거나 받아올 수 있다

//XMLHttpRequest 객체는 브라우저에서 제공하는 Web API이기 때문에 브라우저 환경에서만 정상 작동한다.
//node.js 환경에서는 제공되지 않는다.
const xhr = new XMLHttpRequest();

//클라이언트에서 서버로 요청을 보내기 위해서 HTTP Method와 요청URL을 정의한다.
//XMLHttpRequest 내장 함수인 open()을 사용한다.
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts"); //open(Http Method, URL, 비동기여부[기본값true])

//open()함수로 Http Method, 요청URL, 비동기여부를 정의한 후에는 헤더 값을 설정한다.
//setRequestHeader() 함수를 통해서 요청 헤더 값을 설정할 수 있다.
xhr.setRequestHeader("content-type", "application/json");

//최종적으로 send()함수를 통해 요청을 보낸다.
//이때 서버로 전송할 데이터가 있다면 send()함수에 매개변수로 데이터를 전달한다.
//(request body에 담겨 전송됨. GET인 경우 send()함수에 매개변수를 넣어도 실제 전송되지는 않음)
const data = {
  id: 2,
  title: "XMLHttpRequest Test",
  author: "Jeremy",
};
//xhr.send(JSON.stringify(data));
xhr.send(); //JSON.stringify를 통해 오브젝트 데이터를 문자열 형태로 변경해서 전송

//클라이언트가 서버로 요청을 전송하면, 서버는 요청한 결과에 대해 응답을 하게 된다
//XMLHttpRequest 객체가 발생시키는 이벤트를 통해 서버가 전송한 응답을 처리할 수 있다
xhr.onload = () => {
  if (xhr.status === 200) {
    const res = JSON.parse(xhr.response);
    console.log(res);
  } else {
    console.error(xhr.status, xhr.statusText);
  }
};
