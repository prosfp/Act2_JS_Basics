const { palindrome, average } = require("../utils/for_testing");

// Test de la funció palindrome

test("palíndrome de onomatopeia", () => {
  const result = palindrome("onomatopeia");
  expect(result).toBe("aiepotamono");
});

test("palindrome of empty string", () => {
  const result = palindrome("");
  expect(result).toBe("");
});

test("palindrome of undefined", function () {
  const result = palindrome();
  expect(result).toBeUndefined();
});

//https://jestjs.io/docs/expect#reference
