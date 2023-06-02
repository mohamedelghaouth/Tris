/** @format */

var iBulles = arrLength - 1;
var jBulles = 0;

var iInsertion = 1;

var stackRunner = -1;
var stack = [];
var h;
var l;
var i;
var poppedKnewHandL = false;
var canPopKnewHandL = true;

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
  states = [];
  stack = [];
  stack.push(0);
  stack.push(arrLength);
  poppedKnewHandL = false;
  canPopKnewHandL = true;
}
