//date formatter

function getCurrentDate(format) {
  let date = new Date();
  console.log(`date: ${date}`);
  let year = date.getFullYear();
  console.log(`year: ${year}`);
  let month = date.getMonth() + 1;
  console.log(`month: ${month}`);
  month = month.toString().padStart(2, 0);
  console.log(`month: ${month}`);
  let day = date.getDate();
  day = day.toString().padStart(2, 0);
  console.log(`day: ${day}`);
  format = format.replace("YYYY", year);
  format = format.replace("MM", month);
  format = format.replace("DD", day);

  return format;
}

console.log(getCurrentDate("YYYY-MM-DD"));
console.log(getCurrentDate("DD.MM.YYYY"));

function convertDateFormat(yyyymmdd, format) {
  let year = yyyymmdd.substr(0, 4);
  let month = yyyymmdd.substr(4, 2);
  let day = yyyymmdd.substr(6, 2);
  format = format.replace("YYYY", year);
  format = format.replace("MM", month);
  format = format.replace("DD", day);

  return format;
}

console.log(convertDateFormat("20210702", "YYYY.MM.DD"));

function getIntervalDate(intervalDay, format) {
  let now = new Date();
  console.log(`now: ${now}`);
  console.log(`now.getTime(): ${now.getTime()}`);
  let millisecondsOneDay = 60 * 60 * 24 * 1000;
  let newDate = new Date(now.getTime() + millisecondsOneDay * intervalDay);

  let year = newDate.getFullYear();
  console.log(`year: ${year}`);
  let month = newDate.getMonth() + 1;
  console.log(`month: ${month}`);
  month = month.toString().padStart(2, 0);
  console.log(`month: ${month}`);
  let day = newDate.getDate();
  day = day.toString().padStart(2, 0);
  console.log(`day: ${day}`);
  format = format.replace("YYYY", year);
  format = format.replace("MM", month);
  format = format.replace("DD", day);

  return format;
}

console.log(getIntervalDate(5, "YYYY-MM-DD"));
console.log(getIntervalDate(-5, "DD.MM.YYYY"));
