// capitalize()
test("capitalize.js file", function () {
  expect(require("./functions/capitalize.js")).toBeDefined();
});

const capitalize = require("./functions/capitalize.js");

describe("capitalizeFirstLetter", function () {
  test("capitalizeTest#1", function () {
    expect(capitalize("string")).toBe("String");
  });
  test("capitalizeTest#2", function () {
    expect(capitalize("word")).toBe("Word");
  });
  test("capitalizeTest#3", function () {
    expect(capitalize("hello")).toBe("Hello");
  });
  test("capitalizeTest#4", function () {
    expect(capitalize("ninja")).toBe("Ninja");
  });
  test("capitalizeTest#5", function () {
    expect(capitalize("mamamia")).toBe("Mamamia");
  });
});

// reverseString()
test("reverseStringFile", function () {
  expect(require("./functions/reverseString.js")).toBeDefined();
});

const reverseString = require("./functions/reverseString.js");

describe("reverseStringTest", function () {
  test("reverseString('hello world')", function () {
    expect(reverseString("hello world")).toBe("dlrow olleh");
  });

  test("reverseString('car')", function () {
    expect(reverseString("car")).toBe("rac");
  });

  test("reverseString('racecar')", function () {
    expect(reverseString("racecar")).toBe("racecar");
  });
});

// calculator object
test("calculator", function () {
  expect(require("./functions/calculator.js")).toBeDefined();
});

const calculator = require("./functions/calculator.js");

describe("calculatorTest", function () {
  test("calculator.add(1, 2)", function () {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test("calculator.add(800, 200)", function () {
    expect(calculator.add(800, 200)).toBe(1000);
  });

  test("calculator.multiply(3 , 2)", function () {
    expect(calculator.multiply(3, 2)).toBe(6);
  });

  test("calculator.multiply(7 , 7)", function () {
    expect(calculator.multiply(7, 7)).toBe(49);
  });

  test("calculator.sub(100, 69)", function () {
    expect(calculator.sub(100, 69)).toBe(31);
  });

  test("calculator.divide(1000, 10)", function () {
    expect(calculator.divide(1000, 10)).toBe(100);
  });
});

// caesarchipher()
test("caesarchiperFile", function () {
  expect(require("./functions/caesarcipher.js")).toBeDefined();
});

const caesarcipher = require("./functions/caesarcipher.js");

describe("caesarcipherTest", function () {
  test("caesarcipher#1", function () {
    expect(caesarcipher("abc", 3)).toBe("def");
  });

  test("caesarcipher#1", function () {
    expect(caesarcipher("HeLLo World!", 3)).toBe("KhOOr Zruog!");
  });

  test("caesarcipher#2", function () {
    expect(caesarcipher("Hello World", 5)).toBe("Mjqqt Btwqi");
  });

  test("caesarcipher#3", function () {
    expect(caesarcipher("XYZ", 26)).toBe("XYZ");
  });

  test("caesarcipher#4", function () {
    expect(caesarcipher("abc", 12)).toBe("mno");
  });
});

// analyzeArray()
test("analyzeArrayFile", function () {
  expect(require("./functions/analyzeArray.js")).toBeDefined();
});

const analyzeArr = require("./functions/analyzeArray.js");

describe("analyzeArrayTest", function () {
  test("analyzeArrayTest#1", function () {
    expected = {
      average: 3,
      min: 1,
      max: 5,
      length: 5,
    };
    expect(analyzeArr((input = [1, 2, 3, 4, 5]))).toEqual(expected);
  });

  test("analyzeArrayTest#2", function () {
    expected = {
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    };
    expect(analyzeArr((input = [1, 8, 3, 4, 2, 6]))).toEqual(expected);
  });
});
