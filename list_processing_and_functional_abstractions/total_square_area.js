/*
For this practice problem, we'll represent rectangles
as Arrays with two elements: a height and a width.

Write a Function named totalArea that takes an Array
of rectangles as an argument. The Function should return the
total area covered by all the rectangles.
*/

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

let multiply = function(first, second) {
  return first * second;
};

function totalArea(array) {
  let result = 0;
  array = array.filter(subarray => subarray[0] === subarray[1]);
  for (let i = 0; i < array.length; i++) {
    result += array[i].reduce(multiply);
  }
  return result;
}

console.log(totalArea(rectangles));    // 141