/*
Write a Function named octalToDecimal that
performs octal to decimal conversion. When invoked
on a String that contains the representation of an octal number,
the Function returns a decimal version of that value as a Number.
Implement the conversion yourself: do not use something else to
perform the conversion for you.
*/

function octalToDecimal(numberString) {
  let decimalParts = numberString.split('').map((digitChar, index) => {
    return Number(digitChar) * Math.pow(8, numberString.length - index - 1);
  });

  return decimalParts.reduce((sum, number) => sum + number);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9
