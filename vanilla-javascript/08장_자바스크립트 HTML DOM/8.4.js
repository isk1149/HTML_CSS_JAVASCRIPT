//사용자가 웹 페이지를 이용하면서 행하는 액션을 이벤트라고 한다.

//click 이벤트(onclick)
//클릭 이벤트는 사용자가 웹 페이지 안에서 마우스 왼쪽 버튼을 클릭할 때 발생하는 이벤트이다.
//대표적인 예로 <button> 요소에 클릭 이벤트가 일어나는지 감시하고
//클릭 이벤트가 일어나는 순간 특정 함수를 실행시키려면 onclick 속성을 사용해서 처리할 수 있다.
function myFunction() {
  console.log("onclick 이벤트 설정");
}

document.getElementById("btn").addEventListener("click", myFunction);
document.getElementById("btn2").addEventListener("click", function () {
  console.log("addEventListener를 통해 실행");
});

//change 이벤트(onchange)
//change 이벤트는 값이 변경되었을 때 발생하는 이벤트이다.
//change 이벤트가 발생하는 대표적인 DOM 요소는 <select>, <input type="checkbox">, input type="radio"> 이 있다.
function doChange() {
  let selectedValue = document.getElementById("select1").value;
  //let selectedValue = document.getElementById("select1").getAttribute("value");
  /**
   * document.getElementById("select1").value
   * value 속성은 사용자가 선택한 옵션의 값을 동적으로 반영한다.
   * 즉, 현재 선택된 <option> 태그의 value 속성을 반환한다.
   *
   * document.getElementById("select1").getAttribute("value")
   * getAttribute("value")는 HTML 태그에 직접 작성된 속성 값을 반환한다.
   * <select> 요소 자체에는 value 속성이 명시되지 않았기 때문에, getAttribute("value")는 null을 반환한다.
   */
  console.log(selectedValue);
}

//focus 이벤트(onfocus)
//focus 이벤트는 input type="text" 요소처럼 사용자가 텍스트, 숫자 같은 데이터를 입력할 수 있는
//DOM 요소에 마우스를 위치시킬 때 발생하는 이벤트이다.
//ex) 로그인 페이지를 열면 아이디 입력 필드에 포커스가 되게 함
window.onload = function () {
  document.getElementById("text1").focus();
};

function doFocus() {
  console.log("doFocus");
}

//blur 이벤트(onblur)
//blur 이벤트는 입력 가능한 DOM 요소에 마우스가 포커스 되었다가 다른 DOM 요소로 이동할 때
//즉, 현재 마우스가 포커스 되어 있는 DOM 요소를 빠져나가려 할 때 발생하는 이벤트이다.
//입력 요소에 입력된 값이 정확한 형식으로 입력되었는지, 혹은 필수 입력 값이라 입력되었는지 확인하는 용도로 사용할 수 있다
function doBlur(obj) {
  if (obj.value === "") {
    alert("필수값입니다.");
  }
  console.log(obj.value);
}

//key 이벤트(onkeydown, onkeypress, onkeyup)
//key 이벤트는 사용자가 입력창에서 키보드를 입력할 때 발생한다.
//키를 입력하면 keydwon, keypress, keyup 순으로 이벤트가 발생한다.
function myOnKeyDown(e) {
  console.log(e.type);
  console.log(e.target);
  console.log(e.target.value);
  if (e.key === "Enter") myEnter();
}
function myOnKeyPress(e) {
  console.log(e.type);
  console.log(e.target);
  console.log(e.target.value);
}
function myOnKeyUp(e, nextInputId, maxLength) {
  console.log(e.type);
  console.log(e.target);
  console.log(e.target.value);

  const input = e.target;
  const value = e.target.value;
  if (input.value.length > maxLength)
    input.value = input.value.slice(0, maxLength);

  console.log(`valueLength: ${input.value.length}`);
  console.log(`inputTagMaxLength: ${maxLength}`);
  if (nextInputId !== null && input.value.length === maxLength)
    document.getElementById(nextInputId).focus();
}

function myEnter() {
  alert("enter");
}

//scroll 이벤트(onscroll)
//사용자가 웹 페이지에서 마우스를 스크롤하면 발생하는 이벤트이다.
function myScroll(e) {
  console.log(e);
}

//touch 이벤트
//스마트폰, 태블릿 같은 모바일이나 터치가 가능한 PC에서 화면을 터치하면 발생하는 이벤트

//load 이벤트(onload)
//웹 페이지의 모든 HTML DOM 요소가 로딩되면 발생하는 이벤트이다.
//화면에 DOM 요소가 많은 복잡한 화면의 경우 화면에 있는 모든 DOM 요소를 해석하고
//DOM 트리에 위치시켜 화면에 렌더링하는 과정에서 시간이 소요된다.

//아직 DOM 요소가 DOM 트리에 삽입이 되지 않은 시점에서 해당 DOM에 저근하려는 자바스크립트 코드가 실행되면
//이 시점에서는 해당 DOM을 찾이 못하는 에러가 발생한다.

//그러므로 모든 DOM 요소가 완벽하게 DOM 트리에 추가되고, 렌더링이 될 때까지 기다렸다가 자바스크립트 코드가 실행되어야 한다.
//load 이벤트는 모든 DOM 요소가 렌더링이 되고 난 후 발생하는 이벤트이다.
//그래서 load 이벤트 이후 자바스크립트 코드가 실행되도록 구현해야 한다.

//unload 이벤트(onunload)
//현재 웹 페이지에서 다른 페이지로 이동하거나 브라우저 창을 닫을 때 발생하는 이벤트이다.
//브라우저 창을 닫거나 다른 웹 사이트로 이동하면, 자동으로 로그아웃되도록 구현할 수 있다.
//또한 현재 페이지에서 선언한 변수 중에서 메모리 공간을 많이 차지하는 변수가 있다면,
//메모리 공간을 확보하고자 해당 변수의 값을 null 처리하는 코드를 구현하는 것도 효과적이다.
window.addEventListener("beforeunload", (event) => {
  event.preventDefault(); //잘 안먹히는듯
});

window.addEventListener("unload", () => {
  alert("unload 이벤트 발생");
});
