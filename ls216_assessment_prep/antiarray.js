/*
Anti Array
Given two arrays, return whether the two arrays are opposites of each other. That means both arrays are comprised only from elements a and b and the occurrences of these elements are swapped between the two arrays.

Examples
isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"]) ➞ true

isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"]) ➞ true

isAntiArray([3.14, True, 3.14], [3.14, False, 3.14]) ➞ false
*/
/*
-----------------------INSTRUCTIONS--------------------------------------
Anti Array
Given two arrays, return whether the two arrays are opposites of each other. That means both arrays are comprised only from elements a and b and the occurrences of these elements are swapped between the two arrays.


opposites ->
[a, a, b]
[b, b, a]
--------------------------PROBLEM----------------------------------------

Questions:

Input: two arrays

Output: boolean (whether the two arrays are opposites(?))

---------------------------RULES-----------------------------------------
Explicit:
-> That means both arrays are comprised only from elements a and b
  if either array is compromised by anything other than a and b, output will be false

->the occurrences of these elements are swapped between the two arrays


Implicit:
-> assume will always be of same length

-> elements can be any primitive besides NaN

--------------------------EXAMPLES---------------------------------------
isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"]) ➞ true
arr1 -> ["1", "0", "0", "1"]
arr2 -> ["0", "1", "1", "0"]
where there is a 1 in arr1 there is a 2 in arr2, and vice versa
output -> true

isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"]) ➞ true
arr1 ->["apples", "bananas", "bananas"
arr2 -> ["bananas", "apples", "apples"]
where element is apples in arr1, element is bananas in arr2, and vice versa
output -> true


isAntiArray([3.14, true, 3.14], [3.14, false, 3.14]) ➞ false
arr1 -> [3.14, true, 3.14]
arr2 -> [3.14, false, 3.14]
output -> false

AntiArray version
arr1 -> [3.14, true, 3.14]
arr2 -> [true, 3.14, true]
output -> true

AntiArray version
arr1 -> [4, 5, 4]
arr2 -> [5, 4, 5]
output -> true

AntiArray version
arr1 -> [4, 5, 4]
arr2 -> [5, 8, 5]
output -> false

----------------------------ALGO----------------------------------------
use a helper method, to verify if both arrays only have two types of elements
  (an 'a' and a 'b')
in helper, twoElements
  have a collection called compare
  iterate array
    add current element to compare (if !compare not include element)
return compare length equals 2

verify both arrays return true from twoElements
["1", "0", "0", "1"]    ["0", "1", "1", "0"]
a -> '1'
b -> '0'
iterate with a for loop
  if elem is a && element at same index in arr2 is b
    continue
  if elem is b && element at same index in arr2 is a
    continue
return false

get a and b
  a is element at first index
filter arr by not equal to a, return first index of that



create a for loop that iterates up to the length of arr1
  if arr1 index -> a && arr2 index -> b
    continue
  if arr1 index -> b && arr2 index -> a
    continue
return false

return true
*/
function twoElements(arr) {
  let compare = [];

  arr.forEach((elem) => {
    if (!compare.includes(elem)) {
     compare.push(elem);
    }
  });
  return compare.length == 2;
}


function isAntiArray(arr1, arr2) {
  if (!twoElements(arr1) || !twoElements(arr2)) {
    return false;
  }
  let a = arr1[0];
  let b = arr1.filter(elem => elem != a)[0];

  for (let idx = 0; idx < arr1.length; idx++) {
   if (arr1[idx] === a && arr2[idx] === b) {
     continue;
   } else if (arr1[idx] === b && arr2[idx] === a) {
    continue;
   }
    return false;
  }
  return true;
}

console.log(isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"]));// ➞ true
console.log(isAntiArray(["1", "1", "0", "1"], ["0", "1", "1", "0"]));// ➞ false
console.log(isAntiArray(["1", "1", "1", "1"], ["0", "1", "1", "0"]));// ➞ false
console.log(isAntiArray([3.14, true, 3.14], [true, 3.14, true]));// ➞ true
console.log(isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"]));// ➞ true
console.log(isAntiArray([4, 5, 4], [5, 4, 5]));// ➞ true
console.log(isAntiArray([3.14, true, 3.14], [3.14, false, 3.14]));// ➞ false
console.log(isAntiArray([4, 5, 4], [5, 8, 5]));// ➞ false
console.log(isAntiArray([4, 5, 4, 6, 7], [5, 8, 5, 7, 6]));// ➞ false
console.log(isAntiArray(["apples", "bananas", "bananas", 'dog'], ["bananas", "apples", "apples", 'cat']));// ➞ false