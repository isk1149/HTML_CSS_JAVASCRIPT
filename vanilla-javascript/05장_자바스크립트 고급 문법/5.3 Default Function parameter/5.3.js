//함수를 호출할 때 파라미터에 값을 전달하지 않으면 함수 내에서는 undefined가 된다.
//만약 파라미터가 함수 내에서 특정 기능을 구현하기 위해 반드시 필요한 값이라면,
//함수 내에서는 함수를 호출할 때 파라미터에 값이 전달되었는지를 확인하는 코드를 구현해야 한다.
function say(message) {
  if (message != undefined) {
    console.log(message);
  } else {
    console.log("파라미터가 넘어오지 않음");
  }
}

say();

//default function parameter는 함수 호출 시 파라미터가 전달되지 않았을 때 사용하는 기본값이다
//함수를 호출하는 곳에서 파라미터 값을 전달했는지 여부를 함수 내에서 일일이 확인할 필요가 없어진다.
function say2(message = "default") {
  console.log(message);
}

say2();
console.log("-----------------------------------------------------");

function say3(message = "message") {
  console.log(message);
}
say3();
say3("hello");
