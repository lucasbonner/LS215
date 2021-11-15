function myOwnEvery(array, func) {
  for (let i = 0; i < array.length; i++) {
    if (!func(array[i])) {
      return false;
    }
  }
  return true;
}

let isAString = value => typeof value === 'string';
let isANumber = function(value) {
  return typeof value === 'number' && !Number.isNaN(value);
};


console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true
console.log(myOwnEvery(['a', 'a234', 5], isAString));
console.log(myOwnEvery([2, 'a234', 5], isAString));
console.log(myOwnEvery([1, 5, 6, 7, '1'], isANumber));             // false
console.log(myOwnEvery([1, 5, 6, 7, 1], isANumber));               // true
console.log(myOwnEvery([1, 5, 6, 7, NaN], isANumber));             // false