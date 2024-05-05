let day = document.getElementById("day");
let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let coundown = () => {
  let currentTime = new Date();
  let baqraEid = new Date("16 June 2024");

  let operation = baqraEid - currentTime;

  let operationInSecond = Math.floor(operation / 1000) % 60;
  let operationInMinutes = Math.floor(operation / 1000 / 60) % 60;
  let operationInHours = Math.floor(operation / 1000 / 60 / 60) % 24;
  let operationInDays = Math.floor(operation / 1000 / 60 / 60 / 24);

  if (operationInSecond < 10) {
    operationInSecond = "0" + operationInSecond;
  }
  if (operationInMinutes < 10) {
    operationInMinutes = "0" + operationInMinutes;
  }
  if (operationInHours < 10) {
    operationInHours = "0" + operationInHours;
  }
  if (operationInDays < 10) {
    operationInDays = "0" + operationInDays;
  }

  day.innerHTML = operationInDays;
  hour.innerHTML = operationInHours;
  min.innerHTML = operationInMinutes;
  sec.innerHTML = operationInSecond;
};
coundown();

setInterval(coundown, 1000);
