/*
Write an algorithm that takes an array and moves all of the zeros to the end,
preserving the order of the other elements.

[false,1,0,1,2,0,1,3,"a"] // returns[false,1,1,2,1,3,"a",0,0]
*/
/*
PEDAC:
input: arr
output: arr(all zeros at end )

ALGO:
have result array
add everything that is NOT zero
initialize zerocounter, count the zeros
add them all at the end
*/
function moveZeros(arr) {
  let result = [];
  let zeroCounter = 0;

  arr.forEach(function(num) {
    if (num !== 0) {
      result.push(num);
    } else {
      zeroCounter += 1;
    }
  });

  do {
    result.push(0);
    zeroCounter -= 1;
  } while (zeroCounter > 0);

  return result;
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) // returns[false,1,1,2,1,3,"a",0,0]
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1])) //returns [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])