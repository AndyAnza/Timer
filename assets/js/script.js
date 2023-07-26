const start = document.getElementById("startBtn");
let countDownElement = document.getElementById("countdown");
let restartbtn = document.createElement("button");
let timerValue = 20;
let timerInterval;

restartbtn.innerText = "Restart";
restartbtn.style.display = "block";

function startTimer() {
  start.style.display = "none";
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  countDownElement.innerText = timerValue;
  timerValue--;

  if (timerValue <= 10) {
    countDownElement.style.color = "red";
  }

  if (timerValue < 0) {
    clearInterval(timerInterval);
    restartbtn.style.display = "block";
    const timerDiv = document.getElementById("container");
    timerDiv.appendChild(restartbtn);
  }
}

function restartTimer() {
  clearInterval(timerInterval);
  timerValue = 20;
  countDownElement.innerText = timerValue;
  countDownElement.style.color = "black";
  restartbtn.style.display = "none";
  start.style.display = "block";
}

start.addEventListener("click", startTimer);
restartbtn.addEventListener("click", restartTimer);
