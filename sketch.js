var arr = Array.from({length: arrLength}, () => Math.round(Math.random()*(100 - 10) + 10));

var maxX = 0;
var minX = 60;
var maxY = 0;
var minY = 20;
var numb = 0;

function setup() {
  createCanvas(800, 500).parent("sketch");
  background(220);
  numb = Math.floor((width - 80)/arrLength);
  minX = 40;
  maxY = height - 40;
  minY = 0;
  drawArray()
}

function draw() {
  switch (_tri) {
    case "Tri à bulles":
      //text('Tri à bulles', 10, 30);
      break;

    case "Tri par tas":
      //text('Tri par tas', 10, 30);
      break;
      
    case "Tri rapide":
      //text('Tri rapide', 10, 30);
      break;
    
    case "Tri fusion":
      //text('Tri fusion', 10, 30);
      break;
    case "Tri par insertion":
      //text('Tri par insertion', 10, 30);
      break;
    default:
      break;
  }
}


function drawArray(){
  for (var i = 0; i < arrLength; i += 1) {
    rect(minX + i*numb, minY, numb, arr[i]*4);
    let tmp = fonSize.get(arrLength);
    push()
    textSize(tmp.size);
    text(arr[i], minX + i*numb + tmp.decalageH, minY + 30);
    pop();
  }

}