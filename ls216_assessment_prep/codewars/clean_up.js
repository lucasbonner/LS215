// Cleaning Project Files
// You are in the midst of organizing all of your coding projects. It's a mess! Every file you've ever created is located in the same folder.

// To clean it up, you've decided that you will use one of two organization methods.

// The prefix method: You will group all files with the same project name under the same folder.
// The suffix method: You will group all files with the same extension under the same folder.
// Create a function that takes in the current folder sorts the files according to the organization method (prefix or suffix). A folder is a grouping of files in the same array.

// Examples
// // Sorting by project name (ex1 and ex2)
// cleanUp(["ex1.html", "ex1.js", "ex2.html", "ex2.js"], "prefix") ➞ [
//   ["ex1.html", "ex1.js"],
//   ["ex2.html", "ex2.js"]
// ]

// // Sorting by extension (.html and .js)
// cleanUp(["ex1.html", "ex1.js", "ex2.html", "ex2.js"], "suffix") ➞ [
//   ["ex1.html", "ex2.html"],
//   ["ex1.js", "ex2.js"]
// ]

// cleanUp(["music_app.js", "music_app.png", "music_app.wav", "tetris.png", "tetris.js"], "prefix") ➞ [
//   ["music_app.js", "music_app.png", "music_app.wav"],
//   ["tetris.png", "tetris.js"]
// ]

// cleanUp(["_1.rb", "_2.rb", "_3.rb", "_4.rb"], "suffix") ➞ [
//   ["_1.rb", "_2.rb", "_3.rb", "_4.rb"]
// ]

// cleanUp(["_1.rb", "_2.rb", "_3.rb", "_4.rb"], "prefix") ➞ [
//   ["_1.rb"], ["_2.rb"],
//   ["_3.rb"], ["_4.rb"]
// ]
// Notes
// Keep elements in the same relative order.
/*
-----------------------INSTRUCTIONS--------------------------------------
// The prefix method: You will group all files with the same project name under the same folder.
// The suffix method: You will group all files with the same extension under the same folder.

// Create a function that takes in the current folder sorts the files according to the organization method (prefix or suffix). A folder is a grouping of files in the same array.
--------------------------PROBLEM----------------------------------------

Questions:

Input: array of files (strings), string ('prefix' or 'suffix') i.e. method used

Output: array of subarrays, organized by the method

---------------------------RULES-----------------------------------------
Explicit:
keep elements in same relative order
prefix -> group by 'project name' (i.e. everything before the period)

suffix -> group by extension (i.e. everything after the period)

Implicit:

--------------------------EXAMPLES---------------------------------------
// cleanUp(["ex1.html", "ex1.js", "ex2.html", "ex2.js"], "prefix")

["ex1.html", "ex1.js", "ex2.html", "ex2.js"], 'prefix'
'ex1.html' and 'ex1.js' together
'ex2.html' and 'ex2.js' together

have a collection
iterate thru the array
  so if split on '.', its going to be the first element compared


output:
➞ [
//   ["ex1.html", "ex1.js"],
//   ["ex2.html", "ex2.js"]
// ]


// cleanUp(["ex1.html", "ex1.js", "ex2.html", "ex2.js"], "suffix")
["ex1.html", "ex1.js", "ex2.html", "ex2.js"]
"ex1.html" and "ex2.html"
"ex1.js' and "ex2.js'

output:
➞ [
//   ["ex1.html", "ex2.html"],
//   ["ex1.js", "ex2.js"]
// ]

// cleanUp(["music_app.js", "music_app.png", "music_app.wav", "tetris.png", "tetris.js"], "prefix")
'music_app.js', 'music_app.png', 'music_app.wav'
'tetris.png' and 'tetris.js'

➞ [
//   ["music_app.js", "music_app.png", "music_app.wav"],
//   ["tetris.png", "tetris.js"]
// ]

// cleanUp(["_1.rb", "_2.rb", "_3.rb", "_4.rb"], "suffix") ➞ [
//   ["_1.rb", "_2.rb", "_3.rb", "_4.rb"]
// ]
all together because all end in .rb

// cleanUp(["_1.rb", "_2.rb", "_3.rb", "_4.rb"], "prefix") ➞ [
//   ["_1.rb"], ["_2.rb"],
//   ["_3.rb"], ["_4.rb"]
all seperate because none equal each other

Clarifications:
first string all file names in array
  -> at least one
  -> no guarantee that any equal each other
str2 will always be prefix or suffix

----------------------------ALGO----------------------------------------
prefix method
have a collection array (result)
have collection of prefixes used
iterate thru input array
  on each element filter the array for everything where prefix equals current     element unless current prefix is in used collection
  ex. element is ex1.html, filter input array for everything that .split('.')[0] is   ex1 and add to collection



suffix method
have a collection array (result)
have collection of suffixes used
iterate thru input array
  on each element filter the array for everything where prefix equals current     element unless current prefix is in used collection
  ex. element is ex1.html.split(.)[1], filter input array for everything that .split('.')[1] is   ex1 and add to collection
*/

function prefix(files) {
  let result = [];
  let usedPrefix = [];

  files.forEach(file => {
    let currentPrefix = file.split('.')[0];
    if (!usedPrefix.includes(currentPrefix)) {
      result.push(files.filter(file => {
        return currentPrefix === file.split('.')[0];
      }));
    }
    usedPrefix.push(currentPrefix);
  });
  return result;
}

function suffix(files) {
  let result = [];
  let usedSuffix = [];

  files.forEach(file => {
    let currentSuffix = file.split('.')[1];
    if (!usedSuffix.includes(currentSuffix)) {
      result.push(files.filter(file => {
        return currentSuffix === file.split('.')[1];
      }));
    }
    usedSuffix.push(currentSuffix);
  });
  return result;
}

function cleanUp(files, collectionMethod) {
  if (collectionMethod === 'prefix') {
    return prefix(files);
  }
  return suffix(files);
}


// Sorting by project name (ex1 and ex2)
console.log(cleanUp(["ex1.html", "ex1.js", "ex2.html", "ex2.js"], "prefix")); //➞ [
//   ["ex1.html", "ex1.js"],
//   ["ex2.html", "ex2.js"]
// ]

// // Sorting by extension (.html and .js)
console.log(cleanUp(["ex1.html", "ex1.js", "ex2.html", "ex2.js"], "suffix")); //➞ [
//   // ["ex1.html", "ex2.html"],
//   // ["ex1.js", "ex2.js"]
// ]

console.log(cleanUp(["music_app.js", "music_app.png", "music_app.wav", "tetris.png", "tetris.js"], "prefix")); //➞ [
//   ["music_app.js", "music_app.png", "music_app.wav"],
//   ["tetris.png", "tetris.js"]
// ]

console.log(cleanUp(["_1.rb", "_2.rb", "_3.rb", "_4.rb"], "suffix")); //➞ [
// //   ["_1.rb", "_2.rb", "_3.rb", "_4.rb"]
// // ]

console.log(cleanUp(["_1.rb", "_2.rb", "_3.rb", "_4.rb"], "prefix")); //➞ [
//   ["_1.rb"], ["_2.rb"],
//   ["_3.rb"], ["_4.rb"]
// ]