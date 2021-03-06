var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
  return [element, ... array];
}

function addElementToEndOfArray (array, element) {
  return [... array, element];
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array;
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromBeginningOfArray (array, element) {
  var temp = [... array];
  temp.shift();
  return temp;
}

function removeElementFromEndOfArray (array, element) {
  var temp = [... array];
  temp.pop();
  return temp;
}
