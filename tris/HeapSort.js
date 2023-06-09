/** @format */

function buildHeapMaxTree() {
  let firstNonLeaNodeIndex = parseInt(arrLength / 2 - 1);
  for (let i = firstNonLeaNodeIndex; i >= 0; i--) {
    heapify(i, arrLength);
  }
}

function heapify(i, size) {
  let leftChildIndex = 2 * i + 1;
  let rightChildIndex = 2 * i + 2;
  let largestOneIndex = i;

  if (leftChildIndex < size && arr[leftChildIndex] > arr[largestOneIndex]) {
    largestOneIndex = leftChildIndex;
  }

  if (rightChildIndex < size && arr[rightChildIndex] > arr[largestOneIndex]) {
    largestOneIndex = rightChildIndex;
  }

  if (largestOneIndex != i) {
    swap(largestOneIndex, i);
    heapify(largestOneIndex, size);
  }
}

function heapSort() {
  if (heapified) {
    clear();
    setup();
    drawArrayHeapSort();
    swap(0, iHeapSort);
    heapify(0, iHeapSort);
    --iHeapSort;
    clear();
    setup();
    drawArrayHeapSort();
    if (iHeapSort < 0) {
      isOver = true;
      noLoop();
      return;
    }
  } else {
    buildHeapMaxTree();
    heapified = true;
  }
}

function drawArrayHeapSort() {
  for (var k = 0; k < arrLength; k += 1) {
    if (k > iHeapSort) {
      push();
      fill("LawnGreen");
      rect(minX + k * numb, minY, numb, arr[k] * RECTANGLE_SIZE);
      pop();
    } else if (k == 0) {
      push();
      fill("Yellow");
      rect(minX + k * numb, minY, numb, arr[k] * RECTANGLE_SIZE);
      pop();
    } else {
      push();
      fill("Aqua");
      rect(minX + k * numb, minY, numb, arr[k] * RECTANGLE_SIZE);
      pop();
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
