/*
You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.

Example 1:
O
OO
OO

Input: n = 5
Output: 2
Explanation: Because the 3rd row is incomplete, we return 2.

Example 2:
O
OO
OOO
OO

Input: n = 8
Output: 3
Explanation: Because the 4th row is incomplete, we return 3.


https://leetcode.com/problems/arranging-coins/
*/
/*
-----------------------INSTRUCTIONS--------------------------------------
Given the integer n, return the number of complete rows of the staircase you will build.
--------------------------PROBLEM----------------------------------------

Questions:

Input: integer (n) -> amount of coins

Output: integer (completed rows of staircases)

---------------------------RULES-----------------------------------------
Explicit:
The last row of the staircase may be incomplete.

The staircase consists of k rows where the ith row has exactly i coins.

Implicit:

--------------------------EXAMPLES---------------------------------------
O
OO
OOO
OOOO
OOOOO

O
OO
OO (not valid row)
total VALID rows are two


Input: n = 5
Output: 2
Explanation: Because the 3rd row is incomplete, we return 2.


---------------------------------------------------------------
O
OO
OOO
OO (incomplete row)
three complete rwos (return three)r


Example 2:
O
OO
OOO
OO

Input: n = 8
Output: 3
Explanation: Because the 4th row is incomplete, we return 3.


Input: n = 1
Output: 1
0


Input: 15
O
OO
OOO
OOOO
OOOOO
Output: 5 complete rows

Input: 3
O
OO
Output: 2 complete rwos

Input:10
O
OO
OOO
OOOO
Output: 4

Input: 9
O
OO
OOO
OOO
Return 3


----------------------------ALGO----------------------------------------
O
OO
OO (not valid row)
total VALID rows are two


Input: n = 5
Output: 2

counter starts at 0
counter is new break condition, when counter >= n
counter on each iteration, adds the length of string

staircase is built linearly
  n -> 3

  build staircase with an array of seperate strings
  string -> 'O'
    push string to staircase -> staircase: ['O']
    counter += string's length (counter is 1)
  string += 'O'

  string -> 'OO'
    push string to staircase -> staircase: ['O', 'OO']
    counter incremented by string's length (counter is 3)
  string += 'O'

   string -> 'OOO'
    push string to staircase -> staircase: ['O', 'OO', 'OOO']
  string += 'O'

  up until last row
loop run until string length is greater than n


---------------------------------------------------------------

make staircase array
make a counter starting at 0
have string called 'steps' start as 'O'

start a loop that loops while counter is less than or equal to n
  push current string to staircase
  increment counter by string's length
increment string with another 'O'

after loop has finished
  if counter is now greater than n
    pop last element
    then return staircase lengths
  otherwise
return staircase length
*/
function staircase(n) {
  let staircase = [];
  let counter = 0;
  let steps = '';

  while (counter < n) {
    steps += 'O';
    counter += steps.length;
    staircase.push(steps);

  }
  if (counter > n) {
    staircase.pop();
    return staircase.length;
  }
  return staircase.length;
}


console.log(staircase(5)); //2
console.log(staircase(9)); //3
console.log(staircase(10)); //4
console.log(staircase(3)); //2
console.log(staircase(15)); //5
console.log(staircase(1)); //1
console.log(staircase(8)); //3