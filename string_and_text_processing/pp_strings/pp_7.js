/*
Find the index of the last occurrence of the letter 'a'
in the language variable and log the result.
*/
let language = 'JavaScript';
let idx = language.indexOf('S');
let charCode = language.charCodeAt(idx);
console.log(String.fromCharCode(charCode));
console.log(language.lastIndexOf('a'));