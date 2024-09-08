function callFunc(obj) {
  //<button> 태그를 클릭할 때마다 onclick 이벤트가 발생되고, 이때 호출되는 함수에 this를 파라미터로 전달하면,
  //this는 자동으로 현재 이벤트가 발생한 <button> 태그 그 자체가 된다.
  console.log(obj);
}

function changeSelect(obj) {
  //<select> 태그에서 선택이 바뀔 때마다 onchange 이벤트가 발생하고, 이때 호출되는 함수에 this를 파라미터로 전달하면,
  //this는 자동으로 현재 이벤트가 발생한 <select> 태그 그 자체가 된다.
  console.log(obj);
}