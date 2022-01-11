/*
Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly
 one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/
/*
-----------------------INSTRUCTIONS--------------------------------------
given array of integer nums, and an integer target return indices
of the two numbers such that they add up to target

return indices from integer nums of two numbers.sum === target
--------------------------PROBLEM----------------------------------------

Questions:

Input: array of nums, target integer

Output: array of integers (indices of tghe numbers that add up to the target)

---------------------------RULES-----------------------------------------
Explicit:
each input will have exactly one solution
may not use the same element twice
return answer in any order

Implicit:

--------------------------EXAMPLES---------------------------------------
Input: nums = [2,7,11,15], target = 9
[2, 7, 11, 15]  and target is 9
2 + 7 === 9
2, index is 0, add to result -> [0]
7, index is 1, add to result -> [0, 1]
return [0, 1]

Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
[3, 2, 4] and target is 6
2 + 4 === 6
2, index is 1, add 1 to result [1]
4, index is 2, add to 2 to result [1, 2]
return [1, 2]

Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
3 + 3 === 6
index of 3 is 0, add 0 to result [0]
index of 3 is 1, add 1 to result [1]

Output: [0,1]

[-1, 5, 3] -> 4
5 + -1 -> 4
-1 has index of 0, add to result [0]
5 has index of 1, add tor result [0, 1]
return [0, 1]


----------------------------ALGO----------------------------------------
need to get target using two numbers in given array
  and return an array of exactly TWO elements
    two elemenets being INDEX of each number that adds up to target
iterate thru array and get every


loops WHILE result is empty
  essnetially have two indexes, both starting at 0
    for each first index, second index goes all
    the way up until end of arr.length -1
      then first index increments, and second index restarts at 0
    if arr[index1] + arr[index2] === target && index1 !== index2
      add index1 and index2 to result collection
      this will trigger while condition and break
*/

var twoSum = function(nums, target) {
  let index1 = 0;
  let result = [];

  while (result.length === 0) {
    for (let index2 = 0; index2 <= nums.length - 1; index2++) {
      if (nums[index1] + nums[index2] === target && index1 !== index2) {
        result.push([index1, index2]);
      }
    }
    index1++;
  }
  return result.flat();
};

console.log(twoSum([2, 7, 11, 15], 9)); //[0, 1]
console.log(twoSum([3, 2, 4], 6)); //[1, 2]
console.log(twoSum([3, 3], 6)); //[0, 1]
console.log(twoSum([-1, 5, 3], 4)); //[0, 1]
