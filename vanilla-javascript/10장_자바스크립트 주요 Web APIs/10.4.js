//encodeURI는 URI의 특정 문자를 UTF-8로 인코딩하고 연속된 이스케이프 문자로 변환한다.
//특히 영문자가 아닌 한글, 중국어, 일본어 등을 서버로 전송하거나 브라우저 URL로 올바르게 동작하려면
//encodeURI를 사용해서 문자를 인코딩해야 한다.
console.log(encodeURI("http://domain.com?x=A"));
console.log(encodeURI("http://domain.com?x=가"));

//decodeURI는 인코딩된 문자를 디코딩해준다.
const encoded = encodeURI("http://domain.com?x=가");
console.log(decodeURI(encoded));
