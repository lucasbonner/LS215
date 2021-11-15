/*
The Function passed to myForEach should reassign a variable
in the outer scope. For instance, in the code fragment below,
the Function passed to myForEach reassigns the min variable.
*/

function myForEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i], i, array);
  }
}

let min = Infinity;
let getMin = value => (min = value <= min ? value : min);
myForEach([4, 5, 12, 23, 3], getMin);
console.log(min);                        // 3