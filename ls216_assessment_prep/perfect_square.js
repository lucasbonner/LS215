// Perfect Square
// Given an integer n, return the least number of perfect square numbers that sum to n.

// A perfect square is an integer that is the square of an integer; in other words, it is the
// product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3
// and 11 are not.

// Input: n = 12
// Output: 3
// Explanation: 12 = 4 + 4 + 4.

// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.

// */
/*
-----------------------INSTRUCTIONS--------------------------------------
Given an integer n, return the least number of perfect square numbers that sum to n.
--------------------------PROBLEM----------------------------------------

Questions:

Input: integer (n)

Output: integer (LEAST number of perfect square numbers that sum to n)

---------------------------RULES-----------------------------------------
Explicit:
// A perfect square is an integer that is the square of an integer; in other words, it is the
// product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3
// and 11 are not.

Implicit:



--------------------------EXAMPLES---------------------------------------
// Input: n = 12
// Output: 3
// Explanation: 12 = 4 + 4 + 4.

input -> 12
need LEAST number of perfect square numbers that sum to n

4 + 4 + 4 -> 12
each 4 is a perfect square, because 2**2 -> 4

1 + 1 + 1 + 1..... -> 12
1**2 -> 1


// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.

input -> 13
need LEAST number of perfect square numbers that sum to n

4 + 9 -> 13
4 -> 2**2
9 -> 3**2

1 + 1+ 1 + 1......
4 + 4 + 4 + 1....
...

n = 1
Output -> 1
1 = 1

perfectSquare(4)); //4
input -> 4
output -> 4
1 + 1 + 1 + 1 -> 4
all ones because need to SUM to n

perfectSquare(16));
input -> 16
output -> 4
4 + 4 + 4 + 4
9 + 4 + 1 + 1+ 1


----------------------------ALGO----------------------------------------
Input: n = 12
12 - 1 -> 11
11 - 1 -> 10
10 - 1 -> 9
9 + 9 !< 12
9 + 4 !< 12
9 + 1 + 1 + 1 -> 12
subtract until 4:
4 + 9 !< 12
4 + 4 + 4 -> 12
decrement the input number,
but need a way to check if it is a perfect square

1 + 1 + 1..... -> 12

[[9 + 1 + 1 + 1], [4 + 4 + 4 ], [1 + 1 + 1.....]]
smallest is 4 + 4 + 4


isPerfectSquare
start at 1, loop to input number
  on each number do number**2
    if number**2 === input number
      return true
return false

// Input: n = 12
start at input number, subtract until find perfect square
collect all perfect squares less than input (in array) lessThanSquares
  iterate thru this array, at each number add up to n? (helper function)

    summed to n add to result collection
  find subarray in result collection with smallest length

iterate thru this array, at each number add up to n? (helper function)
9 + 9 !< 12
9 + 4 !< 12
9 + 1 + 1 + 1 -> 12
at whatever number, for example 9
  start at end of lessThanSquares array
  add to input(9), if sum is greater than 9
    for example 9 + 9 > 12 (wrong)
  9 + 1 is less than 16
    9 + 4 -> 13
    13 + 4 -> 17 which is greater than 16
    9 + 4 + 1 + 1.....

helper smallestSum
  iterate thru array backwards
    at each number, keep iterating backwards until find number that sums to less than n
        add to this array
      and then collect array with all numbers needed to sum to n
    add subarray to collection
[ 9, 4, 1 ] -> 3 (4 + 4 + 4)
need to create sums, using only these three numbers
9 + 9
9 + 4
4 + 4 + 4

[1, 4, 9, 16]
[1, 1, 1, 1], [1,1,1,4]

iterate thru the array
  have a current sum, subarray
    add first element   [9]
      keep checking reduce sum of subarray against n
    add same element again, if greater than n
      move to next element



*/

function isPerfectSquare(input) {
  for (let i = 1; i <= input; i++) {
    if (i**2 === input) {
     return true;
    }
  }
  return false;
}

function sum(accum, elem) {
  accum += elem;
  return accum;
}

function smallestSum(squareArr, n) {
  let result = [];

  squareArr.forEach((elem) => {
    let currentSum = [];
    currentSum.push(elem);
    while (currentSum.reduce(sum) < n) {
      currentSum.push(elem);
    }
    if (currentSum.reduce(sum) > n) {
     currentSum.pop();
    }
    if (currentSum.reduce(sum) === n) {
      result.push(currentSum);
    }



  });
  return result;

}

function perfectSquare(n) {
  let lessThanSquares = [];
  for (let i = n; i >= 1; i--) {
    if (isPerfectSquare(i)) {
     lessThanSquares.push(i);
    }
  }
  return smallestSum(lessThanSquares, n);
}


console.log(perfectSquare(12)); //3
console.log(perfectSquare(13)); //2
console.log(perfectSquare(1)); //1
console.log(perfectSquare(4)); //4