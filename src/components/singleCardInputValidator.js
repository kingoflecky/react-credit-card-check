import ValidateCred from "./validateCred";

const SingleCardInputValidator = ({ cardNum, fullName, bankName }) => {
  let singleInputArray = [...cardNum];
  const checkUserCard = ValidateCred(singleInputArray);

  if (checkUserCard) {
      alert(
        `${fullName}, your card number is valid. Your bank is: ${bankName}.`
      );
  } else {
    alert(
      `${fullName}, your card number is invalid. Please contact ${bankName}, your card issuer.`
    );
    return null;
  }
};

export default SingleCardInputValidator;
