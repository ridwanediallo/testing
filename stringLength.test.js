const stringLength = require("./stringLength");

test("Espected length", () => {
  expect(stringLength("rid")).toBe(3);
});
