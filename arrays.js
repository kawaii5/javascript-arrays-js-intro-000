var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (arr, element) {
  var temp = [element, ... arr];
  return temp;
}

function addElementToEndOfArray (arr, element) {
  var temp = [... arr];
  return temp.push(element);
}
