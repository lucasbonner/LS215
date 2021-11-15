/*
Write a function that generates and returns
an acronym from a string of words.
 For example, the function should return
 "PNG" for the string "Portable Network Graphics".
 Count compound words (words connected with a dash)
 as separate words.
*/

function gimmeTheFirst(string) {
  return string[0].toUpperCase();
}

function acronym(string) {
  return string.replace(/-/g, ' ').split(' ').map(gimmeTheFirst).join('');
}

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"