document.write("javascript js파일에 위치<br>");

/**
 * 덧셈 함수
 * @param {number} p1
 * @param {number} p2
 * @returns  p1 + p2
 */
function sum(p1, p2) {
  let sum = p1 + p2;
  return sum;
}

let sum1 = sum(1, 4);
console.log(sum1);

const summ = function (p1, p2) {
  return p1 + p2;
};

console.log(summ(6, 7));
