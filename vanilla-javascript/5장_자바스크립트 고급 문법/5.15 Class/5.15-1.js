//클래스를 상속받아 새로운 클래스를 정의 가능
//부모 클래스에 정의된 변수, 함수 등 모든 특성을 그대로 사용할 수 있고,
//자식 클래스는 추가적인 부분만 정의하면 된다

import { Car } from "./5.15.js";

class ElectricCar extends Car {
  constructor(modelName, modelYear, price, chargeTime) {
    super(modelName, modelYear, "e", price);
    this.chargeTime = chargeTime;
  }

  getChargeTime() {
    return this.chargeTime;
  }

  setChargeTime(chargeTime) {
    this.chargeTime = chargeTime;
  }

  toString() {
    return `modelName: ${this.modelName}, modelType: ${this.modelType}, type: ${this.type}, price: ${this.price}, chargeTime: ${this.chargeTime}`;
  }
}

let ionic = new ElectricCar("아이오닉", "2021", 4000, 60);
console.log(ionic.toString());
