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
