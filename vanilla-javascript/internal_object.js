console.log("--------------------------------------");
let person2 = new Object();
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 1200;
person2.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

console.log(person2.getFullName());

let txt = "1 asasd";
console.log(txt.length);
console.log(txt.indexOf("as"));
console.log(txt.lastIndexOf("as"));
console.log(txt.slice(3, 4));

let visit = "Please visit Seoul and Seoul!";
console.log(visit.replace(/Seoul/g, "JejU"));

console.log(visit.toUpperCase());
console.log(visit.toLowerCase());

let str3 = "     abc     ";
console.log(str3);
console.log(str3.trim());
console.log(visit.concat("   ", "@@", "          ", "#"));

let str4 = "5555";
console.log(str4.padStart(4, 0));

let birthday = "2024-01-02";
console.log(birthday.split("-"));

let url = "https://example.com";
if (url.startsWith("https://") || url.startsWith("http://")) {
  console.log("올바른 url입니다.");
} else {
  console.log("url이 올바르지 않습니다.");
}

let file = "abc.pdf";
if (file.endsWith(".pdf")) {
  console.log("pdf파일입니다.");
} else {
  console.log("pdf 파일이 아닙니다.");
}
