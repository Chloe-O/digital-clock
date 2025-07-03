const displayHours = document.getElementById("displayHours");
const displayMinutes = document.getElementById("displayMinutes");
const displaySeconds = document.getElementById("displaySeconds");
const colon = document.getElementById("colon");

const displayAM = document.getElementById("am");
const displayPM = document.getElementById("pm");

let hours;
let minutes;
let seconds;

function checkNumLength(num) {
  if (num.length < 2) {
    return `0${num}`;
  } else {
    return num;
  }
}

function checkAmPm(currentHr) {
  if (currentHr < 12) {
    displayAM.classList.add("active");
    displayPM.classList.remove("active");
  } else {
    displayPM.classList.add("active");
    displayAM.classList.remove("active");
  }
}

function displayTime() {
  getCurrentTime();
  displayHours.innerText = checkNumLength(hours);
  displayMinutes.innerText = checkNumLength(minutes);
  displaySeconds.innerText = checkNumLength(seconds);
}

function getCurrentTime() {
  const currentMilliseconds = Date.now();
  const date = new Date(currentMilliseconds);

  hours = date.getHours().toString();
  minutes = date.getMinutes().toString();
  seconds = date.getSeconds().toString();

  checkAmPm(hours);
}

setInterval(displayTime, 1000);
