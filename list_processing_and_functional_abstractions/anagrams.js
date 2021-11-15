/*
Write a Function named anagram that takes two arguments:
a word and an array of words. Your function should return
an array that contains all the words from the array argument
that are anagrams of the word argument. For example, given
the word "listen" and an array of candidate words like
"enlist", "google", "inlets", and "banana", the program
should return an array that contains "enlist" and "inlets".
*/
function isAnagram(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

function anagram(word, list) {
  return list.filter((elem) => isAnagram(elem, word));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]