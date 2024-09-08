function getData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
  xhr.setRequestHeader("conetent-type", "application/json");
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      const res = JSON.parse(xhr.response);
      console.log(res);
      return res;
    } else {
      console.error(xhr.status, xhr.statusText);
      return;
    }
  };
}

//getData() 함수를 먼저 호출한 후 결과 데이터를 콘솔창에 출력하기 위한 코드가 있지만
//이 코드가 실행되는 시점에는 undefined로 뜬다.
//그리고 "다음 코드를 실행합니다."를 출력하고 나서야 서버로부터 받은 응답이 콘솔에서 보인다
const res = getData();
console.log(res);
console.log("다음 코드를 실행합니다.");

//클라이언트에서 서버로 요청을 보내고 서버로부터 응답받은 데이터를 이용하여 구현해야 하는 코드가 있다면 이런 문제가 발생한다.
//이때 Promise를 사용하면 응답이 완료된 후 호출되는 then() 함수를 통해 결과를 받고 나서 구현해야할 코드를 작성할 수 있다
