/*
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:

*/

function zero(...args) {
  let num = 0;
  if (args.length !== 0) {
    return compute(num, args);
  }
  return num;
}
function one(...args) {
  let num = 1;
  if (args.length !== 0) {
    return compute(num, args);
  }
  return num;
}
function two(...args) {
  let num = 2;
  if (args.length !== 0) {
    return compute(num, args);
  }
  return num;
}
function three(...args) {
  let num = 3;
  if (args.length !== 0) {
    return compute(num, args);
  }
  return num;
}
function four(...args) {
  let num = 4;
  if (args.length !== 0) {
    return compute(num, args);
  }
  return num;
}
function five(...args) {
  let num = 5;
  if (args.length !== 0) {
    return compute(num, args);
  }
  return num;
}
function six(...args) {
  let num = 6;
  if (args.length !== 0) {
    return compute(num, args);
  }
  return num;
}
function seven(...args) {
  let num = 7;
  if (args.length !== 0) {
    return compute(num, args);
  }
  return num;
}
function eight(...args) {
  let num = 8;
  if (args.length !== 0) {
    return compute(num, args);
  }
  return num;
}
function nine(...args) {
  let num = 9;
  if (args.length !== 0) {
    return compute(num, args);
  }
  return num;
}

function compute(num, args) {
  let operator = args[0][1];
  let secondNum = args[0][0];

  if (operator === '*') {
    return num * secondNum;
  } else if (operator === "+") {
    return num + secondNum;
  } else if (operator === "-") {
    return num - secondNum;
  } else if (operator === '/') {
    return Math.floor(num / secondNum);
  }
}

function plus(...args) {
  args.push('+');
  return args;
}
function minus(...args) {
  args.push('-');
  return args;
}
function times(...args) {
  args.push('*');
  return args;
}
function dividedBy(...args) {
  args.push('/');
  return args;
}

// console.log(seven(times(five()))); // 35);
// console.log(four(plus(nine()))); // 13);
console.log(eight(minus(three()))); // 5);
console.log(six(dividedBy(two()))); // 3);