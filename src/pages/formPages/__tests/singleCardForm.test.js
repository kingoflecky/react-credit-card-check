import { render, screen } from "@testing-library/react";
import SingleCardForm from "../singleCardForm";

describe("HowCanWeHelp renders correctly when", () => {
  it("renders full name label", () => {
    render(<SingleCardForm />);
    const fullName = screen.getByLabelText(/full name:/i);
    expect(fullName).toBeInTheDocument();
  });

  it("renders placeholder text in fullName input box", () => {
    render(<SingleCardForm />);
    const placeholderText =
      screen.getByPlaceholderText(/enter your full name/i);

    expect(placeholderText).toBeInTheDocument();
  });

  it("renders bank name label", () => {
    render(<SingleCardForm />);
    const bankName = screen.getByLabelText(/your bank:/i);
    expect(bankName).toBeInTheDocument();
  });

  it("renders placeholder text in bankName input box", () => {
    render(<SingleCardForm />);
    const placeholderText = screen.getByPlaceholderText(
      /enter the name of your bank/i
    );

    expect(placeholderText).toBeInTheDocument();
  });

  it("renders card Num label", () => {
    render(<SingleCardForm />);
    const cardNum = screen.getByLabelText(/card number:/i);
    expect(cardNum).toBeInTheDocument();
  });

  it("renders placeholder text in cardNum input box", () => {
    render(<SingleCardForm />);
    const placeholderText = screen.getByPlaceholderText(
      /please enter your card number/i
    );
    expect(placeholderText).toBeInTheDocument();
  });

  it("renders submit btn", () => {
    render(<SingleCardForm />);
    const cardNum = screen.getByRole('button', {
      name: /submit/i
    })
    expect(cardNum).toBeInTheDocument();
  });

});
