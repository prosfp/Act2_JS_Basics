const { average } = require("../utils/for_testing");

describe("average", () => {
  test("of one value is the value itself", () => {
    expect(average([1])).toBe(1);
  });

  test("of all values being the same", () => {
    expect(average([5, 5, 5])).toBe(5);
  });

  test("of values being 10, 15, 20, should be 15", () => {
    expect(average([10, 15, 20])).toBe(15);
  });

  test("of empty array", () => {
    expect(average([])).toBe(0);
  });
});
