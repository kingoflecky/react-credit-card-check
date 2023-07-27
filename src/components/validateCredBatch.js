import {
  CloneArray,
  DoubleEveryOtherNum,
  Minus9Check,
  SumTotal,
  GetModulo,
  IsValid,
} from "./validatorAlgorithm.js";

// Function to call the above function. Returns True or False.
const ValidateCredBatch = (array) => {
  const orgArray = CloneArray(array);

  const doubledNums = DoubleEveryOtherNum(orgArray);
  //console.log('doubledNums: ' + doubledNums)        xxxxxxxx breaks here xxxxxxxx
  const subtractedNums = Minus9Check(doubledNums);
  const sum = SumTotal(subtractedNums);
  const remainder = GetModulo(sum);

  return IsValid(remainder);
};

export default ValidateCredBatch;
