/*
TO DO

- convert hr to 12 hr clock and show am/pm
- add small date above the time e.g. jan, feb, mar, apr, etc.


*/

const displayHours = document.getElementById("displayHours");
const displayMinutes = document.getElementById("displayMinutes");
const displaySeconds = document.getElementById("displaySeconds");
const colon = document.getElementById("colon");

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

function displayTime() {
  getCurrentTime();
  displayHours.innerText = checkNumLength(hours);
  displayMinutes.innerText = checkNumLength(minutes);
  displaySeconds.innerText = checkNumLength(seconds);
}

// displayTime();

// setInterval(displayTime, 1000);

function getCurrentTime() {
  const currentMilliseconds = Date.now();
  const date = new Date(currentMilliseconds);

  hours = date.getHours().toString();
  minutes = date.getMinutes().toString();
  seconds = date.getSeconds().toString();
}

// setInterval( getCurrentTime, 1000 );
