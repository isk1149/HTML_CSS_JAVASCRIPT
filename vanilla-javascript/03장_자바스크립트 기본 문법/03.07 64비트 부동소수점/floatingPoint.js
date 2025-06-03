// 자바스크립트는 항상 64비트 부동소수점으로 숫자를 저장한다.
// 부호 비트 1bit, 지수부 11bit, 가수부 52bit

let x2 = 0.2 + 0.1;
console.log(x2); // 0.3이 아니고 0.30000000000000004
console.log((0.1).toString(2)); // 0.1을 2진수로 변환

let x = 999999999999999;
let y = 9999999999999999;
console.log(`x: ${x}`); // x: 999999999999999
console.log(`y: ${y}`); // y: 10000000000000000

console.log("");

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
// MAX_SAFE_INTEGER, MIN_SAFE_INTEGER 범위를 넘어서는 숫자를 다뤄야한다면
// Big.js, BigNumber.js, Decimal.js와 같은 라이브러리를 사용하면 된다.
