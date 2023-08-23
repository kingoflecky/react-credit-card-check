import { render, screen } from "@testing-library/react";
import LoginComponent from "../loginComponent";

describe("loginPage form renders correctly when", () => {

  it('renders heading', () => {
    render(<LoginComponent />);
    const heading = screen.getByRole('heading', {
      name: /welcome to your credit card checker!/i
    })
    expect(heading).toBeInTheDocument();
  });

  it('renders label "username"', () => {
    render(<LoginComponent />);
    const username = screen.getByLabelText(/Username:/i);
    expect(username).toBeInTheDocument();
  });

  it("renders an input box for username", () => {
    render(<LoginComponent />);
    const inputBox = screen.getByRole("textbox", {
      name: /username:/i,
    });

    expect(inputBox).toBeInTheDocument();
  });

  it("renders placeholder text in username input box", () => {
    render(<LoginComponent />);
    const placeholderText = screen.getByPlaceholderText(/enter your username/i);

    expect(placeholderText).toBeInTheDocument();
  });

  it('renders label "Password:"', () => {
    render(<LoginComponent />);
    const password = screen.getByLabelText(/password:/i);
    expect(password).toBeInTheDocument();
  });

  it("renders placeholder text in password input box", () => {
    render(<LoginComponent />);
    const placeholderText = screen.getByPlaceholderText(/enter your password/i);
    expect(placeholderText).toBeInTheDocument();
  });

  it("renders a toggle password btn", () => {
    render(<LoginComponent />);
    const toggleBtn = screen.getByRole("button", {
      name: /toggle password/i,
    });
    expect(toggleBtn).toBeInTheDocument();
  });

  it("renders a login btn", () => {
    render(<LoginComponent />);
    const loginBtn = screen.getByRole("button", {
      name: /login/i,
    });
    expect(loginBtn).toBeInTheDocument();
  });
});
