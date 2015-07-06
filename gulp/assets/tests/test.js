var operations;

operations = require("../../assets/js/operations.js");

console.log(operations);

describe("Run tests", function() {
  return it("sum", function() {
    var a;
    a = operations.multiply(2, 2);
    return expect(a).toBe(4);
  });
});
