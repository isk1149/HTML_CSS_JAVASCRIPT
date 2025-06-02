//자바스크립트에서 HTML 요소에 대한 다양한 제어를 하려면 HTML 요소에 대한 접근이 필요하다
/**
 * 1. HTML 요소의 id 속성을 통해 HTML 요소를 찾을 수 있다.
 * 2. HTML 요소의 태그명을 통해 HTML 요소를 찾을 수 있다.
 * 3. HTML 요소의 클래스명을 통해 HTML 요소를 찾을 수 있다.
 * 4. CSS의 선택자를 이용해 HTML 요소를 찾을 수 있다.
 */

//document 객체의 내장 함수인 getElementById를 사용하여 HTML 요소에 대한 접근이 가능하다
//getElementById 함수를 통해서 HTML 요소를 발견하면, HTML 요소를 자바스크립트 객체로 반환한다.
//반대로 HTML요소를 발견하지 못하면, null을 반환한다.
let element1 = document.getElementById("userid");
console.log('document.getElementById("userid") : ' + element1);
let element2 = document.getElementById("userid2");
console.log('document.getElementById("userid2") : ' + element2);

//document 객체의 내장 함수인 getElementByTagName을 사용하여 HTML 요소에 대한 접근이 가능하다.
//파라미터로 전달한 태그명에 해당하는 모든 HTML 요소를 반환한다.
let element3 = document.getElementsByTagName("p");
console.log('document.getElementsByTagName("p") : ' + element3);
console.log('document.getElementsByTagName("p").length : ' + element3.length);
let element4 = document.getElementsByTagName("h6");
console.log('document.getElementsByTagName("h6") : ' + element4);
console.log('document.getElementsByTagName("h6").length : ' + element4.length);

//document 객체의 내장 함수인 getElementByClassName을 사용하여 HTML 요소에 대한 접근이 가능하다.
//파라미터로 전달한 클래스명과 동일한 class 속성값을 포함하고 있는 모든 HTML 요소를 반환한다.
let element5 = document.getElementsByClassName("para");
console.log('document.getElementsByClassName("para") : ' + element5);
console.log(`document.getElementsByClassName("para") : ${element5.length}`);

//document 객체의 내장 함수인 querySelectorAll을 사용하여 HTML 요소에 대한 접근이 가능하다
//파라미터로 CSS 선택자를 사용할 수 있다
//CSS 선택자 종류는 아래와 같다.
/**
 * 1. 태그 선택자(Type Selector)
 * p {
 *  color: red;
 * }
 *
 * 2. 클래스 선택자(Class Selector)
 * .bg-red {
 *  background-color: red;
 * }
 * .h-100 {
 *  height: 100px;
 * }
 * <div class="bg-red h-100"></div>
 *
 * 3. ID 선택자(ID Selector)
 * #container {
 *  width: 100%;
 * }
 * <div id="container"></div>
 *
 * 4. 복합 선택자(Combinator Selector)
 * //하위 선택자. section 태그 하위의 모든 ul 태그(깊이는 상관 없음)를 찾아서 스타일 적용
 * section ul {
 *  border: 1px dotted black;
 *  font-size: 14pt;
 * }
 * //자식 선택자. section 태그 바로 아래의 태그가 ul 태그일 때 적용됨.
 * section>ul {
 *  border: 1px dotted black;
 *  font-size: 14pt;
 * }
 * //같은 부모 요소를 가지는 요소들을 형제 관계라 한다.
 * //이때 자식 요소들 중에서 먼저 나오는 요소를 형 요소, 나중에 나오는 요소를 동생 요소라 한다.
 * //인접 형제 선택자는 같은 레벨에 있는 자식 요소 중 나란히 붙어 있는 요소일 때
 * //즉 인접해 있는 형제 요소의 조건을 충족할 때 스타일을 적용한다.
 * //h1 요소 바로 옆의 ul 요소에만 스타일이 적용된다.(오른쪽 혹은 아래의 동생 요소 하나에 적용)
 * h1+ul {
 *  background: blue;
 * }
 * <section>
 *  <ul></ul>
 * <h1></h1>
 * <ul></ul> <- 여기에만 스타일 적용됨
 * <ul></ul>
 * </section>
 *
 * 조건을 충족하는 모든 동생 요소에 스타일이 적용된다.
 * //일반 형제 선택자
 * h1~ul {
 *  background: green;
 * }
 * <section>
 *  <ul></ul>
 *  <h1></h1>
 *  <ul></ul> <- 스타일 적용됨
 *  <ul></ul> <- 스타일 적용됨
 * </section>
 *
 * 5. 속성 선택자(Attribute Selector)
 * //태그 안에 작성된 특정 속성의 값을 활용해서 스탕리을 적용한다.
 * 패턴             의미
 * E[attr]          'attr' 속성이 포함된 요소(E)를 선택한다.
 * E[attr="val"]    'attr' 속성의 값이 정확하게 'val'과 일치하는 요소를 선택한다.
 * E[attr~="val"]   'attr' 속성의 값에 'val'이 포함되는 요소를 선택한다(공백으로 분리된 값이 일치)
 * E[attr^="val"]   'attr' 속성의 값이 'val'으로 시작하는 요소를 선택한다.
 * E[attr$="val"]   'attr' 속성의 값이 'val'로 끝나는 요소를 선택한다.
 * E[attr*="val"]   'attr' 속성의 값에 'val'이 포함되는 요소를 선택한다.
 * E[attr|="val"]   'attr' 속성의 값이 정확하게 'val' 이거나 'val'로 시작되는 요소를 선택하다
 *
 * E[attr] 형식
 * a[href] {
 *  color: black;
 * }
 *
 * E[attr="val"] 형식
 * input[type="text"] {
 *  width: 200px;
 * }
 *
 * <a href="/link"></a>
 * <input type="text">
 */

let element6 = document.querySelectorAll("p.para");
console.log(`document.querySelectorAll("p.para") : ${element6}`);

let element7 = document.querySelectorAll("[name=chk_interest]:checked");
console.log(
  `document.querySelectorAll("[name=chk_interest]:checked") : ${element7}`
);
console.log(
  `document.querySelectorAll("[name=chk_interest]:checked") : ${element7.length}`
);
