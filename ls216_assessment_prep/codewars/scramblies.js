/*
Complete the function scramble(str1, str2) that returns true if a
portion of str1 characters can be rearranged to match
str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
 Performance needs to be considered

*/

// function scramble(str1, str2) {
//   let str1Arr = str1.split('').sort();
//   let str2Arr = str2.split('').sort();
//   let result = {};
//   str1Arr = str1Arr.filter(elem => str2Arr.includes(elem));
//   result = str2Arr.filter(elem => str1Arr.includes(elem));
//   return result.length === str2Arr.length;
// }
/*
PEDAC:
input -> two strings (see if PORTION of str1 can match str2)
output -> boolean

EXAMPLES:
scramble('rkqodlw', 'world')); //==> True
['r', 'k', 'q', 'o', 'd', 'l', 'w']
['w', 'o', 'r', 'l', 'd']

['r': 1, 'k': 1, 'q': 1, 'o': 1, 'd': 1, 'l': 1, 'w': 1]
['w':1, 'o':1, 'r':1, 'l':1,'d':1]


scramble('cedewaraaossoqqyt', 'codewars')); //==> True
scramble('katas', 'steak')); //==> False
['k': 1, 'a': 2, 't': 1, 's': 1]
['s': 1, 't':1, 'e':1,'a':1,'k':1] ->has 'e', which first one does not
FALSE


*/

function charFrequency(object, elem) {
  (object[elem] += 1) || (object[elem] = 1);
  return object;
}

function scramble(str1, str2) {
  let str2Obj = str2.split('').reduce(charFrequency, {});
  let str1Obj = str1.split('').reduce(charFrequency, {});
  for (let prop in str2Obj) {
    if (str1Obj[prop] < str2Obj[prop] || str1Obj[prop] === undefined) {
      return false;
    }
  }
  return true;
}

console.log(scramble('rkqodlw', 'world')); //==> True
console.log(scramble('cedewaraaossoqqyt', 'codewars')); //==> True
console.log(scramble('katas', 'steak')); //==> False
