/* 함수 선언식 */
function sum(p1, p2) {
  return p1 + p2;
}

console.log(sum(10, 20));

/* 함수 표현식 */
let sum2 = function (p1, p2) {
  return p1 + p2;
};

console.log(sum2(30, 40));

// 함수 선언식과 함수 표현식의 차이
// 함수 선언식은 함수 선언이 함수 호출 코드보다 나중에 작성되었더라도 실행이 가능하다.
// 자바스크립트 해석 엔진이 함수 선언식으로 선언된 함수의 경우 먼저 해석을 하기 때문이다.
console.log(sum3(100, 200));
function sum3(p1, p2) {
  return p1 + p2;
}

// 하지만 함수 표현식은 작성된 코드 순서대로 실행된다. 아래 코드는 에러가 발생한다.
// console.log(sum4(300, 400)); // 에러나서 주석처리해둠
let sum4 = function (p1, p2) {
  return p1 + p2;
};

/* Function 생성자 함수 */
// 자바스크립트 내장 함수인 Function 함수에 파라미터와 코드 블록을 문자열로 전달하여 생성 가능.
// 전달할 파라미터가 없으면 코드 블록만 문자열로 전달.
// 코드 블럭을 동적으로 생성하고 싶을 때 사용 가능.
let sum5 = new Function("p1", "p2", "return p1 + p2;");
console.log(sum5(7, 8));
