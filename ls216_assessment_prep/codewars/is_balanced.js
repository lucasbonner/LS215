/*
Background
We all know about "balancing parentheses" (plus brackets, braces and chevrons) and even balancing characters that are identical.

Read that last sentence again, I balanced different characters and identical characters twice and you didn't even notice... :)

Kata
Your challenge in this kata is to write a piece of code to validate that a supplied string is balanced.

You must determine if all that is open is then closed, and nothing is closed which is not already open!

You will be given a string to validate, and a second string, where each pair of characters defines an opening and closing sequence that needs balancing.

You may assume that the second string always has an even number of characters.

Problem:
  given str1, and set of 'openers and closers'
  see if str1 was 'closed'

Data structure:
  input -> two strings
  output -> boolean (whether all opened closed)

Ex:
isBalanced("(Sensei says yes!)", "()")
"(" must be closed with ")"
"(Sensei says yes!)" has both "(" and ")'
and "(" comes first
and then ")"
()

isBalanced("(Sensei says no!", "()")
"(Sensei says no!"
opened, but never closed


"(Sensei [says] yes!)" //true
([])

"(Sensei [says) no!]", "()[]")   //false
"(Sensei [says) no!]"
([)]

"Sensei says 'yes'!", "''"  //true
' '

"Sensei say's no!", "''")

'

Algo:
  remove all characters that are not ()[]''
ex. ([)], ' ', ([]), ()
([)]

object = {(: ), [: ] , ': '}
stack = []

object to keep track of if opened have been closed
stack to keep track of what type of opener was previously used

([)]
1st iteration:
[   (   ) ] -> pop off the stack when get a closer

pairs -> { (: ), [: ] , ': '}

currentElem -> (


have lookup object tgo see if current 'closer' is correct for opener
have stack to collect openers
  pop from stack when you find a closer
    use lookup object to verify


# https://leetcode.com/problems/valid-parentheses/

*/
function isBalanced(str, sections) {
  let pairs = {'(' : ')', '[': ']', "'": "'", '-': '-'};
  let stack = [];

  let arrOfChars = str.split('').filter((char) => {
    return char.match(/[\-\(\)\[\]\'\']/);
  });

  arrOfChars.forEach(elem => {
    if (!stack.includes(elem) && Object.keys(pairs).includes(elem)) {
     stack.push(elem);
    } else {
     if (pairs[stack[stack.length - 1]] === elem) {
      stack.pop();
     } else {
      stack.push(false)
     }
    }
  });
  if (stack.includes(false)) {
    return false;
  }
  return stack.length === 0;
}


console.log(isBalanced("(Sensei says yes!)", "()")); // true));
console.log(isBalanced("(Sensei says no!", "()")); // false));

console.log(isBalanced("(Sensei [says] yes!)", "()[]")); // true));
console.log(isBalanced("(Sensei [says) no!]", "()[]")); // false));

console.log(isBalanced("Sensei says -yes-!", "--"));
console.log(isBalanced("Sensei -says no!", "--"));
console.log(isBalanced("-!", "--"));
console.log(isBalanced("[))]", "[]()"));