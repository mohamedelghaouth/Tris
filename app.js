var _tri = "";

var arrLength;
var isOver = false;

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function() {
  reset()
});

const stopButton = document.querySelector("#stop");
stopButton.addEventListener("click", function() {
  stop()
});

const startButton = document.querySelector("#start");
startButton.addEventListener("click", function() {
  start()
});

document.addEventListener("DOMContentLoaded", function(){
  _tri = content.get("Tri à bulles").title
  document.getElementById("algo").innerHTML            = content.get("Tri à bulles").title
  document.getElementById("algoExplanation").innerHTML = content.get("Tri à bulles").content
})

let tris = document.querySelectorAll(".tri");
tris.forEach(function(tri) {
    tri.addEventListener("click", function(e) {
      _tri = content.get(e.target.innerHTML).title
      document.getElementById("algo").innerHTML = content.get(e.target.innerHTML).title
      document.getElementById("algoExplanation").innerHTML = content.get(e.target.innerHTML).content
      clear();
      setup();
      initializeRunners();
      loop();
   });
  });

const slider = document.getElementById("myRange");
const output = document.getElementById("demo");

output.innerHTML = slider.value;
arrLength = parseInt(slider.value);

slider.oninput = function() {
  output.innerHTML = this.value;
  arrLength = parseInt(this.value)
  reset()
}

function reset(){
  arr = Array.from({length: arrLength}, () => Math.round(Math.random()*(100 - 10) + 10))
  clear();
  setup();
  initializeRunners();
  loop();
}

function stop(){
  noLoop()
}

function start(){
  if (isOver) {
    reset()
    isOver = false
  } else {
    loop()
  }
}