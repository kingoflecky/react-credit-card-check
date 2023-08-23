import FindInvalidCards from "../findInvalidCards";

describe("FindInvalidCards behaves correctly when", () => {
  it("returns an empty array when card numbers are valid", () => {
    const testInputArray = [
      [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8],
      [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9],
      [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6],
    ];
    const expectedResult = [];

    const actualResult = FindInvalidCards(testInputArray);

    expect(actualResult).toEqual(expectedResult);
  });
  
  it("returns an array of invalid card numbers", () => {
    const testInputArray = [
      [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5],
      [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3],
      [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4],
    ];
    const expectedResult = [
      [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5],
      [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3],
      [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4],
    ];

    const actualResult = FindInvalidCards(testInputArray);

    expect(actualResult).toEqual(expectedResult);
  });
});
