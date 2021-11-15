/*
Define a function that takes one integer argument and returns logical value
true or false depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater
than 1 that has no positive divisors other than 1 and itself.
Requirements

    You can assume you will be given an integer input.
    You can not assume that the integer will be only positive. You may be
    given negative numbers as well (or 0).
    NOTE on performance: There are no fancy optimizations required, but
    still the most trivial solutions might time out. Numbers go up to 2^31
    (or similar, depends on language version). Looping all the way up to n,
    or n/2, will be too slow.

*/
/*
pedac:
input -> integer
output -> boolean(whether prime or not)

What is prime?
  natural number(?) greater than 1 that has no positive divisors other than 1 and itself

Rules->
  integer input
  may be negative

May be time for optimization starting with high integer into small integer?
  for example, 73 (prime)
    set i to 2, j to 72 (input - 1)
      i goes up, checking if divisible
      j goes down, checking if divisible
        if i > j
          return true
        if find divisor, return false
      return true at bottom if doesn't find divisor
*/

function isPrime(integer) {
  if (!(integer > 1)) {
    return false;
  } else if (integer === 2) {
    return true;
  }

  let i = 2;
  let j = (integer - 1);

  do {
    if (integer % i === 0 || integer % j === 0) {
      return false;
    }
    i++;
    j--;
  } while (i < j);
  return true;
}

// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */

console.log(isPrime(0)) //  false, "0 is not prime");
console.log(isPrime(1)) //  false, "1 is not prime");
console.log(isPrime(2)) //  true, "2 is prime");
console.log(isPrime(73)) // true, "73 is prime");
console.log(isPrime(75)) // false, "75 is not prime");
console.log(isPrime(-1)) // false, "-1 is not prime");
