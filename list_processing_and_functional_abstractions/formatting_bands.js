/*
There are problems with this data, though,
so we first have to clean it up before we can use it:

    The band countries are wrong: all the bands
     should have 'Canada' as the country.
    The band name should have all words capitalized.
    Remove all dots from the band names.

Write a function that can process the input band Array
and return an Array that contains the fixed information:
*/

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function removePunctuation(sentence) {
  let array = sentence.split(' ');
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i].split('').filter((elem) => ALPHABET.includes(elem.toLowerCase())));
  }
  // array = array.filter((elem) => ALPHABET.includes(elem.toLowerCase()));
  result = result.map((elem) => elem.join(''));
  return result.join(' ');
}

function capitalizeWords(str) {
  let array = str.split(' ');
  let wordArray = [];
  array = array.map((elem) => {
    wordArray = elem.split('');
    wordArray[0] = elem[0].toUpperCase();
    return wordArray.join('');
  });
  return array.join(' ');
}

function processBands(data) {
  data.map((band) => {
    band.country = "Canada";
    band.name = capitalizeWords(band.name);
    band.name = removePunctuation(band.name);
    return bands;
  });
  return data;
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]
