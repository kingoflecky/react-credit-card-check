import FindInvalidCards from "./findInvalidCards";

// Takes the invalidCards array and iterates to determine
// which companies issued invalid cards.
const IdInvalidCardCompanies = (array) => {
  let companyNames = [];
  let firstNum = [];
  //let invalids = FindInvalidCards(array);
  const arrayCopy = [...array];

  arrayCopy.forEach(function (i) {
    if (!firstNum.includes(i[1])) {
      firstNum.push(i[1]);
    }
  });

  for (const i of firstNum) {
    switch (i) {
      case "3":
        companyNames.push("Amex");
        break;
      case "4":
        companyNames.push("Visa");
        break;
      case "5":
        companyNames.push("Mastercard");
        break;
      case "6":
        companyNames.push("Discover");
        break;
      default:
        companyNames.push("Company not found");
    }
  }

  return companyNames.join(", ");
};

export default IdInvalidCardCompanies;
