function analyzeArr(input) {
  const obj = {};

  let total = input.reduce(function (acc, curr) {
    return (acc += curr);
  }, 0);

  obj.average = Math.floor(total / input.length);
  input = input.sort();
  obj.min = input[0];
  obj.max = input[input.length - 1];
  obj.length = input.length;

  return obj;
}

module.exports = analyzeArr;
