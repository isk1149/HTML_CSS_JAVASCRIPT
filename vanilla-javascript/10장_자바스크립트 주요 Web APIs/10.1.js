//로컬스토리지와 세션스토리지는 HTML5에서 추가된 웹 브라우저 저장소이다.

//로컬스토리지
//로컬스토리지는 저장된 데이터를 삭제하기 전까지 영구히 보존된다.
//도메인별로 5MB까지 저장할 수 있다.
//저장되는 모든 데이터는 자바스크립트의 오브젝트 데이터처럼 키와 값의 쌍으로 저장할 수 있다.
//다만 저장되는 모든 값은 String으로만 저장할 수 있다.
//Number, Boolean, Object, Array 같은 형태의 데이터를 저장할 때는 JSON.stringify()를 이용하여 문자열로 변환하면 된다.
//반대로 데이터를 읽을 때는 JSON.parse()를 이용하여 원래의 데이터 형태로 변환해서 사용할 수 있다.
//로컬스토리지는 다음과 같이 보안에 위배되지 않고, 영구히 저장해도 상관없는 데이터를 저장할 때 적합하다.
//1. 사용자가 마지막으로 보고 있는 화면 url 저장
//2. 웹 사이트에서 사용자 테마, 개인화를 제공하는 경우 해당 정보 저장
if (typeof Storage !== "undefined") {
  localStorage.setItem("title", "The Great");
  localStorage.setItem("seq", 25);

  const users = [
    { id: 1, name: "Tom" },
    { id: 2, name: "Sam" },
  ];
  localStorage.setItem("users", JSON.stringify(users));
}
//로컬스토리지에 저장한 데이터는 개발자 도구에서 Application 탭에 있는 Storage 영역의 Local Storage에서 확인할 수 있다(크롬기준)
//자바스크립트에서 프로그램 구현을 통해 데이터를 삭제해도 되고, 개발자 도구에서 직접 해당 Key를 선택하여 삭제할 수도 있다.
//로컬스토리지에 저장된 데이터는 이렇게 개발자 도구로 확인이 가능하기 때문에 보안상 중요 데이터는 저장하면 안 된다.
//로컬스토리지에 데이터가 저장되면, 같은 도메인 내의 다른 페이지에서도 저장된 데이터를 조회할 수 있다.
if (typeof Storage !== "undefined") {
  console.log(
    `localStorage.getItem("title"): ${localStorage.getItem("title")}`
  );
  console.log(`localStorage.getItem("seq"): ${localStorage.getItem("seq")}`);
  console.log(
    `typeof localStorage.getItem("seq"): ${typeof localStorage.getItem("seq")}`
  );
  console.log(
    `typeof Number(localStorage.getItem("seq")): ${typeof Number(
      localStorage.getItem("seq")
    )}`
  );
  console.log(
    `JSON.parse(localStorage.getItem("users")): ${JSON.parse(
      localStorage.getItem("users")
    )}`
  );
  console.log(
    `typeof JSON.parse(localStorage.getItem("users"))[0].id: ${typeof JSON.parse(
      localStorage.getItem("users")
    )[0].id}`
  );
  localStorage.removeItem("title");
}
console.log("--------------------------------------------");
//세션스토리지
//세션스토리지에 저장된 데이터는 브라우저 창(탭)을 닫는 순간 자동으로 삭제된다.
//세션스토리지에는 1회성 데이터를 보관해서 사용하면 된다.
//주로 다음과 같은 데이터를 저장할 때 적합하다.
//1. 사용자 정보 중 세션을 유지하는 동안에만 참조할 데이터 저장
//2. 화면 이동 시 전달해야 할 파라미터가 많은 경우 저장
if (typeof Storage !== "undefined") {
  sessionStorage.setItem("title", "session storage test");

  const users = [
    { id: 1, name: "Tom2" },
    { id: 2, name: "Sam2" },
  ];
  sessionStorage.setItem("users", JSON.stringify(users));
}
//세션스토리지에 저장한 데이터는 개발자 도구에서 Application 탭에 있는 Storage 영역의 Session Storage에서 확인할 수 있다(크롬기준)
//이렇게 세션스토리지에 데이터가 저장되면, 같은 도메인 내의 다른 페이지에서도 저장된 데이터를 조회할 수 있다.
if (typeof Storage !== "undefined") {
  console.log(sessionStorage.getItem("title"));
  console.log(JSON.parse(sessionStorage.getItem("users")));
  sessionStorage.removeItem("title");
}
/**
 * 실무사용사례:
 * 조회 화면에서 조회 조건을 입력 후 조회를 실행하여 나온 결과에서 특정 아이템을 선택하고 상세 화면으로 이동한다.
 * 상세화면에서는 '목록' 버튼이 있어서 다시 조회 화면으로 이동할 수 있다.
 * 이때 '목록' 버튼을 클릭하면 조회 화면으로 돌아오되, 기존에 사용자가 입력한 모든 조회 조건을 그대로 유지하고,
 * 조회된 결과도 그대로 유지해야 하는 경우가 많다. 이럴 경우 사용자가 입력한 조회 조건이 무엇이었는지 알아야 한다.
 * 보통 조회 화면에서 상세 화면으로 이동할 때 조회 조건을 파라미터로 전달해서 상세 화면에서 가지고 있다가
 * 다시 조회 화면으로 돌아갈 때 조회조건 파라미터를 다시 전달하는 방식으로 구현을 한다.
 * 조회조건에 해당하는 파라미터가 적을 때는 상관없지만, 조회 조건이 많을 때는
 * 매번 사용자가 입력한 조회 조건을 파라미터로 전달하는 것은 비효율적이다.
 * 이때 세션스토리지를 이용해서 사용자가 입력한 조회 조건을 저장해 놓으면, 상세 화면에서 조회 화면으로 돌아올 때
 * 저장된 조호 조건을 쉽게 사용할 수 있다.
 */

