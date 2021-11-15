function domainValid(domain) {
  for (let i = 0; i < domain.length; i++) {
    if (domain[i] === '.' && domain[i + 1] === '.') {
      return false;
    }
  }

  let domainArr = domain.split('.');

  for (let i = 0; i < domainArr.length; i++) {
    if (domainArr[i] === '') {
      domainArr.splice(i, 1);
    }
  }

  if (domainArr.length < 2) {
    return false;
  }

  return domainArr.every(domainWordValid);
}
function domainWordValid(word) {
  return word.split('').every((elem) => {
    if (elem.match(/[A-Za-z]/)) {
      return true;
    }
    return false;
  });
}

function localValid(local) {
  return local.split('').every((elem) => {
    if (elem.match(/[A-Za-z1-9]/)) {
      return true;
    }
    return false;
  });
}

function isValidEmail(email) {
  let emailArr = email.split('@');
  return (domainValid(emailArr[1]) && localValid(emailArr[0]));
}

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false