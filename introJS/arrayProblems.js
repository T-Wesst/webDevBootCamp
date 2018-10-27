// 1. write a function printReverse() that takes an array as an argument and prints out the elements in the array in reverse order (don't actually reverse the array itself).
function printReverse(array) {
  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}

// 2. write a function isUniform() which takes an array as an arguement and returns true if all elements in the array are identical.
function isUniform(array) {
  var firstElement = array[0];
  for (var i = 1; i < array.length; i++) {
    if (firstElement !== array[i]) {
      return false;
    }
  }
  return true;
}

// 3. write a funciton sumArray() that accepts an array of numbers and returns the sum of all numbers in the array.
function sumArray(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// 4. write a function max() that accepts an array of numbers and returns the maximum number in the array.
function max(array) {
  var maxNum = array[0];
  for (var i = 0; i < array.length; i++) {
    if (maxNum < array[i]) {
      maxNum = array[i];
    }
  }
  return maxNum;
}
