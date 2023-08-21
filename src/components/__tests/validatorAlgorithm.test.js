import {
  CloneArray,
  DoubleEveryOtherNum,
  Minus9Check,
  SumTotal,
  GetModulo,
  IsValid,
} from "../validatorAlgorithm";

describe("validatorAlgorithm behaves correctly when", () => {
  it("CloneArray fn returns a cloned array", () => {
    const testArray = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
    const expectedArray = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];

    const actualArray = CloneArray(testArray);

    expect(actualArray).toEqual(expectedArray);
  });

  it("DoubleEveryOtherNum returns new, reversed, array with every 2nd number doubled", () => {
    const testArray = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
    const expectedArray = [8, 0, 8, 12, 1, 0, 8, 0, 9, 14, 7, 12, 9, 6, 5, 8];

    const actualArray = DoubleEveryOtherNum(testArray);

    expect(actualArray).toEqual(expectedArray);
  });

  it("Minus9Check returns new array with all digits =<9", () => {
    const testArray = [8, 0, 8, 12, 1, 0, 8, 0, 9, 14, 7, 12, 9, 6, 5, 8];
    const expectedArray = [8, 0, 8, 3, 1, 0, 8, 0, 9, 5, 7, 3, 9, 6, 5, 8];

    const actualArray = Minus9Check(testArray);

    expect(actualArray).toEqual(expectedArray);
  });

  it("SumTotal returns the sum of all digits as a number", () => {
    const testArray = [8, 0, 8, 3, 1, 0, 8, 0, 9, 5, 7, 3, 9, 6, 5, 8];
    const expectedNumber = 80;

    const actualNumber = SumTotal(testArray);

    expect(actualNumber).toEqual(expectedNumber);
  });

  it("GetModulo returns no remainder of SumTotal/10", () => {
    const testInputNumber = 80;
    const expectedNumber = 0;

    const actualNumber = GetModulo(testInputNumber);

    expect(actualNumber).toEqual(expectedNumber);
  });

  it("GetModulo returns the remainder of SumTotal/10", () => {
    const testInputNumber = 85;
    const expectedNumber = 5;

    const actualNumber = GetModulo(testInputNumber);

    expect(actualNumber).toEqual(expectedNumber);
  });

  it("IsValid returns true when remainder is 0", () => {
    const testInputNumber = 0;
    const expectedResult = true;

    const actualResult = IsValid(testInputNumber);

    expect(actualResult).toEqual(expectedResult);
  });

  it("IsValid returns false when remainder is 5", () => {
    const testInputNumber = 5;
    const expectedResult = false;

    const actualResult = IsValid(testInputNumber);

    expect(actualResult).toEqual(expectedResult);
  });
});
