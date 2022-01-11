// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If
// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
// Examples:
// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> ""
// revrot("563000655734469485", 4) --> "0365065073456944"
// Example of a string rotated to the left by one position:
// s = "123456" gives "234561
/*
-----------------------INSTRUCTIONS--------------------------------------
// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.
--------------------------PROBLEM----------------------------------------

Questions:

Input: string (str), integer (sz)

Output: reversed, or rotated string

---------------------------RULES-----------------------------------------
Explicit:
cut string into chunks of size sz (given integer)
  -> ignore the last chunk if its size is less than sz

if chunk represents (?) an integer that is the sum of the cubes of its digits is divisible by 2 reverse
  -> otherwise rotate to left by one position

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

final string all possible substrings (after filter) appended together

Implicit:

--------------------------EXAMPLES---------------------------------------
// revrot("123456987654", 6) --> "234561876549"
str = "123456987654", sz -> 6
"123456"
digits = str.split('').map((elem) => Number(elem))
digits.reduce((sum, num) => sum += num^3)
outcome is 2441
441 % 2 !== 0
rotate
"654321"


"123456" -> "234561"



"987654" -> "876549"
also not mod 2,
rotate to left

// revrot("123456987653", 6) --> "234561356789"
"123456987653"
"123456" -> 234561


"98753 ->356789
sum of cubed -> 1016 %2 -> 0
reverse

// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"




// revrot("664438769", 8) --> "67834466"
example of sz being larger, 9 is cut off from final string


// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> ""
// revrot("563000655734469485", 4) --> "0365065073456944"
// Example of a string rotated to the left by one position:
// s = "123456" gives "234561


----------------------------ALGO----------------------------------------
two helper functions
one -> rotateString
  rotates it, index 0 becomes last element
  return string
two -> reverseString
  reverses string
  return string

collect substr
  collection str
  do..while loop wt a counter
    up until counter
    shift element to collection str
      once counter hits sz, substr.push(collection)
        reset collection
      break if array is empty

 If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

collected substr
now need to check whether rotate or reverse

iterate thru substr, use helper sumOfCubes
  if it returns true
    rotate it
  if it returns false
    reverse it

sumOfCubes
digits = str.split('').map((elem) => Number(elem))
digits.reduce((sum, num) => sum += num^3) % 2 === 0

rotateIt
loop from index 1 -> end add to result
  add index 0 to result
and return

reverse
loop from last index -> 0
  add to result
return result

// If
// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".


*/
function sumOfCubes(str) {
  let digits = str.split('').map((elem) => Number(elem));
  let sum = digits.reduce((sum, num) => sum += num ** 3);
  return (sum % 2 === 0);
}

function reverse(str) {
  return str.split('').reverse().join('');
}

function rotateIt(str) {
  let strArr = str.split('');
  let result = [];

  for (let i = 1; i <= strArr.length - 1; i++) {
    result.push(strArr[i]);
  }
  result.push(strArr[0]);
  return result.join('');
}

// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

function buildCollection(str, sz) {
  let substr = [];
  let counter = 0;
  let collection = "";
  let strArr = str.split('');

  do {
    collection += strArr.shift();
    counter++;
    if (counter === sz) {
      substr.push(collection);
      collection = "";
      counter = 0;
    }
  } while (strArr.length > 0);
  return substr;
}

function revrot(str, sz) {
  if (sz <= 0 || str === "" || sz > str.length) return "";

  return buildCollection(str, sz).map((substr) => {
    if (sumOfCubes(substr)) {
      return reverse(substr);
    } else {
      return rotateIt(substr);
    }
  }).join('');
}


console.log(revrot("123456987654", 6)); //--> "234561876549"
console.log(revrot("123456987653", 6)); //--> "234561356789"
console.log(revrot("66443875", 4)); //--> "44668753"
console.log(revrot("66443875", 8)); //--> "64438756"
console.log(revrot("664438769", 8)); //--> "67834466"
console.log(revrot("123456779", 8)); //--> "23456771"
console.log(revrot("", 8)); //--> ""
console.log(revrot("123456779", 0)); //--> ""
console.log(revrot("563000655734469485", 4)); //--> "0365065073456944"
console.log(revrot("563000655734469485", -4)); //--> ""
console.log(revrot("123456987654", 15)); //--> ""