import ValidateCred from "./validateCred";

const FindInvalidCards = (arrayBatch) => {
  // Takes a batch of card numbers, iterates through
  // & determines valid || invalid.
  let validCards = [];
  let invalidCards = [];

  for (const i of arrayBatch) {
    if (ValidateCred(i)) {
      validCards.push(JSON.stringify(i));
    } else if (!ValidateCred(i)) {
      invalidCards.push(JSON.stringify(i));
    }
  }
  return invalidCards;
};

export default FindInvalidCards;