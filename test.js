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
