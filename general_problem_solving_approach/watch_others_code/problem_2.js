/*
The Luhn formula is a simple checksum formula used to validate a variety
of identification numbers,
such as credit card numbers and Canadian Social Insurance Numbers.

The formula verifies a number against its included check digit, which is usually
 appended to a partial number to generate the full number.
  This number must pass the following test:

    Counting from the rightmost digit and moving left,
     double the value of every second digit
    For any digit that then becomes 10 or more, subtract 9 from the result
        1111 becomes 2121
        8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
    Add all these digits together
        1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
        8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0),
then the number is valid according to the Luhn Formula; else it is not valid.
Thus, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

Write a program that, given a number in string format, check if it is valid per the Luhn formula.
This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.
*/
/*
-----------------------INSTRUCTIONS--------------------------------------
start from rightmost digit, move left, double every value of every second digit
  if result (of double value of second digit) is greater than 10, subtract 9
take this new number, add each digit, result is checksum
  if checksum ends in 0 (ex. 20) then it is valid per the Luhn formula
--------------------------PROBLEM----------------------------------------

Questions:

Input: string

Output: boolean

---------------------------RULES-----------------------------------------
Explicit:
  if checksum ends in 0, return TRUE
  You can ignore all non-numeric characters in the input string.\

Implicit:

--------------------------EXAMPLES---------------------------------------
1111
[1, 1, 1, 1]
(1*2), 1, (1*2), 1 = 2121
2 + 1 + 2 + 1 = 6 //false

8763
[8, 7, 6, 3]
(8 * 2), 7, (6 * 2), 3
(16 - 9) + 7 + (12 - 9) + 3
7 + 7 + 3 + 3 = 20 //true
----------------------------ALGO----------------------------------------
first strip string of all non-numeric characters
create a collection array
loop thru string backwards
  convert current char to integer
  on every other number multiply by 2
  if this is greater than 10, subtract 9 and add to collection array
  otherwise just add to collection array
sum the array
boolean check for if checksum ends in 0
*/


function keepNumbers(elem) {
  return elem.match(/[1-9]/);
}

function luhnFormula(string) {
  let strArr = string.split('').filter(keepNumbers);
  let result = [];
  let iterator = 1;
  let currentNumber = 0;

  for (let i = strArr.length - 1; i >= 0; i--) {
    currentNumber = Number(strArr[i]);

    if (iterator % 2 === 0) {
      currentNumber *= 2;
    }

    if (currentNumber >= 10) {
      currentNumber -= 9;
    }
    iterator += 1;

    result.push(currentNumber);
  }
  let checksum = String(result.reduce((sum, elem) => sum + elem, 0));
  return checksum[checksum.length - 1] === '0';
}

console.log(luhnFormula("1111")) //=== false);
console.log(luhnFormula("8763")) //=== true);
console.log(luhnFormula("2323 2005 7766 3554"));
console.log(luhnFormula("2323-2005.....7766-.(();3554"));
console.log(luhnFormula("11114")) //=== false);

/*
Write a function that can add a check digit to make
the number valid per the Luhn formula
and return the original number plus that digit
This should give
  2323 2005 7766 3554 from
  2323 2005 7766 355
*/

function checkDigit(string) {
  if (luhnFormula(string)) {
    return string;
  }

  let iterator = 0;
  let ogString = string;

  do {
    string = ogString;
    string += String(iterator);
    iterator += 1;
  } while (!luhnFormula(string));

  return string;
}

console.log(checkDigit("2323 2005 7766 355")); //2323 2005 7766 3554
console.log(checkDigit("1111")); //11114
console.log(checkDigit("876")); //8763
