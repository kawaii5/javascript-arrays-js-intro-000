var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (arr, element) {
  var temp = [... arr];
  return arr.shift(temp);
}
