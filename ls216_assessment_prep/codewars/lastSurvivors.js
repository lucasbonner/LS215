// Substitute two equal letters by the next letter of the alphabet (two letters convert to one):

// "aa" => "b", "bb" => "c", .. "zz" => "a".
// The equal letters do not have to be adjacent.
// Repeat this operation until there are no possible substitutions left.
// Return a string.

// Example:

// let str = "zzzab"
//     str = "azab"
//     str = "bzb"
//     str = "cz"
// return "cz"
// Notes
// The order of letters in the result is not important.
// The letters "zz" transform into "a".
// There will only be lowercase letters.
/*
-----------------------INSTRUCTIONS--------------------------------------
Substitute two equal letters ('aa', 'bb', zz'), with next letter of alphabet
--------------------------PROBLEM----------------------------------------

Questions:

Input: string

Output: string (with substitutions made)

---------------------------RULES-----------------------------------------
Explicit:
// The equal letters do not have to be adjacent.

// Repeat this operation until there are no possible substitutions left.

/ The order of letters in the result is not important.

// The letters "zz" transform into "a".

// There will only be lowercase letters.

Implicit:

--------------------------EXAMPLES---------------------------------------
// Example:

// let str = "zzzab"
input str -> zzzab
'zz' is repeat, replace that with 'a'
  -> ['z', 'z', 'z', 'a', 'b']
  -> ['a', 'z', 'a', 'b']
'azab' -> 'a' repeating
  -> ['b', 'z', 'b']
'bzb' -> 'b' is repeating
  -> 'c', 'z'

let str = 'baib'
-> 'caib'

let str = 'daad'
-> 'eb'

let str = 'dddda'
-> 'eea'
-> 'fa'

let str = 'mmmmi'
-> nni
-> oi

console.log(repeatReplace('zzzab')); 'cz'
console.log(repeatReplace('baib')); 'cai'
console.log(repeatReplace('daad')); 'eb'
console.log(repeatReplace('dddda')); 'fa'
console.log(repeatReplace('mmmmi')); 'oi'
console.log(repeatReplace('dog')); 'dog'

----------------------------ALGO----------------------------------------
// "aa" => "b", "bb" => "c", .. "zz" => "a".
// The equal letters do not have to be adjacent.
// Repeat this operation until there are no possible substitutions left.
// Return a string.

First I am going to want a helper, that identifies any repeats.
  repeatChars, that has an object that collects char as key, occurences as value
    return values, if any are not 1, then there are repeats.
      filter for equals 1, if not empty array at end, than more than 1 occurence

create a loop that runs WHILE repeatChars returns false
'zazzab' -> return false because has repeating characters
  need NEXt character in alphabet, 'z' last in alphabet, and it wraps back to the beginning ('a')
  find what character is repeating
  remove 2 occurences of said character
    replace with next in alphabet

use helper returnRepeatChar
  same function as repeatChars
    except return first key with value greater than 1

send to helper, removeReplace which takes str, and character to replace
  set replacementChar to calling replacementChar helper function
    do a loop to two
    in loop
      use indexOf(character to replace)
      splice at index
at end add replacement character to beginning using unshift


getting replacementChar
  create an alphabet array
    find current character in alphabet
      if character is not 'z', return character at next index
      if character is 'z', return 'a'


*/
function repeatChars(str) {
  let charObject = {};
  str.split('').forEach((elem) => {
    if (!charObject[elem]) {
      charObject[elem] = 1;
    } else {
     charObject[elem]++;
    }
  });
  return Object.values(charObject).length === Object.values(charObject).filter((occurence) => {
    return occurence === 1;
  }).length;
}

function repeatCharacter(str) {
  let charObject = {};
  str.split('').forEach((elem) => {
    if (!charObject[elem]) {
      charObject[elem] = 1;
    } else {
     charObject[elem]++;
    }
  });
  for (let prop in charObject) {
    if (charObject[prop] > 1) {
     return prop;
    }
  }
}

function findReplacementChar(char) {
  let alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let currentIndex = (alphabetArr.indexOf(char));

  if (char === 'z') {
    return 'a';
  }
  return alphabetArr[currentIndex + 1];
}

function removeReplace(str, repeatChar) {
  let replacementChar = findReplacementChar(repeatChar);
  let strArr = str.split('');
  for (let i = 0; i <= 1; i++) {
    let index = strArr.indexOf(repeatChar);
    strArr.splice(index, 1);
  }
  strArr.unshift(replacementChar);
  return strArr.join('');
}

function repeatReplace(str) {
  let strArr = str.split('');

  while (!repeatChars(str)) {
    let repeatChar = repeatCharacter(str);
    str = removeReplace(str, repeatChar);
  }
  return str;
}


console.log(repeatReplace('zzzab'));// 'cz'
console.log(repeatReplace('baib'));// 'cai'
console.log(repeatReplace('daad'));// 'eb'
console.log(repeatReplace('dddda'));// 'fa'
console.log(repeatReplace('mmmmi'));// 'oi'
console.log(repeatReplace('dog'));// 'dog'