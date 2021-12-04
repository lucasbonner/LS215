// https://leetcode.com/problems/count-largest-group/

// Given an integer n. Each number from 1 to n is grouped according to the sum of its digits.

// Return how many groups have the largest size.

/*
Example 1:

Input: n = 13
Output: 4
Explanation: There are 9 groups in total,
they are grouped according sum of its digits of numbers from 1 to 13:
[1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9].
There are 4 groups with largest size.

Example 2:

Input: n = 2
Output: 2
Explanation: There are 2 groups [1], [2] of size 1.

Example 3:

Input: n = 15
Output: 6
[1,10], [2,11], [3,12], [4,13], [5, 14], [6, 15], [7], [8], [9]



Example 4:

Input: n = 24
Output: 5
[1,10], [2,11, 20], [3,12, 21], [4,13, 22], [5, 14, 23], [6, 15, 24], [7, 16], [8, 17], [9, 18]

have result array
first collect in array, every nuumber 1-9

loop from 10 -> n
  at each number compare to each result, subarr
    if String(digits).split number sum === subarr[0]
      add to subarr

have all subarrays


*/

function sum(sum, digit) {
  sum += Number(digit);
  return sum;
}

function largestGroup(n) {
  let result = [];
  let iterator;

  if (n >= 10) {
    iterator = 10;
  } else {
    iterator = n;
  }

  for (let i = 1; i <= iterator; i++) {
    result.push([i]);
  }
  let digits;

  for (let i = 10; i <= n; i++) {
    digits = String(i).split('').reduce(sum,0);
    result.forEach((subarr) => { // question
      if (digits === subarr[0]) {
       subarr.push(i);
      }
    });
  }
  result.forEach(elem => {
    if (elem[0] === 10) {
      elem.shift();
    }
  })
  let longestLength = Math.max(...result.map((subarr) => subarr.length));
  return result.filter((subarr) => subarr.length === longestLength).length;
}

// console.log(largestGroup(13)); //4
// console.log(largestGroup(24)); //5
// console.log(largestGroup(15)); //6
// console.log(largestGroup(2)); //2
console.log(largestGroup(264)); //2
console.log(largestGroup(245)); //2
