//Arrow Function은 함수를 정의하는 새로운 방법이다.
//화살표 함수 내의 this는 언제나 상위 Scopre의 this를 가리킨다.

const hello = (name) => {
  return "Hello, " + name;
};
console.log(hello("one"));

//파라미터가 하나일 때는 괄호 생략 가능
const hello2 = (name) => {
  return "Hello, " + name;
};
console.log(hello("two"));

//함수 내의 유일한 문장이 return문일 때 return과 중괄호 생략 가능
const hello3 = (name) => "Hello, " + name;
console.log(hello("three"));

//★★★★★
//상위 Scope는 script라서 this가 window 객체 반환
const hello4 = () => {
  console.log(this);
};
hello4();
