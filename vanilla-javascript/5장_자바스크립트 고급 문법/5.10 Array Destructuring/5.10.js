//일반적으로 배열에 저장된 요소에 접근하기 위해서는 인덱스를 사용한다
function getScores() {
  return [70, 80, 90, 100];
}

let scores = getScores();
let w = scores[0],
  x = scores[1],
  y = scores[2],
  z = scores[3];
console.log(w);
console.log(x);
console.log(y);
console.log(z);

//Array Destructuring은 배열에 저장된 요소를 분해해서 배열의 순서에 따라 변수를 정의해서 사용한다
let [a, b, c, d] = getScores();
console.log(a);
console.log(b);
console.log(c);
console.log(d);

//배열에 반환하는 데이터가 많을 경우 특정 요소는 바로 변수에 할당하고,
//나머지 요소는 모두 배열에 할당하는 것도 가능하다
let [e, f, ...g] = getScores();
console.log(e);
console.log(f);
console.log(g);

//배열 안에 배열이 있는 경우도 Array Destructuring을 통해 분해할 수 있다
function getProfile() {
  return ["John", "Doe", ["Red", "Greed", "Blue"]];
}

let [firstName, lastName, [color1, color2, color3]] = getProfile();
console.log(color1);
console.log(color2);
console.log(color3);
