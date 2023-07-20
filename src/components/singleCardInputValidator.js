import ValidateCred from "./validateCred";

// Takes user input in the check single card form. Iterates each digit.
// Calls validateCred function to rtn true || false
// Fnc rtns an alert.
const SingleCardInputValidator = ({cardNum, fullName, bankName}) => {
  let singleInputArray = [...cardNum];

  const checkUserCard = ValidateCred(singleInputArray);

  console.log(singleInputArray, checkUserCard)
  
  if (checkUserCard) {
    return alert(
      `${fullName}, your card number is valid. Your bank is: ${bankName}`
    );
  } else {
    return alert(
      `${fullName}, your card number is invalid. Please contact ${bankName}, your card issuer.`
    );
  }
};

export default SingleCardInputValidator;
