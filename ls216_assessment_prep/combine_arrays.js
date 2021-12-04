/*
Create a function that takes three arrays and returns
one array where all passed arrays are combined into nested arrays.

These arrays should be combined based on indexes:
the first nested array should contain only the items
 on index 0, the second array on index 1, and so on.

If any array contains fewer items than necessary,
 supplement the missing item with "*".
*/


function combineArrays(...array) {
  let result = [];
  for (let i = 0; i <= array.length - 1; i++) {
    result.push([]);
  }
  result.forEach((subarr, index) => {
    array.forEach(elem => {
      if (elem[index] === undefined) {
        subarr.push('*');
      } else {
        subarr.push(elem[index]);
      }
    });
  });
  return result;
}

console.log(combineArrays([false, "false"], ["true", true, "bool"], ["null", "undefined"]))// ➞ [[false, "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]

console.log(combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]))// ➞ [[1, 4, 7], [2, 5,  8], [3, 6, 9]]

console.log(combineArrays(["Jack", "Joe", "Jill"], ["Stuart", "Sammy", "Silvia"], ["Rick", "Raymond", "Riri"]))// ➞ [["Jack", "Stuart", "Rick"], ["Joe", "Sammy",  "Raymond"], ["Jill", "Silvia", "Riri"]]
