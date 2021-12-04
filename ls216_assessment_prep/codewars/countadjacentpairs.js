/*
You know how sometimes you write the the same word twice in a sentence, but then don't notice that it happened? For example, you've been distracted for a second. Did you notice that "the" is doubled in the first sentence of this description?

As as aS you can see, it's not easy to spot those errors, especially if words differ in case, like "as" at the beginning of this sentence.

Write a function that counts the number of sections repeating the same word (case insensitive). The occurence of two or more equal words next after each other counts as one.


countAdjacentPairs('orange orange kiwi pineapple apple') // 1
countAdjacentPairs('orange Orange kiwi pineapple apple') // 1
countAdjacentPairs('banana banana banana') //1, Once a word has been paired, it is ignored.

*/
/*
PEDAC:
Write a function that counts the number of sections repeating the same word (case insensitive). The occurence of two or more equal words next after each other counts as one.

Data Structures:
input -> string (wt repeating words)
output -> integer (number of sections(?) repeating the same word)

Rules:
repeating word case insenstive
occurence of two or more equal words next to each other, counts as one

Examples:
countAdjacentPairs('orange orange kiwi pineapple apple') // 1
['orange', 'orange', 'kiwi', 'pineapple', 'apple']
['orange', 'orange'] -> 1
orange -> twice
'kiwi'
'pineapple'
'apple'


countAdjacentPairs('orange Orange kiwi pineapple apple') // 1
['orange', 'Orange'] -> 1


countAdjacentPairs('banana banana banana') //1, Once a word has been paired, it is ignored.

countAdjacentPairs('orange', 'ORANGE', 'kiwi', 'kiwi', 'pineapple', 'apple', 'apple')
['orange', 'ORANGE'] -> 1
['kiwi', 'kiwi'] -> 1
['apple', 'apple'] -> 1
3

countAdjacentPairs('orange', 'ORANGE', 'kiwi', 'kiwi','orange', 'pineapple', 'apple','orange', 'orange' 'apple')
['orange', 'ORANGE'] -> 1
['kiwi', 'kiwi'] -> 1
['orange', 'orange'] -> 1

countAdjacentPairs('') -> 0

Algorithm:
input string split it into an arrayOfWords

Iterate thru the arrayOfWords, collecting repeats
  result collection, subarray collection
  as we iterate, add word to subarray collection
    if current element(downcased) equals subarray last element (downcased) to subarray -> add current element to subarray
      if current element !== last added, and subarray not empty, add to result
      set subarray to empty, and then add current element
Return the length of result, should be count of 'sections'
*/

function countAdjacentPairs(str) {
  let arrayOfWords = str.split(' ');
  let result = [];
  let subarray = [];
  let previousElement;

  arrayOfWords.forEach((word) => {
    let currentElement = word.toLowerCase();

    if (currentElement === previousElement) {
      subarray.push([currentElement, previousElement]);
    }

    previousElement = currentElement;
  });
  return subarray.length;
}


console.log(countAdjacentPairs('orange ORANGE kiwi kiwi orange pineapple apple orange orange apple apple')); //3
console.log(countAdjacentPairs('orange ORANGE kiwi kiwi pineapple apple apple')); //3
console.log(countAdjacentPairs('orange orange kiwi pineapple apple')); //1
console.log(countAdjacentPairs('orange Orange kiwi pineapple apple')); //1
console.log(countAdjacentPairs('orange Orange kiwi'));
console.log(countAdjacentPairs(''));//0: //-> 0