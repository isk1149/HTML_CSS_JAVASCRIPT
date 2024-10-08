//금액 포맷터

/**
 * 금액과 금액 표기 양식을 파라미터로 받고, 해당 포맷에 맞는 문자열로 반환
 * @param {소수점을 포함한 숫자형} amount
 * @param {문자열} format
 * #,### - 금액에 대한 표기 시 3자리마다 콤마(,)를 삽입
 * ￦#,### - 금액에 대한 표기 시 3자리마다 콤마(,)를 삽입하고 금액 맨 앞에는 ￦를 삽입
 * $#,###.## - 금액에 대한 표기 시 3자리마다 콤마(,)를 삽입하고,
 *             소수점 이하 2자리까지 보여주며 소수점 이하가 없으면 생략. 금액 맨 앞에는 $를 삽입
 * $#,###.#0 - 금액에 대한 표기 시 3자리마다 콤마(,)를 삽입하고,
 *             소수점 이하 2자리까지 보여주며 소수점 이하가 없어도 소수점 2자리까지 표시함. 금액 맨 앞에는 $를 삽입
 */
// function convertCurrencyFormat(amount, format) {
//   let currencyUnit = "";

//   //포맷의 첫 문자가 #이 아닌 경우 원 혹은 달러 화폐 단위로 인식하고, 해당 단위를 저장
//   if (format.substring(0, 1) != "#") currencyUnit = format.substring(0, 1);

//   let groupingSeparator = ","; //금액 3자리마다 구분자 기본 값은 콤마로 설정
//   let maxFractionDigits = 0; //소수점 이하 자릿수 기본 값은 0
//   let decimalSeparator = "."; //소수점 이하 구분자 기본 값은 점으로 설정

//   //포맷에 있는 콤마의 인덱스 번호가 점 인덱스 번호보다 작으면 #,###.##과 같이 3자리마다 콤마 구분자를 사용함을 알 수 있음
//   if (format.indexOf(".") === -1) {
//     //점이 없는 경우 소수점 이하는 없으며 3자리마다 콤마 구분자를 사용하는 것을 의미
//     groupingSeparator = ",";
//   } else if (format.indexOf(",") === -1) {
//     //콤마가 없는 경우 소수점 이하는 없으며 3자리마다 점을 구분자로 사용하는 것을 의미
//     groupingSeparator = ".";
//   } else if (format.indexOf(",") < format.indexOf(".")) {
//     //소수점 이하 몇 번째 자리까지 표기해야 하는지를 알기 위해 포맷의 전체 길이와 점 인덱스 번호를 이용
//     //#,###.##인 경우 format.length는 8, format.indexOf(".")는 5
//     //소수점 자릿수는 8-5-1=2
//     groupingSeparator = ",";
//     decimalSeparator = ".";
//     maxFractionDigits = format.length - format.indexOf(".") - 1;
//   } else {
//     //3자리마다 점 구분자를 사용하고 소수점 이하는 콤마
//     groupingSeparator = ".";
//     decimalSeparator = ",";
//     maxFractionDigits = format.length - format.indexOf(",") - 1;
//   }

//   let sign = "";
//   let dec = 1;
//   //소수점 1자리면 10, 2자리면 100, 3자리면 1000
//   for (let i = 0; i < maxFractionDigits; i++) {
//     dec = dec * 10;
//   }
//   //포맷에서 지정한 소수점 자리를 기준으로 반올림 적용한 값을 구함
//   let v = String(Math.round(parseFloat(amount) * dec) / dec);

//   //amount 값이 음수이면 마이너스를 변수 sign에 저장, 부호를 제외한 값을 변수 v에 저장
//   if (v.startsWith("-")) {
//     sign = "-";
//     v = v.substring(1);
//   }

//   //포맷의 제일 마지막 자리 문자가 0이면, 소수점이 없는 금액 값도 해당 소수점 자릿수만큼 보이도록 함
//   if (maxFractionDigits > 0 && format.substring(format.length - 1) === "0") {
//     v = String(parseFloat(v).toFixed(maxFractionDigits)); //toFixed함수를 이용해서 강제로 해당 소수점 자릿수까지 표기
//   }

//   //파라미터로 전달된 금액(amount)이 소수점 이하 값을 포함하고 있는 경우
//   let d = ""; //소수점 이하 값을 저장하기 위한 변수

//   if (maxFractionDigits > 0 && v.indexOf(".") > -1) {
//     d = v.substring(v.indexOf(".")); //amount가 5421339.12이면, 변수 d에는 .12가 저장
//     d = d.replace(".", decimalSeparator); //소수점 구분자인 점(.)을 포맷에서 지정한 소수점 구분자인 decimalSeparator로 변경
//     v = v.substring(0, v.indexOf(".")); //amount가 5421339.12이면, 변수 v에는 5421339가 저장
//   }

//   let r = /(\d+)(\d{3})/; //정규식 (\d+): 숫자1자리이상, (\d{3}): 숫자3자리

//   //파라미터로 전달된 amount의 정수 값을 정규식을 통해 숫자 1자리 이상과 숫자 3자리 패턴이 발견되는 동안 반복문 수행
//   while (r.test(v)) {
//     //amount의 정수 값이 5421339이면
//     //첫 번째 while문에서는 $1에는 5421, $2에는 421
//     //v는 5421,339
//     //두 번째 while문에서는 $1에는 5, $2에는 421
//     //v는 5,421,339
//     v = v.replace(r, ("$1" + groupingSeparator) | "$2"); //$1=5421, $2=339 => 5421,339,  $1=5. $2=421
//   }

