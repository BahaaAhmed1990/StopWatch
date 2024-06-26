// console.log("first");

const hours = document.querySelector(".hours");
const minutes = document.querySelector(".mintues");
const seconds = document.querySelector(".seconds");
const startBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");
const resetBtn = document.querySelector("#reset-btn");

let hoursCounter = 0;
let mintuesCounter = 0;
let secondsCounter = 0;
let intervalId;

function startTimer() {
  secondsCounter++;
  if (secondsCounter === 59) {
    mintuesCounter++;
    secondsCounter = 0;
    if (mintuesCounter === 59) {
      hoursCounter++;
      mintuesCounter = 0;
    }
  }
  // console.log("seconds", secondsCounter);
  // console.log("minutes", mintuesCounter);
  // console.log("seconds", hoursCounter);

  seconds.textContent = `${secondsCounter}`;
  minutes.textContent = `${mintuesCounter}`;
  hours.textContent = `${hoursCounter}`;
  if (secondsCounter < 10) {
    seconds.textContent = `0${secondsCounter}`;
  }
  if (mintuesCounter < 10) {
    minutes.textContent = `0${mintuesCounter}`;
  }
  if (hoursCounter < 10) {
    hours.textContent = `0${hoursCounter}`;
  }
}

startBtn.addEventListener("click", function () {
  if (!intervalId) {
    intervalId = setInterval(startTimer, 1000);
  }
});
stopBtn.addEventListener("click", function () {
  clearInterval(intervalId);
});
resetBtn.addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null;
  hoursCounter = 0;
  minutesCounter = 0;
  secondsCounter = 0;
  hours.textContent = "00";
  minutes.textContent = "00";
  seconds.textContent = "00";
});
