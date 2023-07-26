const timerDiv = document.getElementById("container");
const start = document.getElementById("startBtn");
let countDownElement = document.getElementById("countdown");
let restartbtn = document.createElement("button");
let timerValue = 30;
let timerInterval;

restartbtn.innerText = "🔄";
restartbtn.style.display = "block";

function startTimer() {
  start.style.display = "none";
  timerInterval = setInterval(updateTimer, 1000);
  timerDiv.style.backgroundColor = "#38e54d";
  countDownElement.style.color = "black";
}

function updateTimer() {
  countDownElement.innerText = timerValue;
  timerValue--;

  if (timerValue < 10) {
    countDownElement.style.color = "red";
  }

  if (timerValue < 0) {
    clearInterval(timerInterval);
    timerDiv.style.backgroundColor = "red";
    countDownElement.style.color = "white";
    timerValue = `Time Out!`;
    countDownElement.innerText = timerValue;
    restartbtn.style.display = "block";
    timerDiv.appendChild(restartbtn);
  }
}

function restartTimer() {
  timerValue = 30;
  countDownElement.innerText = timerValue;
  countDownElement.style.color = "black";
  restartbtn.style.display = "none";
  start.style.display = "block";
  timerDiv.style.backgroundColor = "#2192FF";
  countDownElement.style.color = "white";
}

start.addEventListener("click", startTimer);
restartbtn.addEventListener("click", restartTimer);
