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
  start.style.display = "none";
  countDownElement.style.display = "block";
  countDownElement.innerText = timerValue;
  timerDiv.style.backgroundColor = "#38e54d";
  countDownElement.style.color = "black";
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  timerValue--; ///IMPORTANT this goes first so that we can avoid delay when the timer starts
  countDownElement.innerText = timerValue;
  // console.log(timerValue);

  if (timerValue < 10) {
    countDownElement.style.color = "red";
  }

  if (timerValue < 5) {
    countDownElement.classList.add("flashing");
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
