const { testEnvironment } = require("../jest.config");
const { Based } = require("../src/index");


describe("Based class tests", () => {
  
  test("window load", () => {
    
    const b = new Based();
    expect(b).toBe("");
  
  });

});
