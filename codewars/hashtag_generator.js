/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.

*/
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

function capitalizeFirstLetter(word) {
  let result = [];
  word = word.split('');
  result.push(word.shift().toUpperCase());
  word.forEach(char => result.push(char));
  return result.join('');
}

function capitalizeEveryWord(str) {
  strArr = str.split(' ');
  strArr = strArr.filter(function(elem) {
    return elem[0];
  });
  strArr = strArr.map(function(elem) {
    return capitalizeFirstLetter(elem);
  });
  return strArr.join('');
}

function isFalse(str) {
  let strArr = str.split('');
  strArr = strArr.filter(function(elem) {
    return ALPHABET.includes(elem.toLowerCase());
  });
  if (strArr.length >= 140 || strArr.length === 0) {
    return true;
  }
  return false;
}

function generateHashtag(str) {
  if (isFalse(str)) {
    return false;
  }

  if (str.split(' ').length > 1) {
    str = capitalizeEveryWord(str);
  }

  let strArr = str.split('');
  strArr = strArr.filter(function(elem) {
    return ALPHABET.includes(elem.toLowerCase());
  });

  if (strArr[0] !== strArr[0].toUpperCase()) {
    let tempArr = [];
    tempArr.push(strArr.shift().toUpperCase());
    strArr.forEach(elem => tempArr.push(elem));
    strArr = tempArr;
  }

  return "#" + strArr.join('');
}

generateHashtag("")//, false, "Expected an empty string to return false")
generateHashtag(" ".repeat(200))//, false, "Still an empty string")
generateHashtag("Do We have A Hashtag")//, "#DoWeHaveAHashtag", "Expected a Hashtag (
generateHashtag("Codewars")//, "#Codewars", "Should handle a single word.")
generateHashtag("Codewars Is Nice")//, "#CodewarsIsNice", "Should remove spaces.")
generateHashtag("Codewars is nice")//, "#CodewarsIsNice", "Should capitalize first le
generateHashtag("code" + " ".repeat(140) + "wars")//, "#CodeWars")
generateHashtag("a".repeat(139))//., "#A" + "a".repeat(138)//, "Should work")
generateHashtag("a".repeat(140))// false, "Too long")
