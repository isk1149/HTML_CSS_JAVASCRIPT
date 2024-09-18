function changeBorder() {
  let text1 = document.getElementById("text1");
  if (text1.value !== "") {
    text1.className = "border-green";
  }
}

function showEmail() {
  document.getElementById("divEmail").style.display = "";
}

function hideEmail() {
  document.getElementById("divEmail").style.display = "none";
}

function doSave() {
  let text1 = document.getElementById("text1");
  if (text1.value == "") {
    text1.className = "border-red";
    return alert("필수값들을 입력하세요.");
  }
  console.log("doSave를 실행합니다.");
}

function doChange(obj) {
  if (obj.value == "KO") {
    document.getElementById("select2").style.display = "";
  } else {
    document.getElementById("select2").style.display = "none";
  }
}
