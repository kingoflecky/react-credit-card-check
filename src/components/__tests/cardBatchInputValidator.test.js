// import CardBatchInputValidator from "../cardBatchInputValidator";

// describe("CardBatchInputValidator behaves correctly when", () => {
//   it("returns true when passed valid array", () => {
//     const values = {
//       cardBatchNums:
//         "4539677908016808, 5535766768751439, 371612019985236, 6011144340682905, 4539404967869666",
//     };
//     const expectedMessage = `All provided card numbers are valid.`;

//     const actualResult = CardBatchInputValidator(values);

//     expect(actualResult).toBe(expectedMessage);
//   });

//   it("returns false when passed invalid array", () => {
//     const values = {
//       cardBatchNums:
//         "4532778771091795, 5795593392134643, 375796084459914, 6011127961777935, 5382019772883854",
//     };
//     const expectedMessage = `Your invalid card numbers are as follows: ${values.cardBatchNums}`;

//     const actualResult = CardBatchInputValidator(values);

//     expect(actualResult).toBe(expectedMessage);
//   });
// });
