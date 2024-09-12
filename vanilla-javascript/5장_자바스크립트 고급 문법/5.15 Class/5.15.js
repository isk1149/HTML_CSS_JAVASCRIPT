//class는 반드시 constructor 함수를 가진다
//constructor는 하나만 존재 가능하다
//constructor는 클래스를 생성할 때 필요한 기본 값을 파라미터로 전달받고
//클래스 객체에 변수로 등록하는 코드를 구현한다. 이때 this 키워드를 사용한다.

//자바처럼 별도의 필드를 선언하지는 않는 듯
export class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }

  getModelName() {
    return this.modelName;
  }

  getModelYear() {
    return this.modelYear;
  }

  getType() {
    return this.type;
  }

  getPrice() {
    return this.price;
  }

  setModelName(modelName) {
    this.modelName = modelName;
  }

  setModelType(modelType) {
    this.modelType = modelType;
  }

  setType(type) {
    this.type = type;
  }

  setPrice(price) {
    this.price = price;
  }
}

let genesis = new Car("제네시스", "2021", "g", 7000);
genesis.setPrice(8000);
