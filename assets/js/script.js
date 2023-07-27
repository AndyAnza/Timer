const timerDiv = document.getElementById("container");
const start = document.getElementById("startBtn");
let countDownElement = document.getElementById("countdown");
let restartbtn = document.createElement("button");
let timerValue = 30;
let timerInterval;

countDownElement.style.display = "none";
restartbtn.innerText = "Time Up"; //
restartbtn.style.display = "block";

function startTimer() {
  countDownElement.style.display = "block";
  countDownElement.innerText = timerValue;
  start.style.display = "none";
  timerDiv.style.backgroundColor = "#38e54d";
  countDownElement.style.color = "black";
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  countDownElement.innerText = timerValue;
  timerValue--;

  if (timerValue < 10) {
    countDownElement.style.color = "red";
  }

  if (timerValue < 5) {
    countDownElement.classList.add("flashing");
    // timerDiv.style.backgroundColor = "red";
  }

  if (timerValue < 0) {
    clearInterval(timerInterval);
    timerDiv.style.backgroundColor = "red";
    countDownElement.classList.remove("flashing");
    countDownElement.style.display = "none";
    restartbtn.style.display = "block";
    timerDiv.appendChild(restartbtn);
  }
}

function restartTimer() {
  timerValue = 30;
  countDownElement.innerText = timerValue;
  countDownElement.style.display = "none";
  restartbtn.style.display = "none";
  start.style.display = "block";
  timerDiv.style.backgroundColor = "#2192FF";
  countDownElement.style.color = "white";
}

start.addEventListener("click", startTimer);
restartbtn.addEventListener("click", restartTimer);
