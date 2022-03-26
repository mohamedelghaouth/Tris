var arr = Array.from({length: arrLength}, () => Math.round(Math.random()*(100 - 10) + 10));

var maxX = 0;
var minX = 60;
var maxY = 0;
var minY = 20;
var numb = 0;

var i = arrLength - 1;
var j = 0;

var isOver = false;

function setup() {
  createCanvas(800, 500).parent("sketch");
  frameRate(1)
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
        bubbleSort();
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


function drawArray(color){
  for (var k = 0; k < arrLength; k += 1) {
    if(k > i){
      push()
      fill("Aqua");
      rect(minX + k*numb, minY, numb , arr[k]*4);
      pop();
    } else if(k == j){
      push()
      fill("green");
      rect(minX + k*numb, minY, numb , arr[k]*4);
      pop();
    } else if(k == j + 1){
      push()
      fill("yellow");
      rect(minX + k*numb, minY, numb , arr[k]*4);
      pop();
    } else {
      rect(minX + k*numb, minY, numb, arr[k]*4);
    }


    let tmp = fonSize.get(arrLength);
    push()
    textSize(tmp.size);
    text(arr[k], minX + k*numb + tmp.decalageH, minY + 30);
    pop();

  }

}

function bubbleSort(){
  var tmp = 0;

  if(arr[j] > arr[j + 1]) {
    clear();
    setup();
    drawArray();
    tmp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = tmp;
  } 

  clear();
  setup();
  drawArray();

  if(j < i){
    j++;
  }

  if(j >= i) {
    j = 0;
    i--;
  } 

  if(i == 0 ){
    noLoop()
  }
}