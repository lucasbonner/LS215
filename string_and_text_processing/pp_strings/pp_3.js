/*
Split the fullName variable into an array
that contains the first and last names
as separate strings. Log the value of the array.
*/
let firstName = 'Lucas';
let lastName = 'Bonner';
let fullName = firstName + ' ' + lastName;
fullName = fullName.split(' ');
console.log(fullName);