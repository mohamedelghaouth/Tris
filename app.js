/** @format */

var _tri = "";

var arrLength;
var isOver = false;
var isStopped = false;
var isMergeSort = true;

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function () {
  reset();
});

const stopButton = document.querySelector("#stop");
stopButton.addEventListener("click", function () {
  stop();
});

const startButton = document.querySelector("#start");
startButton.addEventListener("click", function () {
  start();
});

document.addEventListener("DOMContentLoaded", function () {
  isMergeSort = false;
  _tri = content.get("Tri à bulles").title;
  document.getElementById("algo").innerHTML = content.get("Tri à bulles").title;
});

let tris = document.querySelectorAll(".tri");
tris.forEach(function (tri) {
  tri.addEventListener("click", function (e) {
    _tri = content.get(e.target.id).title;
    document.getElementById("algo").innerHTML = content.get(e.target.id).title;
    if (_tri == "Tri fusion") {
      isMergeSort = true;
      disableSliderAndButtons();
    } else {
      isMergeSort = false;
      enableSliderAndButtons();
    }
    reset();
  });
});

const slider = document.getElementById("myRange");
const output = document.getElementById("demo");

output.innerHTML = slider.value;
arrLength = parseInt(slider.value);

slider.oninput = function () {
  output.innerHTML = this.value;
  arrLength = parseInt(this.value);
  if (isMergeSort) {
    disableSliderAndButtons();
    isOver = false;
    isDone = false;
  } else {
    enableSliderAndButtons();
  }
  clear();
  noLoop();
  reset();
};

function reset() {
  isOver = false;
  isDone = false;
  isStopped = false;

  count = 0;
  arr = Array.from({ length: arrLength }, () =>
    Math.round(Math.random() * (100 - 10) + 10)
  );
  disableSliderAndButtons();
  clear();
  setup();
  initializeRunners();
  loop();
}

function stop() {
  if (!isStopped) {
    noLoop();
  } else {
    loop();
  }
  isStopped = !isStopped;
}

function start() {
  if (isOver) {
    reset();
    isOver = false;
    isDone = false;
  } else {
    loop();
    isStopped = false;
  }
}

function disableSliderAndButtons() {
  if (isMergeSort) {
    slider.disabled = true;
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = true;
    document.getElementById("reset").disabled = true;
  }
}

function enableSliderAndButtons() {
  slider.disabled = false;
  document.getElementById("start").disabled = false;
  document.getElementById("stop").disabled = false;
  document.getElementById("reset").disabled = false;
}

function enableSliderAndButtonsWithBoolean(bool) {
  slider.disabled = !bool;
  document.getElementById("start").disabled = !bool;
  document.getElementById("stop").disabled = !bool;
  document.getElementById("reset").disabled = !bool;
}
