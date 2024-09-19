//this에 window 객체가 바인딩 된 경우
console.log(this); //script 태그 안에 선언된 this는 window 객체로 사용됨

function myFunction() {
  //script 태그 안에 선언된 함수에서 this는 window 객체로 사용됨
  console.log(this);
}
myFunction();
