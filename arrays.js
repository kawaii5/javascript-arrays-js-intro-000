var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (arr, element) {
  return [element, ... arr];
}

function addElementToEndOfArray (arr, element) {
  return [... arr, element];
}

function destructivelyAddElementToBeginningOfArray (arr, element) {
  return arr.unshift(element);
}

function destructivelyAddElementToEndOfArray (arr, element) {
  return arr.push(element);
}