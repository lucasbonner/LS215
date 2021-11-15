/*
Given the string representations of two integers,
return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'

A string representation of an integer will
contain no characters besides the ten numerals "0" to "9".

*/

function sumStrings(a,b) {
  if (a === '') {
    return b;
  } else if (b === '') {
    return a;
  }
  return (Number(a, 10) + Number(b, 10));
}

// console.log(sumStrings('1','2')) // => '3'
// console.log(sumStrings('123','456')); //,'579')
// console.log(sumStrings('8797', '45')); //'8842'
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'));