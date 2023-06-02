/** @format */
var count = 0;
var isDone = false;

async function mergeSort() {
  isDone = true;
  await sorting(0, arrLength);

  clear();
  setup();
  drawArray();

  if (isDone) {
    drawArraySecond();

    noLoop();
    isOver = true;
  }
}
async function sorting(start, end) {
  if (end - start <= 1) return;

  var half = parseInt((start + end) / 2);
  clear();
  setup();
  drawArray();
  await sorting(start, half);
  clear();
  setup();
  drawArray();

  await sorting(half, end);

  clear();
  setup();
  drawArray();
  await merge(start, end, half);
  clear();
  setup();
  drawArray();
}

async function merge(start, end, half) {
  var leftRunner = start;
  var rightRunner = half;

  while (leftRunner <= end || rightRunner <= end) {
    if (leftRunner == rightRunner) {
      ++rightRunner;
    } else if (arr[rightRunner] < arr[leftRunner]) {
      isDone = false;
      await shiftToTheRight(leftRunner, rightRunner);
      isDone = false;
    }
    ++leftRunner;
  }
}

async function shiftToTheRight(from, to) {
  isDone = false;

  var tmp = arr[to];
  for (let index = to; index > from; index--) {
    arr[index] = arr[index - 1];
  }
  arr[from] = tmp;
  isDone = false;
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
