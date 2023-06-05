/** @format */
var count = 0;
var isDone = false;

async function mergeSort() {
  if (isDone) {
    enableSliderSecond(isDone);
    noLoop();
    return;
  } else {
    try {
      isDone = await sorting(0, arrLength);
    } catch (error) {
      isDone = true;
      enableSliderSecond(isDone);
      noLoop();
    }
  }
}
async function sorting(start, end) {
  try {
    if (isDone) {
      throw new Error("error");
    } else if (end - start <= 1) {
      return true;
    } else {
      var half = parseInt((start + end) / 2);
      clear();
      setup();
      drawArray();
      let sortedLeft = await sorting(start, half);

      clear();
      setup();
      drawArray();
      let sortedRight = await sorting(half, end);
      clear();
      setup();
      drawArray();
      merge(start, end, half);

      clear();
      setup();
      drawArray();
      await sleeping();

      return sortedLeft && sortedRight;
    }
  } catch (error) {
    throw error;
  }
}

function merge(start, end, half) {
  var leftRunner = start;
  var rightRunner = half;

  while (!isDone && leftRunner < end && rightRunner < end) {
    if (rightRunner == leftRunner) {
      ++rightRunner;
    } else if (arr[leftRunner] < arr[rightRunner]) {
      ++leftRunner;
    } else if (arr[rightRunner] <= arr[leftRunner]) {
      shiftToTheRight(leftRunner, rightRunner);
      ++rightRunner;
      ++leftRunner;
    }
  }
}

function shiftToTheRight(from, to) {
  var tmp = arr[to];
  for (let index = to; index > from; index--) {
    arr[index] = arr[index - 1];
  }
  arr[from] = tmp;
}

// function to emulate sleep
async function sleeping() {
  if (arrLength >= 75) {
    await sleep(15);
  } else if (arrLength >= 65) {
    await sleep(25);
  } else if (arrLength >= 40) {
    await sleep(70);
  } else if (arrLength >= 20) {
    await sleep(100);
  } else {
    await sleep(200);
  }
}
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
