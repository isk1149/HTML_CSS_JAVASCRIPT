/*
  if () {

  } else if () {

  } else {
  
  }

  undefined, null, 0, NaN, ""은 false 취급
*/

if (undefined) {
  console.log("undefined");
}
if (!undefined) {
  console.log("!undefined");
}

if (null) {
  console.log("null");
}
if (!null) {
  console.log("!null");
}

if (0) {
  console.log("0");
}
if (!0) {
  console.log("!0");
}

if (NaN) {
  console.log("NaN");
}
if (!NaN) {
  console.log("!NaN");
}

if ("") {
  console.log("");
}
if (!"") {
  console.log("!''");
}

/* switch */
// 상수 값(숫자, 문자 가능. 비교구문 안됌)에 해당하는 case절을 실행
let day = new Date().getDay();
switch (day) {
  case 0:
    console.log("일요일");
    break;
  case 1:
    console.log("월요일");
    break;
  case 2:
    console.log("화요일");
    break;
  case 3:
    console.log("수요일");
    break;
  case 4:
    console.log("목요일");
    break;
  case 5:
    console.log("금요일");
    break;
  case 6:
    console.log("토요일");
    break;
  default:
    console.log("");
    break;
}

/* if vs switch
  if문은 조건식을 위에서부터 아래로 순차 비교한다.
  운이 안 좋아서 조건을 만족하는 조건식이 가장 아래에 있다면, 비교하지 않아도 되는 조건식을 모두 비교해버리게 된다.
  하지만 switch문은 상수 값을 판단하고 해당하는 case 절로 바로 찾아가기 때문에 이런 경우 if문보다 효율적이다.
  따라서 비교 연산이 필요 없고, 조건을 비교할 대상이 범위가 아닌 특정 상수 값이라면 switch문이 유리하다.
*/
