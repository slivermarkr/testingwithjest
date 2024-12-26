function capitalize(input) {
  const inputToArr = input.split("");
  inputToArr[0] = inputToArr[0].toUpperCase();
  return inputToArr.join("");
}
module.exports = capitalize;
