/** @format */

var iBulles = arrLength - 1;
var jBulles = 0;

var iInsertion = 1;

var stackRunner = -1;
var stack = [];
var pivots = [];

// The array 'states' helps in identifying the pivot index
// at every step, and also the subarray which is being sorted
// at any given time.
let states = [];

function initializeRunners() {
  initializeBubbleSortRunners();
  initializeInsertionSortRunners();
  initializeQuickSortRunners();
}

function initializeBubbleSortRunners() {
  iBulles = arrLength - 1;
  jBulles = 0;
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
