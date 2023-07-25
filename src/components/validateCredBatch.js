import {
  CloneArray,
  DoubleEveryOtherNum,
  Minus9Check,
  SumTotal,
  GetModulo,
  IsValid,
  BatchInputToArray,
} from "./validatorAlgorithm.js";

const ValidateCredBatch = (array) => {
  // Function to call the above function. Returns True or False.
  //const convertToArray = BatchInputToArray(array);
  const orgArray = CloneArray(array);
  const doubledNums = DoubleEveryOtherNum(orgArray);
  const subtractedNums = Minus9Check(doubledNums);
  const sum = SumTotal(subtractedNums);
  const remainder = GetModulo(sum);
  return IsValid(remainder);
};

export default ValidateCredBatch;
