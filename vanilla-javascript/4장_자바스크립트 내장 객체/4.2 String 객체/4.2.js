//length
/**
 * 실무 사례
 * 회원 가입 시 비밀번호 길이 체크
 * 주민번호 앞 6자리 체크
 */
let txt = "ABCDEFG";
let sln = txt.length;
console.log("txt: ABCDEFG");
console.log(`txt.length: ${sln}`);
console.log("========================================");
console.log("");
//indexOf()
//문자열 안에 특정 문자열이 존재하는지 찾고, 있다면 찾고자 하는 문자열이 시작되는 index 반환
//문자열을 발견하지 못하면 -1 반환
//index는 0부터 시작
/**
 * 실무 사례
 * 전화번호 입력받을 때 하이픈(-)이 없어야 한다. indexOf("-")를 사용해서 확인할 수 있다.
 */
let str = "Please locate where 'locate' occurs!";
let pos = str.indexOf("locate"); //7
console.log("str: Please locate where 'locate' occurs!");
console.log(`str.indexOf("locate"): ${pos}`);
console.log("========================================");
console.log("");

//lastIndexOf()
//찾고자 하는 문자열이 둘 이상 발견되면 제일 마지막에 발견된 문자열의 index를 반환
//문자열을 발견하지 못하면 -1 리턴
//index는 0부터 시작
str = "Please locate where 'locate' occurs!";
pos = str.lastIndexOf("locate"); //21
console.log(`str.lastIndexOf("locate"): ${pos}`);
console.log("========================================");
console.log("");
//indexOf(), lastIndexOf() 함수 모두 두 번째 파라미터에 문자열을 찾기 시작할 위치를 index로 설저 가능
pos = str.indexOf("locate", 20); //21
pos = str.indexOf("locate", 21); //21
pos = str.indexOf("locate", 22); //-1

//lastIndexOf()의 경우 뒤에서부터 찾는다
pos = str.lastIndexOf("locate", 27); //21
pos = str.lastIndexOf("locate", 19); //7
pos = str.lastIndexOf("locate", 11); //7
pos = str.lastIndexOf("locate", 7); //7
pos = str.lastIndexOf("locate", 6); //-1

//slice()
//파라미터로 시작 위치와 종료 위치를 주면, 문자열에서 해당 부분을 잘라내서 반환
//종료위치 이전까지만 반환됌. 위치는 0부터 세면 됌
/**
 * 실무 사례
 * 주민번호 7번째 자리 수로 성별 체크할 때 slice(6,7)
 * 제품 코드의 특정 자리 수 문자를 추출할 때
 */
str = "Apple, Banana, Kiwi";
let res = str.slice(7, 13);
console.log("str: Apple, Banana, Kiwi");
console.log(`str.slice(7, 13): ${res}`);

// 종료 인덱스 번호를 생략하면, 시작위치에서 문자열 마지막까지를 반환
console.log(`str.slice(7): ${str.slice(7)}`);

//시작 위치 인덱스를 음수로 주면, 문자열 끝에서부터 거꾸로 읽음. 음수로 읽을 때는 -1부터 시작
console.log(`str.slice(-12): ${str.slice(-12)}`);
console.log("========================================");
console.log("");

//substring()
//slice()와 동일한 기능인데 파라미터로 음수를 허용하지 않음
console.log(`str.substring(7,13): ${str.substring(7, 13)}`);
console.log(`str.substring(7): ${str.substring(7)}`);
console.log("========================================");
console.log("");

//substr()
//첫 번째 파리미터인 시작 위치부터 잘라낼 문자의 길이를 두 번째 파라미터로 넣는다
//★★★ deprecated라고 함
console.log(`str.substr(7,6): ${str.substr(7, 6)}`);
console.log(`str.substr(7,12): ${str.substr(7, 12)}`);
console.log(`str.substr(7): ${str.substr(7)}`);
console.log(`str.substr(-12): ${str.substr(-12)}`);
console.log("========================================");
console.log("");

//replace()
//문자열 내의 특정 문자열을 지정한 문자열로 바꾸는 함수이다
//바꾸려는 문자열이 하나 이상 있더라도 처음 발견된 문자열만 바꾼다
//대소문자를 구분한다
/**
 * 실무 사례
 * 뉴스레터 발송 시 받는사람 이름을 replace로 대체
 * 날짜 포맷 형식을 년-월-일에서 년/월/일로 변경 시 replace(/-/g, "/")
 */
