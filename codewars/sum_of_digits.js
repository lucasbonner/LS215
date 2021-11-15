/*
PEDAC:
Instructions
Given n, take the sum of the digits of (n)
If value has more than one digit (length > 1) continue reducing until single digit

Input -> integer
output -> integer

Rules -> Keep reducing until single integer found

Test cases:
16 -> 1 + 6 -> 7 (return 7)

456 -> 4 + 5 + 6 -> 15 -> 1 + 5 -> 6 (return 6)

PSEUDO:
Break integer into seperate elements
Sum these elements
If sum length is < 2
  return sum
*/


function digital_root(n) {
  let strArr = String(n).split('');
  let sum = 0;

  do {
    sum = getSum(strArr);
    strArr = String(sum).split('');
  } while (String(sum).length >= 2);
  return sum;
}

function getSum(arr) {
  let sum = 0;
  arr.forEach(num => {
    sum += parseInt(num);
    return sum;
  });
  return sum;
}

console.log(digital_root(16));
console.log(digital_root(456));