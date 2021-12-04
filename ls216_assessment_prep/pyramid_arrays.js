/*
Given a number n, return an array containing several arrays.
Each array increment in size,
from range 1 to n inclusive, contaning its length as the elements.
/*
-----------------------INSTRUCTIONS--------------------------------------
given number n, return array containing several arrays
each array increments in size
from range 1 to n inclusive, containing its length as elements
--------------------------PROBLEM----------------------------------------

Questions:

Input: integer (n)

Output: array of n size filled with subarrays of n length, with elements === n

---------------------------RULES-----------------------------------------
Explicit:

Implicit:

--------------------------EXAMPLES---------------------------------------
pyramidArrays(5)); //➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]]
n is 5
array has 5 elements
each filled with amount of count


----------------------------ALGO----------------------------------------
create collection array (result)
  iterate over it n times
    each time adding empty subarray

iterate thru result
  at each subarray, add index + 1, index + 1 times

*/
function addElements(subArr, index) {
  index += 1;
  for (let i = 1; i <= index; i++) {
    subArr.push(index);
  }
  return subArr;
}

function pyramidArrays(int) {
  let result = [];
  for (let i = 1; i <= int; i++) {
    result.push([]);
  }
  return result.map((subarr, index) => {
    return addElements(subarr, index);
  });
}

console.log(pyramidArrays(1)); //➞ [[1]]
console.log(pyramidArrays(2)); // [[1], [2, 2]]
console.log(pyramidArrays(3)); //➞ [[1], [2, 2], [3, 3, 3]]
console.log(pyramidArrays(4)); //[[1],[2, 2],[3, 3, 3],[4, 4, 4, 4]]
console.log(pyramidArrays(5)); //➞ [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]]