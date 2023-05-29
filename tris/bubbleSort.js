function drawArrayBubbleSort(_highlighted) {
  for (var k = 0; k < arrLength; k += 1) {
    if (k > iBulles) {
      push();
      fill("Aqua");
      rect(minX + k * numb, minY, numb, arr[k] * RECTANGLE_SIZE);
      pop();
    } else if (k == jBulles) {
      push();
      if (_highlighted) {
        fill("green");
      } else {
        fill("red");
      }
      rect(minX + k * numb, minY, numb, arr[k] * RECTANGLE_SIZE);
      pop();
    } else if (k == jBulles + 1) {
      push();
      if (_highlighted) {
        fill("yellow");
      } else {
        fill("red");
      }
      rect(minX + k * numb, minY, numb, arr[k] * RECTANGLE_SIZE);
      pop();
    } else {
      rect(minX + k * numb, minY, numb, arr[k] * RECTANGLE_SIZE);
    }

    // Put the value inside the rectangle
    let tmp = fonSize.get(arrLength);
    let size = getSize(tmp.size);
    push();
    textSize(size);
    if(arrLength <= 30) {
      text(arr[k], minX + k * numb + tmp.decalageH, minY + 30);
    }
    pop();
  }
}

function bubbleSort() {
  var tmp = 0;

  if (arr[jBulles] > arr[jBulles + 1]) {
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

  if (jBulles < iBulles) {
    jBulles++;
  }

  if (jBulles >= iBulles) {
    jBulles = 0;
    iBulles--;
  }

  if (iBulles < -1) {
    noLoop();
    isOver = true;
  }
}
