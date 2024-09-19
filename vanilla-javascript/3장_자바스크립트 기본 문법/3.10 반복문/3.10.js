let brands = ["애플", "구글", "페이스북", "아마존", "삼성전자"];
let productList = [
  {
    name: "솔의눈",
    price: 700,
  },
  {
    name: "솔의눈",
    price: 700,
  },
  {
    name: "커피",
    price: 700,
  },
  {
    name: "파워에이드",
    price: 1200,
  },
  {
    name: "보리차",
    price: 1200,
  },
  {
    name: "밀키스",
    price: 800,
  },
];

let person = {
  fname: "john",
  lname: "doe",
  age: 25,
};

//for-in문
//배열뿐만 아니라 객체에도 사용할 수 있는 반복문이다
//객체는 데이터를 저장할 때 키를 사용하여 저장하고, 키를 이용해서 읽을 수 있다.
//for-in문은 객체 내에 정의된 키 값의 수만큼 코드 블록을 수행한다.
//for-in문은 배열에 등록된 데이터 수만큼 반복문을 실행한다.
for (const key in person) {
  console.log(`key: ${key}`); //fname, lname, age
  console.log(`person[key]: ${person[key]}`); //john, doe, 25
}
console.log("---------------------------------------------");
for (const idx in brands) {
  console.log(idx); //배열의 인덱스 출력
  console.log(brands[idx]);
}
console.log("---------------------------------------------");
for (const idx in productList) {
  console.log(idx); //배열의 인덱스 출력
  console.log(productList[idx]);
  console.log(productList[idx].name);
}
