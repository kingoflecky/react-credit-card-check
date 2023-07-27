// Below functions set up validation algorithm
export const CloneArray = (array) => {
  let cloneArray = array.slice(0); // copy the whole `array`
  return cloneArray;
};

export const DoubleEveryOtherNum = (array) => {
  let doubled = array.reverse(0); // reverse the whole `array`
  for (let i = 1; i < doubled.length; i += 2) {
    doubled[i] *= 2; // replace the value at `i`, for every other number.
  }
  return doubled;
};

export const Minus9Check = (doubledNums) => {
  let sub9 = doubledNums.slice(); // copy the whole `array`

  for (let i = 0; i < sub9.length; i++) {
    if (sub9[i] > 9) {
      sub9[i] -= 9;
    }
  }
  return sub9;
};

export const SumTotal = (array) => {
  const total = array.reduce((a, b) => a + Number(b), 0);
  return total;
};

export const GetModulo = (sum) => {
  return sum % 10;
};

export const IsValid = (remainder) => {
  return remainder === 0;
};