str = "Please visit Seoul and Seoul!";
console.log("str: Please visit Seoul and Seoul!");
console.log(`str.replace("Seoul", "Jeju"): ${str.replace("Seoul", "Jeju")}`);
console.log(`str.replace("SEOUL", "Jeju"): ${str.replace("SEOUL", "Jeju")}`);

//대소문자 구분 없이 사용하려면 자바스크릡트 정규식을 사용한다
console.log(`str.replace(/SEOUL/i, "Jeju"): ${str.replace(/SEOUL/i, "Jeju")}`);
console.log(
  `str.replace("/Seoul/g", "Jeju"): ${str.replace(/Seoul/g, "Jeju")}`
);
console.log("========================================");
console.log("");

//toUpperCase(), toLowerCase()
/**
 * 실무 사례
 * 여권, 항공권, 신용카드 등의 이름은 전부 대문자
 * 검색창에 검색키워드를 입력하면 대문자 혹은 소문자로 변환해서 검색함.(제품명은 대소문자 섞여있기 때문)
 */
console.log(`"Hello,World".toUpperCase(): ${"Hello,World".toUpperCase()}`);
console.log(`"Hello,World".toLowerCase(): ${"Hello,World".toLowerCase()}`);
console.log("========================================");
console.log("");

//concat()
//2개 이상의 문자열을 하나의 문자열로 합친다
console.log(`"Hello".concat(" ", "World"): ${"Hello".concat(" ", "World")}`);
console.log(
  `"Hello".concat(" ", "World", " ", "Internet"): ${"Hello".concat(
    " ",
    "World",
    " ",
    "Internet"
  )}`
);
console.log("========================================");
console.log("");

//trim()
console.log(`"     hello    ".trim(): ${"     hello    ".trim()}`);
console.log("========================================");
console.log("");

//padStart(), padEnd()
/**
 * 실무 사례
 * 학번. 2014년도에 입학한 첫 번째 학생은 2014 + 0001
 * 달력. 1월을 01로 표현
 */
//padStart() 함수는 문자열 앞에 지정된 문자를 지정된 길이만큼 추가하는 함수이다
//첫 번째 파라미터는 문자열의 총 길이, 두 번째 파라미터는 추가할 문자
console.log(`"5".padStart(4,0): ${"5".padStart(4, 0)}`);
console.log(`typeof "5".padStart(4,0): ${typeof "5".padStart(4, 0)}`);

//padEnd() 함수는 문자열 뒤에 지정된 문자를 지정된 길이만큼 추가하는 함수이다
//첫 번째 파라미터는 문자열의 총 길이, 두 번째 파라미터는 추가할 문자
console.log(`"5".padEnd(4,0): ${"5".padEnd(4, 0)}`);
console.log(`typeof "5".padEnd(4,0): ${typeof "5".padEnd(4, 0)}`);
console.log("========================================");
console.log("");

//charAt()
//문자열에서 특정 인덱스에 해당하는 문자 하나를 반환
console.log(`"HELLO".charAt(0): ${"HELLO".charAt(0)}`);

//charCodeAt()
//문자열에서 특정 인덱스에 해당하는 문자 하나의 유니코드값을 반환
console.log(`"HELLO".charCodeAt(0): ${"HELLO".charCodeAt(0)}`);
console.log("========================================");
console.log("");

//split()
/**
 * 실무사례
 * 년-월-일에서 -를 기준으로 년,월,일을 배열에 담음
 * #해시태그를 #를 기준으로 배열에 담음
 */
//문자열 내의 특정 구분자를 기준으로 문자열을 분리해서 배열로 반환
console.log(`"1997-12-02".split("-"): ${"1997-12-02".split("-")}`);
console.log("배열반환함");
console.log(
  `typeof "1997-12-02".split("-"): ${typeof "1997-12-02".split("-")}`
);
console.log("========================================");
console.log("");

//startsWith(), endsWith()
//startsWith() 함수는 문자열의 시작이 파라미터로 전달된 문자열로 시작되는지를 확인하는 함수이다
let url = "http://website.com";
if (url.startsWith("http://") || url.startsWith("https://")) {
  console.log(`url: ${url}`);
  console.log(
    `url.startsWith("http://") || url.startsWith("https://"): ${
      url.startsWith("http://") || url.startsWith("https://")
    }`
  );
}

let file = "abc.pdf";
if (file.endsWith(".pdf")) {
  console.log(`file: ${file}`);
  console.log(`file.endsWith(".pdf"): ${file.endsWith(".pdf")}`);
}
