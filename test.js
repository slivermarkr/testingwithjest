test("capitalize.js file", function () {
  expect(require("./capitalize.js")).toBeDefined();
});

const capitalize = require("./capitalize");

test("turns 'strings' to 'Strings'", function () {
  const testCases = [
    {
      input: "string",
      expect: "String",
    },
    { input: "word", expect: "Word" },
    { input: "hello world", expect: "Hello world" },
    { input: "kimono", expect: "Kimono" },
    { input: "shiminet", expect: "Shiminet" },
  ];

  testCases.forEach(function (test) {
    expect(capitalize(test.input)).toBe(test.expect);
  });
});
