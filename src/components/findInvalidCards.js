import ValidateCred from "./validateCred";

export const FindInvalidCards = (arrayBatch) => {
  // Takes a batch of card numbers, iterates through
  // & determines valid || invalid.
  let validCards = [];
  let invalidCardsArray = [];
  
  for (const i of arrayBatch) {
    if (ValidateCred(i)) {
      validCards.push(i);
    } else if (!ValidateCred(i)) {
      invalidCardsArray.push(i);
      console.log(invalidCardsArray)
    }
  }
  return invalidCardsArray;
};

export default FindInvalidCards
