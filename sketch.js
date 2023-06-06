/** @format */

var RECTANGLE_SIZE = 4;

var arr = Array.from({ length: arrLength }, () =>
  Math.round(Math.random() * (100 - 10) + 10)
);

var maxX = 0;
var minX = 60;
var maxY = 0;
var minY = 20;
var numb = 0;
var highlighted = false;

function getRate() {
  let rate = fonSize.get(arrLength).frameRate;
  if (_tri == "Tri à bulles" || _tri == "Tri par sélection") {
    if (arrLength > 10) {
      return rate + 15;
    } else if (arrLength == 10) {
      return rate + 3;
    }
  }
  return rate;
}

function setup() {
  createCanvas(0.8 * windowWidth, 0.5 * windowHeight).parent("sketch");
  frameRate(getRate()); /// For the speed of rendering
  background(220);
  numb = Math.floor((width - 80) / arrLength);
  minX = 40;
  maxY = height - 40;
  minY = 0;
  drawArray();
}

function draw() {
  switch (_tri) {
    case "Tri à bulles":
      bubbleSort();
      break;

    case "Tri par insertion":
      insertionSort();
      break;

    case "Tri par sélection":
      selectionSort();
      break;

    case "Tri fusion":
      mergeSort();
      break;

    case "Tri rapide":
      quickSortIterative();
      break;

    case "Tri par tas":
      //text('Tri par tas', 10, 30);
      break;
    default:
      break;
  }
}

function drawArray() {
  for (var k = 0; k < arrLength; k += 1) {
    //Draw the rect
    rect(minX + k * numb, minY, numb, arr[k] * RECTANGLE_SIZE);
    //Get the Font Size: it depend on the array length
    let tmp = fonSize.get(arrLength);
    let size = getSize(tmp.size);
    // Put the value inside the rectangle
    push();
    textSize(size);
    if (arrLength <= 30) {
      text(arr[k], minX + k * numb + tmp.decalageH, minY + 30);
    }
    pop();
  }
}

function getSize(size) {
  let sizeVariation = windowWidth / 1920;
  if (sizeVariation == 1) return size;
  else {
    return parseInt((size * windowWidth) / 1920) * 3;
  }
}
