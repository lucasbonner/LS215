/*
Write a program that asks for a user's name,
then greets the user with that name. If the user appends a ! to his name
(e.g., 'Bill!'), the computer should "yell" its greeting: that is,
it should log everything to the console in uppercase.
You can check whether the name ends with a ! u
sing String.prototype.endsWith (ES6 only).
You can remove the ! from the user's name with String.prototype.slice.
*/
var rl = require('readline-sync');

let name = rl.question('What is your name? \t')
if (name[name.length - 1] === '!') {
  name = name.slice(0, name.length - 1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}