//파일을 업로드하는 경우는 다음과 같이 FormData 객체를 사용한다.
//FormData는 HTML의 form 태그에 해당하는 form 필드와 그 값을 나타내는 일련의 키-값 쌍을 쉽게 생성할 수 있게 해주는 객체다.
//일반적인 텍스트 데이터뿐만 아니라 파일을 서버로 전송할 수 있게 해준다.
let formData = new FormData(); //FormData는 파일을 포함한 데이터를 전송할 수 있도록 해주는 객체다
let fileField = document.querySelector('input[type="file"]');

formData.append("username", "abc123");
formData.append("attachment", fileField.files[0]);

fetch("url", {
  method: "POST",
  body: formData,
})
  .then((response) => response.json())
  .catch((error) => console.error("Error", error))
  .then((response) => console.log("Success:", JSON.stringify(response)));

//2개 이상의 다중 파일도 서버 전송 가능
let formData2 = new FormData(); //FormData는 파일을 포함한 데이터를 전송할 수 있도록 해주는 객체다
let fileField2 = document.querySelector('input[type="file"][multiple]');

formData2.append("title", "My photos");
for (let i = 0; i < photos.files.length; i++) {
  formData2.append("photos", photos.files[i]);
}

fetch("url", {
  method: "POST",
  body: formData,
})
  .then((response) => response.json())
  .catch((error) => console.error("Error", error))
  .then((response) => console.log("Success:", JSON.stringify(response)));
