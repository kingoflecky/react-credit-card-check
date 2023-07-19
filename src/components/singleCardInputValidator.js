// Takes user input in the check single card form. Iterates each digit.
// Calls validateCred function to rtn true || false
// Fnc rtns an alert.
const SingleCardInputValidator = (userInputCardNum) => {
  let singleInputArray = [];

  for (const i of userInputCardNum) {
    singleInputArray.push(i);
  }

  const checkUserCard = validateCred(singleInputArray);

  if (checkUserCard) {
    return alert(
      `${userFullName}, your card number is valid. Your bank is: ${userBankName}`
    );
  } else {
    return alert(
      `${userFullName}, your card number is invalid. Please contact ${userBankName}, your card issuer.`
    );
  }
};

export default SingleCardInputValidator;
