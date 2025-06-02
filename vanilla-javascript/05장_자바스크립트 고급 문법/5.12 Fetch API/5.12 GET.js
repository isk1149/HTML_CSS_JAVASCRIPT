//Fetch API는 네트워크 통신을 포함한 리소스 취득을 위한 인터페이스가 정의되어 있다
//Fetch API와 XMLHttpRequest의 가장 큰 차이점은 Fetch API는 Promise 방식으로 구현되어 있다는 것이다.
//Fetch API를 사용해서 서버로부터 데이터를 받아오고, 서버로 데이터를 전송하는 부분을 구현해보자.

//GET인 경우 따로 HTTP Method를 명시하지 않아도 된다.
//fetch() 함수를 통해서 데이터를 요청하고, 응답이 이루어지면 응답 결과는 then() 함수의 인수로 전달받는다
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json()) //첫 번째 then()은 서버 요청에 대한 응답이 왔을 때 실행.
  //응답받은 데이터는 문자열이기 때문에 response.json() 함수를 통해 json 데이터로 변경함.
  .then((json) => console.log(json)); //json 데이터로 변경이 완료되면, 두 번째 then() 함수의 매개변수로 전달한다.
