import FindInvalidCards from "./findInvalidCards";
import IdInvalidCardCompanies from "./findInvalidCompanies.js";

const CardBatchInputValidator = ({ cardBatchNums }) => {
  let arrayBatch = [...cardBatchNums.split(',').map(s => s.trim())];
  console.log(arrayBatch)

  const invalidCards = FindInvalidCards(arrayBatch);
  console.log("invalidCards: " + invalidCards);
  const cardCompanyId = IdInvalidCardCompanies(invalidCards);
  console.log("companyId: " + cardCompanyId);

  return invalidCards, cardCompanyId;
};

export default CardBatchInputValidator;
