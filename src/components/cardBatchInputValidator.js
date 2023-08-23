import FindInvalidCards from "./factory/findInvalidCards";
import IdInvalidCardCompanies from "./factory/findInvalidCompanies.js";

const CardBatchInputValidator = ({ cardBatchNums }) => {
  console.log(cardBatchNums);
  const arrayBatch = [...cardBatchNums.split(",").map((s) => s.trim())];

  const strToArray = arrayBatch.map(str => str.split(""));
  console.log(strToArray);

  const invalidCards = FindInvalidCards(strToArray);
  console.log("invalidCards: " + invalidCards);

  const rejoinInvalids = invalidCards.map(str => str.join(""));
  console.log(rejoinInvalids);

  const cardCompanyId = IdInvalidCardCompanies(invalidCards);
  console.log("companyId: " + cardCompanyId);

  if (rejoinInvalids.length > 0) {
    return alert(
      `Your invalid card numbers are as follows: ${rejoinInvalids}`
    );
  } else {
    return alert(
      `All provided card numbers are valid.`
    );
  }
}

export default CardBatchInputValidator;
