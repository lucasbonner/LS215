function myMap(array, func) {
  let result = [];
  array.forEach(num => result.push(func(num)));
  return result;
}

let plusOne = n => n + 1;
console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]

/*
let count = [1, 2, 3, 4, 5];
let doubled = count.map((number, index, array) => number * 2); // double each number
console.log(doubled);                                          // logs [ 2, 4, 6, 8, 10 ]
*/