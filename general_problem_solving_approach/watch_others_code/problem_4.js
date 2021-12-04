/*
You are given a list of numbers in a "short-hand" range
where only the significant part of
the next number is written because we know the numbers are always increasing (
ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]).
Some people use different separators for their ranges
(ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the
same numbers [1, 2, 3, 11, 12]). Range limits are always inclusive.

Your job is to return a list of complete numbers.

The possible separators are: ["-", ":", ".."]

"1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
"1-3, 1-2" --> 1, 2, 3, 11, 12
"1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
"104-2" --> 104, 105, ... 112
"104-02" --> 104, 105, ... 202
"545, 64:11" --> 545, 564, 565, .. 611

*/
/*
-----------------------INSTRUCTIONS--------------------------------------
given a 'short hand' list of numbers
return the entire range
--------------------------PROBLEM----------------------------------------

Questions:

Input: string of numbers (in shorthand)

Output: list of numbers (array)

---------------------------RULES-----------------------------------------
Explicit:
The possible separators are: ["-", ":", ".."]

Implicit:

--------------------------EXAMPLES---------------------------------------
"1, 3, 7, 2, 4, 1"


"545, 64:11"


"1:5:2"


with "1-3, 1-2"


"1, 3, 7, 2, 4..1"

----------------------------ALGO----------------------------------------
have result collection
whatever is added to collection must be greater
than what was previously added
  if element has seperators in it
    is a range and must be ranged over
    however, there are some like 64:11
      where the first integer must be changed
first we need a method that can get appropriate next number

*/

const SEPERATORS = ["-", ":", ".."];

// function wrong(arr1, arr2) {
//   for (let i = arr2.length - 1; i >= 0; i--) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(wrong(['2', '0', '2'], ['0', '2'])); //true
// console.log(wrong(['1', '1', '2'], ['2'])); //true
// console.log(wrong(['1', '1', '2'], ['0', '2']); //false

// function getSecondNumber(str1, str2) {
//   let firstNum = Number(str1);

// }

// console.log(getSecondNumber('104', '02'));
// console.log(getSecondNumber('104', '2'));
// console.log(getSecondNumber('64', '11'));

function compareEnding(first, second) {
  let secondOg = second;

  first = String(first).split('');
  second = String(second).split('');
  let compare1 = [];
  let compare2 = [];
  for (let i = 0; i < secondOg.length; i++) {
    compare1.push(first.pop());
    compare2.push(second.pop());
  }
  let state = true;
  compare1.forEach((elem, index) => {
    if (elem !== compare2[index]) {
      state = false;
    }
  });
  return state;
}

function rangeOver(range) {
  let rangeArr = range.split(/[:-]/).map(number => Number(number));
  let result = [];
  let firstNumber;
  let secondNumber;

  if (rangeArr.length < 3) {
    firstNumber = rangeArr[0];
    secondNumber = rangeArr[1];
  } else if (rangeArr.length === 3) {
    firstNumber = rangeArr[0];
    secondNumber = rangeArr[1];
  }

  if (secondNumber > firstNumber) {
    do {
      result.push(firstNumber);
      firstNumber++;
    } while (firstNumber <= secondNumber);
  }

  if (result.length !== 0) {
    return result;
  } else {
    result.push(rangeArr[0]);
  }

  let stringRangeArr = range.split(/[:-]/)
  let start = result[result.length - 1];
  let end = stringRangeArr[stringRangeArr.length - 1];

  do {
    result.push(start);
    start++;
  } while (!compareEnding(start, end));
  result.push(start);
  return result;
}



function shortHand(str) {
  let strArr = str.split(',');
  let result = [];
  let firstNum;
  let iterationRange;
  strArr.forEach((elem) => {
    if (Number(elem) > result[result.length - 1] || result.length === 0 && (!elem.split('').some(elem => elem.match(/[:-]/)))) {
      result.push(Number(elem));
    } else if (elem.split('').some(elem => elem.match(/[:-]/))) {
      let number = elem.split('').filter(char => char !== " ");
      firstNum = number[0];
      if (result.length === 0) {
        result.push(rangeOver(elem));
      } else {
        iterationRange = `${result.flat()[result.flat().length - 1]}-${firstNum}`;
        result.push(rangeOver(iterationRange));
      }
    }
  });
  return result.flat();
}

console.log(shortHand("1, 3, 7, 2, 4, 1")); //1, 3, 7, 12, 14, 21
console.log(shortHand("1-3, 1-2")); //1, 2, 3, 11, 12
console.log(shortHand("1:5:2")); //1, 2, 3, 4, 5, 6, ... 12
console.log(shortHand("104-2")); //104, 105, ... 112
console.log(shortHand("104-02" )); //104, 105, ... 202
console.log(shortHand("545, 64:11")); //545, 564, 565, .. 611
