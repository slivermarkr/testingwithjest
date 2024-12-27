function caesarcipher(inputString, moveCount) {
  let newString = "";

  for (let i = 0; i <= inputString.length - 1; i++) {
    newString += helper(inputString[i], moveCount);
  }

  return newString;
}

function helper(char, count) {
  let code = char.charCodeAt(0);

  if (code < 65 || code > 122) return char;

  if (code < 97) {
    code = code + count;
    code = ((code - 65) % 26) + 65;
    return String.fromCharCode(code);
  } else {
    code = code + count;
    code = ((code - 97) % 26) + 97;
    return String.fromCharCode(code);
  }
}
module.exports = caesarcipher;
