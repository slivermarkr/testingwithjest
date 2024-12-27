test("capitalize.js file", function () {
  expect(require("./capitalize.js")).toBeDefined();
});

const capitalize = require("./capitalize");

describe("capitalizeFirstLetter", function () {
  test("string > String", function () {
    expect(capitalize("string")).toBe("String");
  });
  test("word > Word", function () {
    expect(capitalize("word")).toBe("Word");
  });
  test("hello > Hello", function () {
    expect(capitalize("hello")).toBe("Hello");
  });
  test("ninja > Ninja", function () {
    expect(capitalize("ninja")).toBe("Ninja");
  });
  test("mamamia > Mamamia", function () {
    expect(capitalize("mamamia")).toBe("Mamamia");
  });
});

// ReverseString()
test("reverseStringFile", function () {
  expect(require("./reverseString.js")).toBeDefined();
});

const reverseString = require("./reverseString");

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
  expect(require("./calculator.js")).toBeDefined();
});

const calculator = require("./calculator");

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
  expect(require("./caesarcipher.js")).toBeDefined();
});

const caesarcipher = require("./caesarcipher.js");

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
