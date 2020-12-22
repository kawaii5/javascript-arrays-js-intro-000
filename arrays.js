var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (arr, element) {
  var temp = [... arr];
  return temp.unshift(element);
}

function addElementToEndOfArray (arr, element) {
  var temp = [... arr];
  return temp.push(element);
}
