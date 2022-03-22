var dohorizontal = false;
var dovertical = false;
var docoloring = false;
var doscoring = false;
var doMcoloring = false;
var step;



let tris = document.querySelectorAll(".tri");
tris.forEach(function(tri) {
    tri.addEventListener("click", function(e) {
        document.getElementById("algo").innerHTML = e.target.innerHTML
   });
  });

const slider = document.getElementById("myRange");
const output = document.getElementById("demo");

output.innerHTML = slider.value;
step = parseInt(slider.value);

slider.oninput = function() {
  output.innerHTML = this.value;
  step = parseInt(this.value)
  clear();
    setup();
}



function setbools(a, b, c, d, e){
    dohorizontal = a;
    dovertical = b;
    docoloring = c;
    doscoring = d;
    doMcoloring = e;
}
