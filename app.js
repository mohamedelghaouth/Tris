var _tri = "";

var arrLength;

const resetbuttton = document.querySelector("#reset");
resetbuttton.addEventListener("click", function() {
  reset()
});

const stopbuttton = document.querySelector("#stop");
stopbuttton.addEventListener("click", function() {
  stop()
});

const startbuttton = document.querySelector("#start");
startbuttton.addEventListener("click", function() {
  start()
});

document.addEventListener("DOMContentLoaded", function(){
  _tri = content.get("Tri à bulles").title
  document.getElementById("algo").innerHTML = content.get("Tri à bulles").title
  document.getElementById("algoExplanation").innerHTML = content.get("Tri à bulles").content
  document.getElementById("links").innerHTML = content.get("Tri à bulles").links
})

let tris = document.querySelectorAll(".tri");
tris.forEach(function(tri) {
    tri.addEventListener("click", function(e) {
      _tri = content.get(e.target.innerHTML).title
      document.getElementById("algo").innerHTML = content.get(e.target.innerHTML).title
      document.getElementById("algoExplanation").innerHTML = content.get(e.target.innerHTML).content
      document.getElementById("links").innerHTML = content.get(e.target.innerHTML).links
      clear();
      setup();
      initialezRunners();
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
  initialezRunners();
  loop();
}

function stop(){
  noLoop()
}

function start(){
  loop()
}