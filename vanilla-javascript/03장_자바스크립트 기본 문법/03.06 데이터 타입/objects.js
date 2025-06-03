// 여기서는 Object, Array만 다뤄보고 나머지는 챕터4에서 다룬다.

// Object는 키-값 쌍으로 데이터를 저장한다.
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  blackEyeColor: true,
};
console.log(person); // 이렇게 객체를 바로 콘솔에 찍으면 json 형태로 나옴
console.log(`person: ${person}`);
console.log("person: " + person);
console.log(`person.toString(): ${person.toString()}`);
// 자바스크립트에서 객체를 문자열 출력 시 객체의 toString() 메서드가 실행됨. 객체를 문자열로 변환할 때 호출되는 기본 함수
// 자바스크립트의 모든 객체는 Object를 상속받고 기본 Object.prototype.toString()의 정의는 다음과 같다
// Object.prototype.toString.call(obj); // "[object " + 타입명 + "]" -> "[object Object]"를 반환
/*
Object.prototype.toString.call([]);         // "[object Array]"
Object.prototype.toString.call(() => {});   // "[object Function]"
Object.prototype.toString.call(null);       // "[object Null]"
Object.prototype.toString.call(undefined);  // "[object Undefined]"
Object.prototype.toString.call("test");     // "[object String]"
Object.prototype.toString.call(3.14);       // "[object Number]"
Object.prototype.toString.call({x:1, y:2}); // "[object Object]"

객체에서 toString() 오버라이딩 가능
const person = {
  name: "Alice",
  toString() {
    return `Person: ${this.name}`;
  }
};
console.log(`${person}`);  // Person: Alice
*/

console.log(`person: ${JSON.stringify(person)}`);

// 객체의 데이터를 변경하는 법
person["age"] = 51;
console.log(`person.age: ${person["age"]}`);

person.age = 52;
console.log(`person.age: ${person.age}`);

// Array
// 하나 이상의 다중 데이터를 저장할 수 있다. 배열에 저장된 데이터는 순서를 가진다.
const cars = ["saab", "volov", "bmw"];
console.log(`cars[0]: ${cars[0]}`);

const personArray = [person];
console.log(`personArray[0]: ${personArray[0]}`);
personArray[1] = person;
console.log(`personArray[1]: ${JSON.stringify(personArray[1])}`);

// 3. typeof
// 자바스크립트에서는 typeof 연산자를 이용해 현재 변수의 데이터 타입을 알아낼 수 있다.
console.log(`typeof "John": ${typeof "John"}`);
console.log(`typeof 3.14: ${typeof 3.14}`);
console.log(`typeof true: ${typeof true}`);
console.log(`typeof { x: 1, y: 2 }: ${typeof { x: 1, y: 2 }}`);
console.log(`typeof [1, 2, 3]: ${typeof [1, 2, 3]}`); // 배열도 자바스크립트에서는 Object이기 때문에 데이터 타입은 Array가 아니라 Object이다.
console.log(`typeof undefined: ${typeof undefined}`);
console.log(`typeof null: ${typeof null}`);

let value;
console.log(`typeof value: ${typeof value}`);

// undefined, null을 정확히 체크할 경우
if (value === null) {
  // null인 경우
  console.log("value === null");
}

if (value === undefined) {
  // undefined인 경우
  console.log("value === undefined");
}

// undefined, null을 동시에 체크할 경우
if (value == null) {
  // null 또는 undefined인 경우 (느슨한 비교)
  console.log("value == null");
}
