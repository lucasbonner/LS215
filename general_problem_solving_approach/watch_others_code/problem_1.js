/*
Write a program that cleans up user-entered phone numbers so
that they can be sent as SMS messages. Other than digits,
the number may also contain special
character such as spaces, dash, dot, and parentheses that should be ignored.

The rules are as follows:

    If the phone number is less than 10 digits, assume that it is a bad number.
    If the phone number is 10 digits, assume that it is good.
    If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
    If the phone number is 11 digits and the first number is not 1, then it is a bad number.
    If the phone number is more than 11 digits, assume that it is a bad number.

For bad numbers, just a return a string of 10 0s.
*/
/*
-----------------------INSTRUCTIONS--------------------------------------
clean up user-entered phone numbers
--------------------------PROBLEM----------------------------------------

Questions:

Input: string

Output: string (clean number || string of 10 0s)

---------------------------RULES-----------------------------------------
Explicit:
 If the phone number is less than 10 digits, assume that it is a bad number.
  If the phone number is 10 digits, assume that it is good.
  If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
  If the phone number is 11 digits and the first number is not 1, then it is a bad number.
  If the phone number is more than 11 digits, assume that it is a bad number.
  Other than digits,
the number may also contain special
character such as spaces, dash, dot, and parentheses that should be ignored.

Implicit:


--------------------------EXAMPLES---------------------------------------
cleanPhoneNumber('769-666-8300') === 7696668300
remove '-'s
return string

cleanPhoneNumber('(601)_201.8175') === 6012018175
remove parentheses
remove underscore
remove .

cleanPhoneNumber('17697985220') === 7697985220
remove leading 1

cleanPhoneNumber('444') === 0000000000


----------------------------ALGO----------------------------------------
first divide string into single character array
have a collection array
  add to collection array ONLY if it is (0-9)
if length of collection array === 11 && first element is 1
  trim 1, join and return
otherwise just join and return

*/

function cleanPhoneNumber(number) {
  let numArr = number.split('');
  numArr = numArr.filter((elem) => {
    return elem.match(/[0-9]/);
  });
  if (numArr.length === 11 && numArr[0] === '1') {
    numArr.shift();
  }
  if (numArr.length === 10) {
    return numArr.join('');
  }
  return '0000000000';
}

console.log(cleanPhoneNumber('769-666-8300') === '7696668300');
console.log(cleanPhoneNumber('(601)_201.8175'));
console.log(cleanPhoneNumber('17697985220'));
console.log(cleanPhoneNumber('444'));
console.log(cleanPhoneNumber('4hello how are you4@44@4++44 _-_--4       44'));
