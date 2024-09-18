//DOM 요소에 접근한 다음 DOM 요소가 가지고 있는 속성 정부를 가져오거나, 속성 정보의 값을 변경할 수도 있다.
//사용자가 브라우저에 입력하는 데이터는 DOM 요소의 value 속성에 저장된다.

//getAttribute() 함수를 사용해서 HTML 요소의 속성 정보를 가져올 수 있다.
let oText1 = document.getElementById("text1");
let textValue = oText1.value;
console.log(textValue);
console.log(document.getElementById("text1").getAttribute("value"));

//다음 DOM 요소는 value 속성에 사용자가 입력하거나 선택한 값이 저장된다.
//자바스크립트에서는 value 속성으로 데이터를 확인하거나 변경할 수 있다.

/**
 * input type="checkbox"
 * input type="color"
 * input type="date"
 * input type="datetime-local"
 * input type="email"
 * input type="file"
 * input type="hidden"
 * input type="month"
 * input type="number"
 * input type="password"
 * input type="radio"
 * input type="range"
 * input type="search"
 * input type="tel"
 * input type="text"
 * input type="time"
 * input type="url"
 * input type="week"
 * select
 */

//setAttribute()
function doSave(e) {
  let obj = e.target;
  obj.disabled = true;
  setTimeout(function () {
    obj.disabled = false;
  }, 2000);
}

//hasAttribute()
let oText2 = document.getElementById("text1");
console.log(oText2.hasAttribute("data-role"));

//removeAttribute()
//oText2.removeAttribute("data-role");
//console.log(oText2.hasAttribute("data-role"));
