//HTML의 특정 위치에 새로운 HTML을 삽입할 때 innerHTML을 사용할 수 있다
let sel = document.getElementById("sel");
sel.innerHTML = '<option value="">선택하세요</option>';

//innerText는 텍스트 내용만 삽입 가능하다
document.getElementById("title").innerText = "제목";

//innerHTML과innerText는 현재 접근한 DOM 요소 안에 자식 노드로 텍스트 혹은 HTML을 삽입하는 방법이다.
//이렇게 하면 자식 노드가 모두 교체된다.

//때로는 DOM 요소를 기준으로 형제 노드 혹은 자식 노드를 교체하지 않고
//자식 노드의 제일 앞 혹은 뒤에 새로운 HTML을 삽입해야 하는 경우가 발생한다.
//이때 insert-AdjacentHTML()을 사용할 수 있다.
//첫 번째 파라미터: DOM 요소를 삽입할 위치, 두 번째 파마리터: 삽입할 DOM 요소에 대한 문자열
/**
 * DOM을 삽입할 위치는 다음과 같이 4가지를 사용할 수 있다
 * afterbegin - 접근한 DOM 요소의 자식 노드의 제일 첫 번째 노드로 삽입
 * afterend - 접근한 DOM 요소 바로 다음 노드로 삽입
 * beforebegin - 접근한 DOM 요소 바로 직전 노드로 삽입
 * beforeend - 접근한 DOM 요소의 자식 노드의 제일 마지막 노드로 삽입
 */
function myFunction() {
  let h = document
    .getElementById("myUl")
    .insertAdjacentHTML("afterbegin", "<li>A</li>");
}

//insertAdjacentText()는 현재 접근한 DOM 요소의 위치를 기준으로 텍스트를 삽입하는 방법이다.
//첫 번째 파라미터: 텍스트를 삽입할 위치, 두 번째 파마리터: 삽입할 텍스트 문자열
/**
 * 텍스트를 삽입할 위치는 다음과 같이 4가지를 사용할 수 있다
 * afterbegin - 접근한 DOM 요소의 자식 노드의 제일 첫 번째 노드로 삽입
 * afterend - 접근한 DOM 요소 바로 다음 노드로 삽입
 * beforebegin - 접근한 DOM 요소 바로 직전 노드로 삽입
 * beforeend - 접근한 DOM 요소의 자식 노드의 제일 마지막 노드로 삽입
 */

//remove() 함수는 HTML 요소를 삭제할 때 사욯안다.
function removeFunc() {
  document.getElementById("demo").remove();
}
