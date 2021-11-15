/*
Write a function that takes a string of parentheses, and determine
s if the order of the parentheses is valid.
The function should return true if the string is valid,
and false if it's invalid.
Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

result = []
"(())((()())())"
shift TWICE everytime hit ")"
result = "("
result = "(("
result = "(()"

*/

function validParentheses(parens) {
  let result = [];

  for (let i = 0; i <= parens.length - 1; i++) {
    result.push(parens[i]);

    if (result[result.length - 1] === ')' && result[result.length - 2] === '(') {
      result.pop();
      result.pop();
    }
  }
  if (result.length > 0) {
    return false;
  }
  return true;
}

validParentheses( "())" ); // false);
validParentheses( "()" ); //, true)
validParentheses("(())((()())())");
validParentheses(")(()))")
