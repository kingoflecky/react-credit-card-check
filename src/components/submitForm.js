import SingleCardInputValidator from "./singleCardInputValidator";

// submit form func. targets form fields to capture data.
// Triggers singleCardInputValidator() and returns result (alert).
let userFullName;
let userBankName;
let userInputCardNum;

const SubmitForm = (event) => {
  event.preventDefault();
  const fullName = document.getElementById("fullName");
  const bankName = document.getElementById("bankName");
  const cardNum = document.getElementById("cardNum");

  userFullName = fullName.value;
  userBankName = bankName.value;
  userInputCardNum = cardNum.value;

  const validate = SingleCardInputValidator(userInputCardNum);

  return validate, userFullName, userBankName;
};

export default SubmitForm;
