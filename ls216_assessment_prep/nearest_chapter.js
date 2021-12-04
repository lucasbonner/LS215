// Nearest Chapter
// Create a function that returns which chapter is nearest to the page you're on. If two chapters are equidistant, return the chapter with the higher page number.

// Examples
// nearestChapter({
//   "Chapter 1" : 1,
//   "Chapter 2" : 15,
//   "Chapter 3" : 37
// }, 10) ➞ "Chapter 2"

// nearestChapter({
//   "New Beginnings" : 1,
//   "Strange Developments" : 62,
//   "The End?" : 194,
//   "The True Ending" : 460
// }, 200) ➞ "The End?"

// nearestChapter({
//   "Chapter 1a" : 1,
//   "Chapter 1b" : 5
// }, 3) ➞ "Chapter 1b"
/*
-----------------------INSTRUCTIONS--------------------------------------

--------------------------PROBLEM----------------------------------------

Questions:

Input: object (key: chapter, value: page), integer (current page)

Output: string
-> key from the object
-> chapter title

---------------------------RULES-----------------------------------------
Explicit:
If two chapters are equidistant, return the chapter with the higher page number.

function returns chapter nearest given page (second input)
  -> page values of the chapters in the object
if both chapters are same distance(same amount of pages) from given page, return chapter with higher page number

given: page 10
chapter 1 -> page 5
chapter 2 -> page 15
page 15 > page 5
so return chapter 2


Implicit:

--------------------------EXAMPLES---------------------------------------
// Examples
// nearestChapter({
//   "Chapter 1" : 1,
//   "Chapter 2" : 15,
//   "Chapter 3" : 37
// }, 10) ➞ "Chapter 2"

object -> {
//   "Chapter 1" : 1,
//   "Chapter 2" : 15,
//   "Chapter 3" : 37
// }

page -> 10

10 - 1 -> 9
15 - 10 -> 5
37 - 10 -> 27

smallest number is 5, so return chapter 2 because difference of 5


// nearestChapter(
//   "New Beginnings" : 1,
//   "Strange Developments" : 62,
//   "The End?" : 194,
//   "The True Ending" : 460
// }, 200) ➞ "The End?"

given page -> 200

200 - 1 -> 199
200 - 62 -> 148
200 - 194 -> 6
460 - 200 -> 206

smallest difference is 6
return 194, which is "The End?"


// nearestChapter({
//   "Chapter 1a" : 1,
//   "Chapter 1b" : 5
// }, 3) ➞ "Chapter 1b"

given page -> 3

5 - 3 -> 2
3 - 1 -> 2
equidistant
return one with higher page count
that's chapter 1b


----------------------------ALGO----------------------------------------
save objects values in array
  differences -> helper function using map on objectvalues -> get all of their                      differences with     givenpage

answerIndex -> get index of the smallest number in differences
  smallest variable
  each iteration check current element against 'smallest'
    if current element is smaller
      reassign smallest
return index of said smallest element


keys -> save all object keys in array
reference answerIndex in keys
is the answer, if there were no equidistant

elementAppearTwice
have smallest variable
  iterate thru array
    have counter = 0
      if counter > 1
        return true


if there are two equidistant
  need both indexes

iterate thru differnces
  each time hit smallest
    save index in resultIndexes



save both in a result array
  iterate thru the result array
    see which returns the highest value from chapterObject

[ 'Chapter 1a', 'Chapter 1b' ]

iterate thru chapterObject
  chapterObject['Chapter 1a']

*/
function elementAppearTwice(i, arr) {
  let counter = 0;
  let bool = false;
  arr.forEach(elem => {
    if (i === elem) {
      counter++;
    }
    if (counter > 1) {
      bool = true;
    }
  });
  return bool;
}

function returnSmallest(arr) {
  let smallest = arr[0]
  arr.forEach(elem => {
    if (elem < smallest) {
      smallest = elem;
    }
  });
  return smallest;
}

function nearestChapter(chapterObject, givenPage) {
  let objectValues = Object.values(chapterObject)
  let objectKeys = Object.keys(chapterObject);
  let differences = objectValues.map(elem => {
   if (elem > givenPage) {
     return (elem - givenPage)
   } else {
     return (givenPage - elem)
   }
  });
  let smallest = returnSmallest(differences);
  let resultIndexes = [];
  differences.forEach((elem,index) => {
    if (elem === smallest) {
      resultIndexes.push(index);
    }
  });
  let result = [];
  resultIndexes.forEach(elem => {
    result.push(objectKeys[elem]);
  });

  let returnChapter = result[0];
  result.forEach(elem => {
    if (chapterObject[returnChapter] < chapterObject[elem]) {
     returnChapter = elem;
    }
  });
  return returnChapter;
}

console.log(nearestChapter({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5,
  "Chapter 2" : 8,
  "Chapter 3" : 9,
}, 3))// ➞ "Chapter 1b"

console.log(nearestChapter({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200))// ➞ "The End?"

console.log(nearestChapter({
  "Chapter 1" : 10,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 100))// ➞ "Chapter 2"