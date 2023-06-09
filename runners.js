/** @format */

var iBulles = arrLength - 1;
var jBulles = 0;

var selectionSortStart = 0;
var iSelectionSort = 0;
var minimumElementIndex = 0;

var iInsertion = 1;

var stackRunner = -1;
var stack = [];
var pivots = [];

var iHeapSort = arrLength - 1;
var heapified = false;

// The array 'states' helps in identifying the pivot index
// at every step, and also the subarray which is being sorted
// at any given time.
let states = [];

function initializeRunners() {
  initializeBubbleSortRunners();
  initializeInsertionSortRunners();
  initializeSelectionSortRunners();
  initializeQuickSortRunners();
  initializeHeapSortRunners();
}

function initializeBubbleSortRunners() {
  iBulles = arrLength - 1;
  jBulles = 0;
}

function initializeSelectionSortRunners() {
  selectionSortStart = 0;
  iSelectionSort = 0;
  minimumElementIndex = 0;
}

function initializeInsertionSortRunners() {
  iInsertion = 1;
}

function initializeQuickSortRunners() {
  pivots = [];
  states = [];
  stack = [];
  stack.push(0);
  stack.push(arrLength);
}

function initializeHeapSortRunners() {
  iHeapSort = arrLength - 1;
  heapified = false;
}
