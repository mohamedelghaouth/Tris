/** @format */
var selectionSortHighlighted = false;

function selectionSort() {
  if (selectionSortStart >= arrLength) {
    clear();
    setup();
    drawArraySelectionSort();
    noLoop();
    isOver = true;
    return;
  }
  if (iSelectionSort >= arrLength) {
    swap(selectionSortStart, minimumElementIndex);
    selectionSortStart += 1;
    iSelectionSort = selectionSortStart;
    minimumElementIndex = selectionSortStart;
  }
  if (arr[iSelectionSort] < arr[minimumElementIndex]) {
    if (!selectionSortHighlighted) {
      clear();
      setup();
      drawArraySelectionSort(true);
      minimumElementIndex = iSelectionSort;
      selectionSortHighlighted = true;
      return;
    }
  }

  clear();
  setup();
  drawArraySelectionSort(false);
  selectionSortHighlighted = false;
  iSelectionSort += 1;
}

function drawArraySelectionSort(highlight) {
  for (var k = 0; k < arrLength; k += 1) {
    if (k < selectionSortStart) {
      push();
      fill("LawnGreen");
      rect(minX + k * numb, minY, numb, arr[k] * RECTANGLE_SIZE);
      pop();
    } else if (k == minimumElementIndex) {
      push();
      if (highlight) {
        fill("red");
      } else {
        fill("Aqua");
      }
      rect(minX + k * numb, minY, numb, arr[k] * RECTANGLE_SIZE);
      pop();
    } else if (k == iSelectionSort) {
      push();
      if (highlight) {
        fill("red");
      } else {
        fill("yellow");
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
    if (arrLength <= 30) {
      text(arr[k], minX + k * numb + tmp.decalageH, minY + 30);
    }
    pop();
  }
}
