/** @format */

function mergeSort() {
  console.log("🚀 ~ file: MergeSort.js:5 ~ mergeSort ~ arr:", arr);
  var arrWithIndex = arr.map((value, index) => [value, index]);
  var result = sorting(0, arrLength, arrWithIndex);

  console.log(
    "🚀 ~ file: MergeSort.js:7 ~ mergeSort ~ arr:",
    result.map((elem) => elem[0])
  );
}
function sorting(start, end, _arr) {
  if (_arr.length == 1) return _arr;
  var half = parseInt(_arr.length / 2);
  var leftArr = sorting(start, half, _arr.slice(0, half));
  updateArray(start, leftArr);
  console.log("🚀 ~ file: MergeSort.js:17 ~ sorting ~ leftArr:", leftArr);
  console.log("🚀 ~ file: MergeSort.js:67 ~ sorting ~ arr:", arr);

  clear();
  setup();
  drawArray();
  var rightArr = sorting(half, end, _arr.slice(half));
  updateArray(half, rightArr);
  console.log("🚀 ~ file: MergeSort.js:30 ~ sorting ~ rightArr:", rightArr);
  console.log("🚀 ~ file: MergeSort.js:67 ~ sorting ~ arr:", arr);

  clear();
  setup();
  drawArray();
  return merge(leftArr, rightArr);
}

function merge(leftArr, rightArr) {
  var resultArr = [];
  var leftArrLength = leftArr.length;
  var rightArrLength = rightArr.length;

  var leftRunner = 0;
  var rightRunner = 0;

  while (leftRunner < leftArrLength || rightRunner < rightArrLength) {
    if (leftRunner == leftArrLength) {
      addArray(rightArr.slice(rightRunner), resultArr);
      rightRunner = rightArrLength;
    } else if (rightRunner == rightArrLength) {
      addArray(leftArr.slice(leftRunner), resultArr);
      leftRunner = leftArrLength;
    } else {
      if (leftArr[leftRunner][0] < rightArr[rightRunner][0]) {
        resultArr.push(leftArr[leftRunner]);
        leftRunner += 1;
      } else {
        resultArr.push(rightArr[rightRunner]);

        rightRunner += 1;
      }
    }
  }
  return resultArr;
}

function addArray(from, to) {
  from.forEach((element) => {
    to.push(element);
  });
}

function updateArray(start, from) {
  //console.log("🚀 ~ file: MergeSort.js:64 ~ updateArray ~ from:", from);
  for (let index = 0; index < from.length; index++) {
    arr[start + index] = from[index][0];
  }

  //console.log("🚀 ~ file: MergeSort.js:67 ~ updateArray ~ arr:", arr);
}
