import { render, screen } from "@testing-library/react";
import CardBatchForm from "../cardBatchForm";

describe("HowCanWeHelp renders correctly when", () => {
  it("renders prompt label", () => {
    render(<CardBatchForm />);
    const fullName = screen.getByLabelText(/enter card numbers here:/i);
    expect(fullName).toBeInTheDocument();
  });

  it("renders placeholder text in input box", () => {
    render(<CardBatchForm />);
    const placeholderText =
      screen.getByPlaceholderText(/enter batch of card numbers here/i);

    expect(placeholderText).toBeInTheDocument();
  });

  it("renders submit btn", () => {
    render(<CardBatchForm />);
    const cardNum = screen.getByRole('button', {
      name: /submit/i
    })
    expect(cardNum).toBeInTheDocument();
  });

});
