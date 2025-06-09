//Object 객체
/**
 * 내장 객체는 브라우저의 자바스크립트 엔진에 내장된 객체를 말한다.
 * Object 객체는 모든 자바스크립트 객체의 루트 객체이다.
 */

let person = new Object();
person.firstName = "john";
person.lastName = "doe";
person.age = 30;
person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(person.getFullName());
