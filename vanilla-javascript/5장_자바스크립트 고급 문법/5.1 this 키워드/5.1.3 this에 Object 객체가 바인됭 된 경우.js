let person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    //object에서는 키에 대한 값으로 함수를 선언하면, 함수 내에서 object의 다른 키를 접근할 때는 this 키워드를 사용한다.
    //이때 this는 object 그 자체(여기서는 person)가 되기 때문에 this 키워드를 통해 object에 저장된 데이터에 키로 접근할 수 있다
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName());
