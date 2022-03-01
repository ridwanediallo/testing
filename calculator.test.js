const Calculator = require("./calculator");

describe("Calculations", () => {
  test("Add two numbers 2 and 3", () => {
    expect(new Calculator(2, 3).add()).toBe(5);
  });
  test("Add two numbers 15 and 5", () => {
    expect(new Calculator(15, 5).add()).toBe(20);
  });
  test("Add two numbers 20 and 15", () => {
    expect(new Calculator(20, 15).add()).toBe(35);
  });
});

describe("Calculations", () => {
  test("Substract two substract 2 and 3", () => {
    expect(new Calculator(2, 3).substract()).toBe(-1);
  });
  test("Substract two substract 15 and 5", () => {
    expect(new Calculator(15, 5).substract()).toBe(10);
  });
  test("Substract two substract 20 and 15", () => {
    expect(new Calculator(20, 15).substract()).toBe(5);
  });
});

describe("Calculations", () => {
  test("Divide two numbers 2 and 3", () => {
    expect(new Calculator(9, 3).divide()).toBe(3);
  });
  test("Divide two numbers 15 and 5", () => {
    expect(new Calculator(15, 5).divide()).toBe(3);
  });
  test("Divide two numbers 20 and 2", () => {
    expect(new Calculator(20, 2).divide()).toBe(10);
  });
});
