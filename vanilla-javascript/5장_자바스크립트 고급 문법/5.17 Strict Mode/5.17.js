//자바스크립트 문법을 엄격하게 체크하는 모드이다
//자바스크립트 ES5부터 하위 버전에 대한 호환성 문제를 검사하기 위해 도입된 모드이다.
//예를 들어 변수를 선언할 때 var, let 같은 선언자를 사용하지 않아도 에러가 나지 않는데
//엄격 모드에서는 이런 하위 버전에 대한 허용을 하지 않는다.
//엄격 모드는 "use strict" 지시자를 선언해서 사용한다.

"use strict";
x = 1; //선언자를 사용하지 않아서 에러 발생
function myFunc() {
  y = 2; //선언자를 사용하지 않아서 에러 발생
}

/////////////////////////////////////////////////////////////////////////
//다음 예제처럼 함수 안에서만 엄격 모드를 사용할 수도 있다

x = 1; //에러가 발생하지 않는다
function myFunc() {
  "use strict";
  y = 2; //선언자를 사용하지 않아서 에러 발생
}