//   return sign + currencyUnit + String(v) + String(d);
// }
function convertCurrencyFormat(amount, format) {
  let currencyUnit = ""; //화폐 단위 표기

  //포맷에 제일 첫 문자가 #이 아닌경우 원(₩) 혹은 달러($) 같은 화폐 단위로 인식하고 해당 단위를 currencyUnit에 저장하기 위한 조건문
  if (format.substring(0, 1) != "#") {
    currencyUnit = format.substring(0, 1); //첫 문자 가져오기
  }

  let groupingSeparator = ""; //금액 3자리마다 구분자 기본 값은 콤마(,)로 설정
  let maxFractionDigits = 0; //소수점 이하 자릿수 기본 값은 0
  let decimalSeparator = ""; //소수점 이하 구분자 기본 값은 점(.)으로 설정

  //포맷에 있는 콤마(,)의 인덱스 번호가 점(.) 인덱스 번호 보다 작으면 #,###.## 과 같이 3자리 마다 구분자는 콤마임을 알 수 있음.
  if (format.indexOf(".") == -1) {
    //점(.)이 없는 경우는 소수점 이하는 없고 3자리마다 콤마 구분자를 사용하는 것을 의미함.
    groupingSeparator = ",";
  } else if (format.indexOf(",") == -1) {
    //콤마(,)가 없는 경우는 소수점 이하는 없고 3자리마다 점(.)을 구분자를 사용하는 것을 의미함.
    groupingSeparator = ".";
  } else if (format.indexOf(",") < format.indexOf(".")) {
    //소수점 이하 몇자리까지 표기해야하는지를 알기 위해서 포맷의 전체 길이와 점(.) 인덱스번호를 이용
    //#,###.##인 경우 format.length는 8, format.indexOf(".")는 5
    //소수점 자리수는 8 - 5 - 1 = 2
    groupingSeparator = ",";
    decimalSeparator = ".";
    maxFractionDigits = format.length - format.indexOf(".") - 1;
  } else {
    //3자리마다 구분자를 점(.)을 사용하고 소수점 이하는 콤마(,)
    groupingSeparator = ".";
    decimalSeparator = ",";
    maxFractionDigits = format.length - format.indexOf(",") - 1;
  }

  let sign = ""; //음수라면 마이너스(-) 부호를 저장하기 위한 변수
  let dec = 1;
  //소수점 1자리면 10, 소수점 2자리면 100, 소수점 3자리면 1000
  for (let i = 0; i < maxFractionDigits; i++) {
    dec = dec * 10;
  }

  //포맷에서 지정한 소수점 자리를 기준으로 반올림 적용한 값을 구함.
  let v = String(Math.round(parseFloat(amount) * dec) / dec);

  //amount 값이 음수이면 음수 부호 마이너스(-)을 변수 sign에 저장하고, 부호를 제외한 값을 변수 v에 저장
  if (v.startsWith("-")) {
    sign = "-";
    v = v.substring(1);
  }

  //포맷의 제일 마지막 자리 문자가 0이면, 소수점이 없는 금액 값도 해당 소수점 자리수 만큼 보이도록 하기 위해서 임.
  if (maxFractionDigits > 0 && format.substring(format.length - 1) == "0") {
    v = String(parseFloat(v).toFixed(maxFractionDigits)); //toFixed 함수를 이용해서 강제로 해당 소수점 자리수 까지 표기
  }

  //파라미터로 전달된 금액(amount)가 소수점 이하 값을 포함하고 있는 경우
  let d = ""; //소수점 이하 값을 저장하기 위한 변수

  if (maxFractionDigits > 0 && v.indexOf(".") > -1) {
    d = v.substring(v.indexOf(".")); //amount가 5421339.12이면, 변수 d에는 .12가 저장
    d = d.replace(".", decimalSeparator); //소수점 구분자인 점(.)을 포맷에서 지정한 소수점 구분자인 decimalSeparator로 변경
    v = v.substring(0, v.indexOf(".")); //amount가 5421339.12이면, 변수 v에는 5421338가 저장
  }

  let r = /(\d+)(\d{3})/; //정규식 (\d+) - 숫자 1자리 이상, (\d{3}) - 숫자 3자리

  //파라미티로 전달된 amount의 정수값을 정규식으로 통해서 숫자 1자리 이상과 숫자 3자리 패턴이 발견이 되는 동안 반복문 수행
  while (r.test(v)) {
    //amount의 정수값이 5421338이면
    //첫번째 while문에서는 $1에는 5421, $2에는 338
    //v는 5421,338

    //두번째 while문에서는 $1에는 5, $2에는 421
    //v는 5,421,338
    v = v.replace(r, "$1" + groupingSeparator + "$2"); //$1=5421, $2=338 =>5421,338, $1=5. $2=421
  }
  return sign + currencyUnit + String(v) + String(d);
}
console.log(
  `convertCurrencyFormat(5421338, "#,###"): ${convertCurrencyFormat(
    5421338,
    "#,###"
  )}`
);
console.log(
  `convertCurrencyFormat(5421338, "￦#,###"): ${convertCurrencyFormat(
    5421338,
    "￦#,###"
  )}`
);
console.log(
  `convertCurrencyFormat(5421338, "$#,###.##"): ${convertCurrencyFormat(
    5421338,
    "$#,###.##"
  )}`
);
console.log(
  `convertCurrencyFormat(5421338, "$#,###.#0"): ${convertCurrencyFormat(
    5421338,
    "$#,###.#0"
  )}`
);
console.log(
  `convertCurrencyFormat(5421338.1, "$#,###.#0"): ${convertCurrencyFormat(
    5421338.1,
    "$#,###.#0"
  )}`
);
console.log(
  `convertCurrencyFormat(5421338.12, "$#,###.#0"): ${convertCurrencyFormat(
    5421338.12,
    "$#,###.#0"
  )}`
);
