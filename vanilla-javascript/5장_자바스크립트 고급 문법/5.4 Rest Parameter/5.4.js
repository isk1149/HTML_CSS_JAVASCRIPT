//Rest Parameter는 파라미터로 몇 개의 파라미터가 전달될지 모를 경우 유용하게 사용된다
//"...파라미터명" 형식을 사용하면 함수를 호출할 때 파라미터 개수를 자유롭게 넘길 수 있다
//전달된 파라미터 값은 배열로 저장된다.
function sum(...args) {
  let total = 0;
  for (let x of args) {
    //파라미터가 배열로 전달이 되기 때문에, for-of문 사용하여 전달 받은 파라미터 값을 모두 확인
    total += x;
  }
  return total;
}

console.log(sum(3, 2, 5, 7, 4, 23));
console.log(sum(3, 7));
console.log(sum(21, 17, 38));
