/*
Given a string s, find the length of the longest substring without repeating characters.



Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0


Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/
/*
-----------------------INSTRUCTIONS--------------------------------------
Given a string s, find the length of the longest substring without repeating characters.
--------------------------PROBLEM----------------------------------------

Questions:

Input:string (can be empty)

Output: integer (length of the longest substring(w/o repeating chars))

---------------------------RULES-----------------------------------------
Explicit:
input string will at least 0 chars, can be VERY large
can consist of letters, digits, symbols, and spaces

Implicit:

--------------------------EXAMPLES---------------------------------------
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
s -> "abcabcbb"
[a], [ab], [abc], [abc], [abc]



Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
----------------------------ALGO----------------------------------------
need to build all substrings
  once gotten a substring, make it unique (helper)
    add it to an object with the value being it's length
get all values of object
  whichever is math.max
    filter the object keys, to only return one with math.max value

how does unique function work?
  have comparison array
  filter based off whether in comparison array
    first add to it
    then return .includes?

*/
var lengthOfLongestSubstring = function(s) {
  let result = {};
  let index1 = 0;
  let strArr = s.split('');
  while (index1 <= strArr.length) {
    for (let index2 = index1; index2 <= strArr.length; index2++) {
      let currentSub = strArr.slice(index1, index2);
      if (!Object.values(result).includes(currentSub) && unique(currentSub)) {
        result[currentSub.length] = currentSub;
      }
    }

    index1++;
  }
  return Math.max(...Object.keys(result).map((num) => {
    return Number(num);
  }));
};

function unique(arr) {
  let result = [];
  arr.forEach((elem) => {
    if (!result.includes(elem)) {
      result.push(elem);
    }
  });
  return result.length === arr.length;
}

console.log(lengthOfLongestSubstring("abcabcbb")); //3
console.log(lengthOfLongestSubstring("bbbbb")); //1
console.log(lengthOfLongestSubstring("pwwkew")); //3
console.log(lengthOfLongestSubstring("")); //0
console.log(lengthOfLongestSubstring("13211")); //3 [132]
console.log(lengthOfLongestSubstring("e$t")); //3
