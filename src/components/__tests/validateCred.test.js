import ValidateCred from "../validateCred";

describe("validatorAlgorithm behaves correctly when", () => {
  it("ValidateCred returns true when passed valid array", () => {
    const testInputArray = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
    const expectedResult = true;

    const actualResult = ValidateCred(testInputArray);

    expect(actualResult).toEqual(expectedResult);
  });

  it("ValidateCred returns false when passed invalid array", () => {
    const testInputArray = [4, 4, 4, 4, 5, 2, 2, 2, 3, 3, 3, 3, 4, 9, 9, 9];
    const expectedResult = false;

    const actualResult = ValidateCred(testInputArray);

    expect(actualResult).toEqual(expectedResult);
  });
});
