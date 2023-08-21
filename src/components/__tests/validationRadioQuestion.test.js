import { render, screen } from "@testing-library/react";
import RenderFirstRadioQuestion from "../validationRadioQuestion";

describe("loginPage form renders correctly when", () => {
  it("renders question", () => {
    render(<RenderFirstRadioQuestion />);
    const question = screen.getByText(/what would you like to validate\?/i);
    expect(question).toBeInTheDocument();
  });

  it("renders text for first radio option", () => {
    render(<RenderFirstRadioQuestion />);
    const option = screen.getByText(/validate single card number/i);
    expect(option).toBeInTheDocument();
  });

  it("renders radio checkbox for first radio option", () => {
    render(<RenderFirstRadioQuestion />);
    const radioCheck = screen.getByRole("radio", {
      name: /validate single card number/i,
    });
    expect(radioCheck).toBeInTheDocument();
  });

  it("renders text for second radio option", () => {
    render(<RenderFirstRadioQuestion />);
    const option = screen.getByText(/validate batch of card numbers/i);
    expect(option).toBeInTheDocument();
  });

  it("renders radio checkbox for second radio option", () => {
    render(<RenderFirstRadioQuestion />);
    const radioCheck = screen.getByRole("radio", {
      name: /validate batch of card numbers/i,
    });
    expect(radioCheck).toBeInTheDocument();
  });

});
