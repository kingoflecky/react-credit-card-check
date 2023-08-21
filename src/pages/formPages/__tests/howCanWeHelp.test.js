import { render, screen } from "@testing-library/react";
import HowCanWeHelp from "../howCanWeHelp";

describe("HowCanWeHelp renders correctly when", () => {
  it("renders title", () => {
    render(<HowCanWeHelp />);
    const title = screen.getByText(/Credit Card Validator/i);
    expect(title).toBeInTheDocument();
  });

  it("renders a RenderFirstRadioQuestion compoment", () => {
    render(<HowCanWeHelp />);
    const compomentQuestion = screen.getByText(
      /what would you like to validate\?/i
    );
    expect(compomentQuestion).toBeInTheDocument();
  });
});
