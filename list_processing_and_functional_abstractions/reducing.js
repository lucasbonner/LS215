function myReduce(array, func, initial = array[0]) {
  for (let i = 0; i < array.length; i++) {
    initial = func(initial, array[i]);
  }
  return initial;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;
let longest = function (result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
};

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49
console.log(myReduce(['abc', 'launch', 'targets', ''], longest));            // 49