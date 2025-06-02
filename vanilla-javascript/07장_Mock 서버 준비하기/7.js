//Mock 서버란 실제 서버처럼 클라이언트로부터 요청을 받고 응답을 주는 가짜 서버를 말한다
//일반적으로 Postman은 개발된 API가 제대로 동작하는지 테스트 용도로 많이 사용되는데,
//그 외에도 Mock 서버 기능을 제공한다.

fetch(
  "https://700a82f1-89f2-4cd4-b71a-db46b8e1195c.mock.pstmn.io/api/user/test01"
)
  .then((response) => response.json())
  .then((json) => console.log(json));
