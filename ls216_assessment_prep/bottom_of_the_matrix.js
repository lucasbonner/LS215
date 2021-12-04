/*
This challenge concerns square matrices
(same number of rows and columns) as the below example illustrates:

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

The entries in the diagonal line from the
top left to the bottom right form the main
diagonal of the matrix. In this case, 1,5,9 form the main diagonal.

Write a function that returns the matrix
obtained by replacing the entries above the main diagonal with 0s.

For example, for the matrix above you should return:

[
  [1, 0, 0],
  [4, 5, 0],
  [7, 8, 9]
]
*/
/*
-----------------------INSTRUCTIONS--------------------------------------
Write a function that returns the matrix
obtained by replacing the entries above the main diagonal with 0s.
--------------------------PROBLEM----------------------------------------

Questions:

Input: array of arrays

Output: array of arrays, with all above 'main diagonal' equal 0

---------------------------RULES-----------------------------------------
Explicit:

Implicit:

--------------------------EXAMPLES---------------------------------------
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]

[1, 0, 0],
[4, 5, 0],
[7, 8, 9]
3 subarr, each with length of 3
so for first subarr, subarr[1] & subarr[2] equal 0
for second subarr, subarr[2] equal 0
for last, no 0

[5, 7],
[7, 9]

[5, 0],
[7, 9]
2 subarr, each with length of 2
so for first subarr, subarr[1] equal 0
for second, none equal 0

[1, 8, 8, 1],
[2, 7, 7, 2],
[3, 6, 6, 3],
[4, 5, 5, 4]

[1, 0, 0, 0],
[2, 7, 0, 0],
[3, 6, 6, 0],
[4, 5, 5, 4]
4 subarr, each with length of 4
for first subarr, subarr[1],subarr[2], subarr[3] are 0
for second, subarr[2], subarr[3] are 0
for third, subarr[3] is 0
for fourth, nothing is0

pattern is zeroLength of subarrs - 1, is start length
start from 1
on first arr 1 -> zeroLength equal 0
on second arr 2 -> zeroLength equal 0
etc
until
----------------------------ALGO----------------------------------------
have zeroLength equal to arr.length - 1
have counter set to 1
iterate thru arr, using map, each elem is subArr
  loop from counter -> zeroLength
  set each index to 0
  return subarr

*/

function lowerTriang(arr) {
  let zeroLength = (arr.length - 1);
  let counter = 1;
  return arr.map((subArr) => {
    for (let i = counter; i <= zeroLength; i++) {
      subArr[i] = 0;
    }
    counter += 1;
    return subArr;
  });
}

console.log(lowerTriang([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])); //➞ [
//   [1, 0, 0],
//   [4, 5, 0],
//   [7, 8, 9]
// ]

console.log(lowerTriang([
  [5, 7],
  [7, 9]
])); //➞ [
//   [5, 0],
//   [7, 9]
// ]

console.log(lowerTriang([
  [1, 8, 8, 1],
  [2, 7, 7, 2],
  [3, 6, 6, 3],
  [4, 5, 5, 4]
])); //➞ [
//   [1, 0, 0, 0],
//   [2, 7, 0, 0],
//   [3, 6, 6, 0],
//   [4, 5, 5, 4]
// ]