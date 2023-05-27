const RECTSIZE = 4

var arr = Array.from({length: arrLength}, () => Math.round(Math.random()*(100 - 10) + 10));

var maxX = 0;
var minX = 60;
var maxY = 0;
var minY = 20;
var numb = 0;
var highlighted  = false;


function setup() {
  createCanvas(0.8*windowWidth, 0.5*windowHeight).parent("sketch");
  frameRate(fonSize.get(arrLength).frameRate)
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

function drawArray(_highlighted){
  for (var k = 0; k < arrLength; k += 1) {
    //Draw the rect
    rect(minX + k*numb, minY, numb, arr[k]*RECTSIZE);
    //Get the Font Size: it depend on the array length
    let tmp = fonSize.get(arrLength);
    let size = getSize(tmp.size);
    // Put the value inside the rectangle
    push()
    textSize(size);
    text(arr[k], minX + k*numb + tmp.decalageH, minY + 30);
    pop();

  }

}

function drawArrayBubbleSort(_highlighted){
  for (var k = 0; k < arrLength; k += 1) {
    if(k > iBulles){
      push()
      fill("Aqua");
      rect(minX + k*numb, minY, numb , arr[k]*4);
      pop();
    } else if(k == jBulles){
      push()
      if(_highlighted){
        fill("green");
      } else {
        fill("red");
      }
      rect(minX + k*numb, minY, numb , arr[k]*4);
      pop();
    } else if(k == jBulles + 1){
      push()
      if(_highlighted){
        fill("yellow");
      } else {
        fill("red");
      }      
      rect(minX + k*numb, minY, numb , arr[k]*4);
      pop();
    } else {
      rect(minX + k*numb, minY, numb, arr[k]*4);
    }

    // Put the value inside the rectangle
    let tmp = fonSize.get(arrLength);
    let size = getSize(tmp.size);
    console.log("🚀 ~ file: sketch.js:97 ~ drawArrayBubbleSort ~ tmp:", size)
    push()
    textSize(size);
    text(arr[k], minX + k*numb + tmp.decalageH, minY + 30);
    pop();

  }

}

function getSize(size){
  let sizeVariation = windowWidth/1920
  if(sizeVariation == 1) return size
  else {
    return parseInt((size*windowWidth)/1920)*4
  }
}

function bubbleSort(){
  var tmp = 0;

  if(arr[jBulles] > arr[jBulles + 1]) {
    if (!highlighted) {
      clear();
      setup();
      drawArrayBubbleSort(false);
      highlighted = true;
      return;
    }
    // Permutation
    tmp = arr[jBulles];
    arr[jBulles] = arr[jBulles + 1];
    arr[jBulles + 1] = tmp;
    //
    highlighted = false;
  } 

  clear();
  setup();
  drawArrayBubbleSort(true);

  if(jBulles < iBulles){
    jBulles++;
  }

  if(jBulles >= iBulles) {
    jBulles = 0;
    iBulles--;
  } 

  if(iBulles < -1 ){
    noLoop()
    isOver = true
  }
}