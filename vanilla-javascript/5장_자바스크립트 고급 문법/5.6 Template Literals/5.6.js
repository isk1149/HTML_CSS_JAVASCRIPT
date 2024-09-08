//Template Literals는 변수에 할당된 문자열을 하나의 문자열로 병함할 때,
//더하기(+)를 사용하지 안혹, 하나의 문자열로 만들 수 있게 한다.
//문자열에 백틱(`)을 사용하고, 백틱 안에서 변수 값이 ${변수명}을 사용한다.
function hello2(name) {
  let name2 = "John";
  console.log(`Hello ${name2}. Welcome ${name}`);
}
hello2("Jeremy");

//기존 더하기(+) 방식
function hello3(name) {
  let name2 = "John";
  console.log("Hello " + name2 + ". Welcome " + name);
}
hello3("Jeremy");
