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
  document.getElementById("algoExplanation").innerHTML =
    content.get("Tri à bulles").content;
});

let tris = document.querySelectorAll(".tri");
tris.forEach(function (tri) {
  tri.addEventListener("click", function (e) {
    _tri = content.get(e.target.innerHTML).title;
    document.getElementById("algo").innerHTML = content.get(
      e.target.innerHTML
    ).title;
    document.getElementById("algoExplanation").innerHTML = content.get(
      e.target.innerHTML
    ).content;
    if (_tri == "Tri fusion") {
      isMergeSort = true;
      disableSlider();
    } else {
      isMergeSort = false;
      enableSlider();
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
    disableSlider();
    isOver = false;
    isDone = false;
  } else {
    enableSlider();
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
  disableSlider();
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

function disableSlider() {
  if (isMergeSort) {
    slider.disabled = true;
  }
}

function enableSlider() {
  slider.disabled = false;
}

function enableSliderSecond(bool) {
  slider.disabled = !bool;
}
