/** @format */

function insertionSort() {
  if (iInsertion == arr.length) {
    clear();
    setup();
    drawArrayInsertionSort(arrLength + 1);
  } else {
    var current = arr[iInsertion];
    var previous = arr[iInsertion - 1];

    var tmp = iInsertion - 1;
    if (current < previous) {
      if (!highlighted) {
        clear();
        setup();
        drawArrayInsertionSort(tmp);
        highlighted = true;
        return;
      }
      while (tmp >= 0 && current < arr[tmp]) {
        arr[tmp + 1] = arr[tmp];
        tmp -= 1;
        drawArrayInsertionSort(tmp);
      }
      arr[tmp + 1] = current;
    }
    clear();
    setup();
    drawArrayInsertionSort(tmp);
    highlighted = false;
    iInsertion += 1;
  }

  if (iInsertion > arr.length) {
    noLoop();
    isOver = true;
  }
}

function drawArrayInsertionSort(tmp) {
  for (var k = 0; k <= arrLength; k += 1) {
    if (k == tmp + 1 && tmp + 1 < arrLength) {
      push();
      fill("red");
      rect(minX + k * numb, minY, numb, arr[k] * RECTANGLE_SIZE);
      pop();
    } else if (k > iInsertion) {
      push();
      rect(minX + k * numb, minY, numb, arr[k] * RECTANGLE_SIZE);
      pop();
    } else if (k <= iInsertion) {
      push();
      fill("green");
      rect(minX + k * numb, minY, numb, arr[k] * RECTANGLE_SIZE);
      pop();
    }

    // Put the value inside the rectangle
    let fontInf = fonSize.get(arrLength);
    let size = getSize(fontInf.size);
    push();
    textSize(size);
    if (arrLength <= 30) {
      text(arr[k], minX + k * numb + fontInf.decalageH, minY + 30);
    }
    pop();
  }
}