//로컬스토리지와 세션스토리지에 대한 설명 - chatGpt
/*
로컬스토리지(LocalStorage)
지속성: 영구적으로 데이터를 저장합니다. 
        데이터는 브라우저를 닫거나 기기를 재부팅해도 삭제되지 않으며, 사용자가 명시적으로 지우기 전까지 유지됩니다.
용량: 보통 5MB 정도의 용량을 제공합니다(브라우저에 따라 다를 수 있음).
도메인 범위: 동일한 도메인 내에서 페이지 간에 데이터를 공유할 수 있습니다.
주요 사용 사례: 사용자가 다시 방문할 때까지 유지해야 하는 데이터를 저장하는 데 유용합니다. 
                예를 들어, 테마 설정, 자동 로그인 정보 등을 저장할 때 사용됩니다.

세션스토리지(SessionStorage)
지속성: 세션 단위로 데이터를 저장합니다. 즉, 브라우저 탭이나 창을 닫으면 해당 데이터는 자동으로 삭제됩니다.
용량: 로컬스토리지와 비슷하게 보통 5MB 정도의 용량을 제공합니다.
도메인 범위: 동일한 브라우저 탭 내에서만 데이터를 유지합니다. 
            탭이나 창을 새로 열면 다른 세션이 시작되며, 각 세션 간에 데이터가 공유되지 않습니다.
주요 사용 사례: 한 번의 세션 동안만 유효한 데이터를 저장하는 데 유용합니다. 
                예를 들어, 사용자가 로그인한 동안만 유효한 정보나, 페이지 간 간단한 데이터 전송에 사용할 수 있습니다.

로컬스토리지와 세션스토리지의 주요 차이점
특성	            로컬스토리지(LocalStorage)	                        세션스토리지(SessionStorage)
데이터 지속성	    영구적으로 저장 (사용자가 명시적으로 지우기 전까지)	    세션이 종료되면 (탭 또는 창이 닫히면) 데이터 삭제
용량	            보통 5MB	                                          보통 5MB
범위	            동일 도메인 내 모든 페이지에서 접근 가능	             동일한 브라우저 탭 내에서만 접근 가능
주요 사용 사례	  장기적으로 유지할 데이터 (예: 사용자 설정, 토큰 등)	    세션 단위의 일시적 데이터 (예: 페이지 간 임시 데이터)
*/
