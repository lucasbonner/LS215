/*
Given an n x n array, return the array elements
arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]

For better understanding, please follow the numbers
 of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
let result = []
array[0][0], array[0][1], array[0][2], array[1][2], array[2][2], array[2][1], array[2][0], array[1][0], array[1][1]

sequentially ALL of first array
  last of every array up to last array
    backwards through last array
  first of every array
    until array[0][1]
      up through it (up until last element)

*/

snail = function(array) {
  let result = [];
  let ender = (array.length - 1);
  let starter = 0;

  if (array[0].length === 0) {
    return result;
  }

  do {
    for (let i = starter; i < ender; i++) {
      result.push(array[starter][i]);
    }

    for (let i = starter; i < ender; i++) {
      result.push(array[i][ender]);
    }

    for (let i = ender; i >= starter; i--) {
      result.push(array[ender][i]);
    }

    for (let i = ender - 1; i >= starter + 1; i--) {
      result.push(array[i][starter]);
    }

    starter += 1;
    ender -= 1;
  } while (starter <= ender);
  console.log(result);
}

snail([[]])//, []);
snail([[1]])//, [1]);
snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])//, [1, 2, 3, 6, 9, 8, 7, 4, 5]);
snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])//, [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
snail([[1, 2, 3, 1], [4, 5, 6, 4], [7, 8, 9, 7], [7, 8, 9, 7]]);
snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]) //, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);