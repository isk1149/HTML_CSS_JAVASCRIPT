/*
| 자료형       | 설명                  | 예시                                | typeof 결과                    |
| ------------| -----------          | ---------------------------------   | ----------------------------- |
| number      | 숫자 (정수, 실수)      | 42, 3.14, NaN, Infinity             | "number"                      |
| string      | 문자열                | "hello", 'a'                        | "string"                      |
| boolean     | 논리값                | true, false                         | "boolean"                     |
| undefined   | 값이 할당되지 않음      | let a; → a                          | "undefined"                   |
| null        | 명시적인 "없음"        | let a = null                        | "object"(자바스크립트의 버그로 인해) |
| symbol      | 고유한 식별자          | Symbol("id")                        | "symbol"                      |
| bigint      | 아주 큰 정수           | 123456789012345678901234567890n     | "bigint"                      |
| object      | 참조형 데이터, 배열·객체 | {}, [], null                        | "object"                      |
| function    | 함수(object의 특수 형태)| function() {}                       | "function"                    |
typeof null === "object": 자바스크립트 초기 구현 오류이지만 호환성 때문에 유지됨.
배열은 typeof로는 "object"로 나오므로 배열인지 여부는 Array.isArray()로 확인해야 함.
함수는 내부적으로 객체지만 typeof는 "function"으로 따로 구분됨.
*/

// 1. String
// "", '' 모두 사용 가능
let name11 = "John";
let name12 = "He is 'John'";
let name13 = 'He is "John"'; // "He is \"John\"""
console.log(`name11: ${name11}, name12: ${name12}, name13: ${name13}`);

let name21 = "John";
let name22 = 'He is "John"';
let name23 = "He is 'John'"; //'He is \'John\''
console.log(`name11: ${name21}, name12: ${name22}, name23: ${name23}`);

let name31 = "역슬래시: \\";
let name32 = "역슬래시 \\";
console.log(`name31: ${name31}, name32: ${name32}`);

// 2. Number
// 자바스크립트는 integer, short, long, decimal 등의 숫자 타입 구분이 없다.
// 자바스크립트에서 숫자는 항상 64비트 부동소수점으로 저장된다.( 이로 인한 문제점은 3.7에서 다룸 )
let x1 = 34.13;
let x2 = 34;

// 3. Boolean
let x = 1;
let y = 1;
let z = 2;
console.log(`x===y: ${x === y}, x===z:${x === z}`);
console.log(`true: ${true}, false: ${false}`);

// 4. undefined
// undefined는 데이터 타입이자 값이다. 단어 그대로 아무것도 존재하지 않는다는 표현으로 생각하면 된다.
// 변수를 선언하고 값을 할당하지 않으면 런타임 시점에 해당 변수를 사용하려고 할 때 undefined가 자동으로 할당되어 출력된다.
let car;
console.log(`car: ${car}`);

// 5. Null
// null도 데이터 타입이자 값이다.
// undefined는 웹 브라우저에서 자바스크립트를 실행할 때 값이 할당되지 않은 변수에 대해 자동으로 undefined를 할당한다.
// 개발자가 아니라 브라우저 엔진이 할당하고 리턴해주는 값이다.

// null은 개발자가 명시해서 사용한다.
// 선언된 변수에 아직 어떤 값을 할당할지 모르거나 어떤 데이터 타입이 할당될지 모를 경우 개발자가 명시적으로 null을 사용할 수 있다.

// 즉 null은 개발자가 의도해서 사용하는 경우, undefined는 개발자가 의도하지 않은 경우라고 봐도 무방하다.
let bus = null;
console.log(`bus: ${bus}`);

// 또한 null은 자바스크립트의 메모리를 효율적으로 관리하고 싶을 때 적절히 사용할 수 있다.
/*
변수에 null을 할당하면 변수가 이전에 참조하던 값을 더 이상 참조하지 않게 된다.
변수가 선언되고 값이 할당되면 값은 메모리의 특정 위치에 저장된다.
변수는 메모리에 저장된 위치를 기억하게 된다.
이렇게 메모리의 특정 위치를 참조하고 기억하고 있는 변수에 null을 할당하면 메모리의 특정 위치에 대한 참조가 제거된다.
자바스크립트 엔진은 가비지 콜렉션을 특정 주기마다 실행하고 참조 중이 아닌 메모리의 공간을 비우는 작업을 하게 된다.
즉 더 이상 참조가 필요 없는 변수에 대해 null을 할당하면 메모리 공간을 확보할 수 있게 된다.
*/

// 6. Symbol
// 4.11에서 다룬다.
