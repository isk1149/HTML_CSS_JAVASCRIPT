//Object Literal Syntax Extension문법을 사용하면 Object의 키로 변수에 할당된 문자열 값을 사용할 수 있다
//키를 대괄호 안에 넣어주면 이때의 키는 할당된 변수 값을 의미한다.
let type = "student";

let score = {
  [type]: "John",
  score: 95,
};

for (const key in score) {
  console.log(key);
}
