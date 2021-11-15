/*
Convert the boxNumber variable back to a number using parseInt.
To make sure the result is a number, you can log typeof boxNumber to
 verify the type of the result.
 Now convert the number back to a String by using the String function
 and log the typeof of the result to verify it is now a String.
*/
let boxNumber = (356).toString();
console.log(boxNumber);
boxNumber = parseInt(boxNumber)
console.log(typeof boxNumber);
boxNumber = String(boxNumber);
console.log(typeof boxNumber);
