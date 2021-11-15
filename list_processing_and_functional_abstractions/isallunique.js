const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

function isAllUnique(string) {
  let str = string.toLowerCase().split('');
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      continue;
    }

    if (arr.includes(str[i])) {
      return false;
    }

    arr.push(str[i]);
  }
  return true;
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true