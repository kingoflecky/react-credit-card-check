import { render, screen } from "@testing-library/react";
import LoginPage from "../loginPage";

describe("loginPage form renders correctly when", () => {
  it('renders label "username"', () => {
    render(<LoginPage />);
    const title = screen.getByText(/welcome to your credit card checker!/i);
    expect(title).toBeInTheDocument();
  });
});
