/* 할당 연산자
  x = y     x = y
  x += y    x = x + y
  x -= y    x = x - y
  x *= y    x = x * y
  x /= y    x = x / y
  x %= y    x = x % y
  x ** y    x = x ** y
*/

/* 비교 연산자 */
// 피연산자들을 비교하고 논리 값을 반환한다.
// 피연산자는 숫자, 문자, 논리형, 객체를 사용할 수 있다.
// 문자열 비교할 때는 유니코드 값을 사용하여 표준 사전 순서를 기반으로 비교한다.
// 자바스크립트에서 같은지를 비교할 때는 ==, 다른지를 비교할 때는 != 를 사용한다.
let x = 3;
let y = 4;
console.log(x == y);
console.log(x != y);

// 만약 비교하는 두 피연산자가 서로 타입이 다른 경우 자바스크립트는 비교를 위해 적절한 타입으로 변환한다.
// ex. 다음 예제처럼 숫자 3과 문자 '3'을 비교하면 결과로 true를 반환한다.
let z = "3";
console.log(x == z);
console.log(x != z);

// 자바스크립트에서 데이터 타입까지 비교하려면 ===, !== 연산자를 사용하면 된다.
console.log(x === z);
console.log(x !== z);

/* 크고 작음 비교
  x > y
  x >= y
  x < y
  x <= y
*/

/* 산술 연산자 */
// 피연산자가 숫자 값이며 표준 산술 연산자(+, -, *, /) 외에도 다음과 같은 산술 연산자를 제공한다.
// %(나머지 연산)
console.log(22 % 5);

// ++(증가 연산자)
let a1 = 3;
let b1 = ++a1;
console.log(a1);
console.log(b1);

let a2 = 3;
let b2 = a2++;
console.log(a2);
console.log(b2);

// --(감소 연산자)
let a3 = 3;
let b3 = --a3;
console.log(a3);
console.log(b3);

let a4 = 3;
let b4 = a4--;
console.log(a4);
console.log(b4);

// -(단항 부정 연산자) 부호가 바뀐 값을 반환.
let q = 1;
console.log(-q);
q = -2;
console.log(-q);

// +(숫자화 연산자) 피연산자가 숫자가 아닌 경우 숫자로 변환 시도. 숫자로 변환이 가능한 값은 숫자 값으로 반환.
console.log(+"3"); // 3
console.log(+true); // 1
console.log(+{ age: 10 }); // NaN

/* 논리 연산자 */
// 논리 연산자는 Boolean(참/거짓) 값에 대한 논리AND 비교 혹은 논리OR 비교를 통해 Boolean(참/거짓)을 반환한다.
console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(false || false);

/* 문자열 연산자 */
// 문자열 값을 연결 연산자(+)를 이용해서 두 문자열을 합친 새로운 문자열을 반환한다.
console.log("vanilla" + "" + "JS");

/* 조건(삼항) 연산자 */
let age = 18;
console.log(age >= 18 ? true : false);

let point = 92;
console.log(point >= 90 ? "A" : point >= 80 ? "B" : "C");
