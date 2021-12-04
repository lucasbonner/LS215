/*
A collection of spelling blocks has
two letters per block, as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only
those words that do not use both letters from any given block.
You can also only use each block once.

Write a function that takes a word string as an argument,
and returns true if the word can be spelled using the set of
 blocks, or false otherwise. You can consider the letters
  to be case-insensitive when you apply the rules.
*/
/*
-----------------------INSTRUCTIONS--------------------------------------

--------------------------PROBLEM----------------------------------------

Questions:

Input: string

Output: boolean

---------------------------RULES-----------------------------------------
Explicit:
  -> only use each 'letter block' once

Implicit:

--------------------------EXAMPLES---------------------------------------
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

isBlockWord('BATCH');      // true
  X:K   D:Q
  R:E   F:S   J:W
V:I   L:Y   Z:M



isBlockWord('BUTCH');      // false
   X:K   D:Q      N:A
  R:E   F:S   J:W
V:I   L:Y   Z:M
H (H is already gone, FALSE)

isBlockWord('jest');       // true

----------------------------ALGO----------------------------------------
have constant of word blocks
  each a subarray with two elements
iterate thru given string
  check if any subarray contains character
    if it does remove said subarray
  if subarray cannot be found, break and return false
otherwise return true

*/
function isBlockWord(str) {
  let letterblocks = [['B','O'], ['X', 'K'], ['D', 'Q'], ['C','P'], ['N', 'A'], ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J','W'], ['H','U'], ['V', 'I'], ['L', 'Y'], ['Z', 'M']];
  let length;
  let answer = true;
  str.toUpperCase().split('').forEach(elem => {
    length = letterblocks.length;
    letterblocks = letterblocks.filter((subArr) => {
      return !subArr.includes(elem);
    });
    if (letterblocks.length === length) {
      answer = false;
    }
  });
  return answer;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('BOX'));
console.log(isBlockWord('bxq'));
