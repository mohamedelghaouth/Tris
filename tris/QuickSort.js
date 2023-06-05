/** @format */
var isDone_ = false;

const STATE_OF_SMALLER = -1;
const STATE_OF_NORMAL = 0;
const STATE_OF_GREATER = 1;
const STATE_OF_PIVOT = 2;
const STATE_OF_SORTED_ELEMENT = 3;

function drawArrayW() {
  for (var k = 0; k < arrLength; k += 1) {
    // color coding
    if (states[k] == STATE_OF_PIVOT) {
      // color for the bar at the pivot index
      push();
      fill("Yellow");
    } else if (states[k] == STATE_OF_SMALLER) {
      // color for the bars being sorted currently
      push();
      fill("LemonChiffon");
    } else if (states[k] == STATE_OF_GREATER) {
      // color for the bars being sorted currently
      push();
      fill("Gold");
    } else if (states[k] == STATE_OF_SORTED_ELEMENT) {
      // color for the bars being sorted currently
      push();
      fill("LawnGreen");
    } else {
      push();
      fill(255);
    }
    rect(minX + k * numb, minY, numb, arr[k] * RECTANGLE_SIZE);
    pop();

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

// We have chosen the element at the last index as
// the pivot element, but we could've made different
// choices, e.g. take the first element as pivot.
function partition(start, end) {
  let pivotIndex = end - 1;

  // the index of current element that is greater than pivot
  let indexOfCurrentGreater = start;

  // make pivot index distinct
  //states[pivotIndex] = STATE_OF_PIVOT;
  let pivotElement = arr[pivotIndex];

  for (let i = start; i < end - 1; i++) {
    if (arr[i] < pivotElement) {
      swap(i, indexOfCurrentGreater);
      //states[indexOfCurrentGreater] = STATE_OF_GREATER;
      //states[i] = STATE_OF_SMALLER;

      indexOfCurrentGreater++;
    }
  }
  //states[pivotIndex] = STATE_OF_NORMAL;

  swap(pivotIndex, indexOfCurrentGreater);
  //states[indexOfCurrentGreater] = STATE_OF_PIVOT;

  for (let i = start; i < end; i++) {
    // restore original state
    if (i != indexOfCurrentGreater) {
      //states[i] = STATE_OF_NORMAL;
    }
  }
  return indexOfCurrentGreater;
}

// swaps elements of 'values' at indices 'i' and 'j'
function swap(i, j) {
  // adjust the pace of the simulation by changing the
  // value
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Function to do Quick sort
// arr[] --> Array to be sorted,
// l  --> Starting index,
// h  --> Ending index
function quickSortIterative() {
  if (stack.length <= 0) {
    isOver = true;
    drawArraySecond();
    noLoop();
    return;
  }
  clear();
  setup();
  drawArrayQK();

  // Pop h and l
  h = stack.pop();

  l = stack.pop();
  clear();
  setup();
  drawArrayQK(l, h, h - 1);
  // Set pivot element at its correct position in
  let p = partition(l, h);
  pivots[p] = STATE_OF_SORTED_ELEMENT;

  clear();
  setup();
  drawArrayQK(l, h, p);
  states[p] = STATE_OF_NORMAL;

  // If there are elements on left side of pivot,
  // then push left side to stack
  if (p - 1 > l) {
    stack.push(l);
    stack.push(p);
  }

  // If there are elements on right side of pivot,
  // then push right side to stack
  if (p + 1 < h) {
    stack.push(p + 1);
    stack.push(h);
  }
}
function drawArrayQK(l, h, p) {
  for (var k = 0; k < arrLength; k += 1) {
    // color coding
    if (k < h && k >= l && k != p) {
      push();
      fill("Yellow");
      rect(minX + k * numb, minY, numb, arr[k] * RECTANGLE_SIZE);
      pop();
    } else if (k == p) {
      // color for the bars being sorted currently
      push();
      fill("red");
      rect(minX + k * numb, minY, numb, arr[k] * RECTANGLE_SIZE);
      pop();
    } else if (pivots[k] == STATE_OF_SORTED_ELEMENT) {
      // color for the bars being sorted currently
      push();
      fill("LawnGreen");
      rect(minX + k * numb, minY, numb, arr[k] * RECTANGLE_SIZE);
      pop();
    } else {
      push();
      fill(255);
      rect(minX + k * numb, minY, numb, arr[k] * RECTANGLE_SIZE);
      pop();
    }

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

function drawArraySecond() {
  for (var k = 0; k < arrLength; k += 1) {
    //Draw the rect
    push();
    fill("green");
    rect(minX + k * numb, minY, numb, arr[k] * RECTANGLE_SIZE);
    pop();
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
