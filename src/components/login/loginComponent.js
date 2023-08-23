import { Field, Form, Formik, useFormik } from "formik";
import { useState } from "react";
import "../../css/loginComponent.css";
import HowCanWeHelp from "../../pages/formPages/howCanWeHelp";
import database from "./userDatabase";

const LoginComponent = () => {
  const manageState = useFormik({
    initialValues: {
      fullName: "",
      bankName: "",
      cardNum: "",
    },
    onSubmit: (values) => {
      //fnGoToPage(value);
    },
  });

  const [passwordType, setPasswordType] = useState("password");
  const [toggleBtnText, setToggleBtnText] = useState("toggle password");

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();

    let { userName, password } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === userName.value);

    // Compare user info
    if (userData) {
      if (userData.password !== password.value) {
        // Invalid password
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "userName", message: errors.userName });
    }
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setToggleBtnText("Hide");
      return;
    }
    setPasswordType("password");
    setToggleBtnText("Show");
  };

  const errors = {
    userName: "invalid username",
    password: "invalid password",
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <Formik
      initialValues={{ userName: "", password: "" }}
      onSubmit={async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form onSubmit={handleSubmit}>
        <div className="input-groups">
          <label>
            Username:
            <Field
              id="userName"
              name="userName"
              type="text"
              placeholder="Enter your username"
              onChange={manageState.handleChange}
              value={manageState.values.userName}
              required
            />
            {renderErrorMessage("userName")}
          </label>
        </div>

        <div className="input-groups">
          <label>
            Password:{" "}
            <Field
              id="password"
              name="password"
              type={passwordType}
              placeholder="Enter your password"
              onChange={manageState.handleChange}
              value={manageState.values.password}
              required
            />
            <button className="toggle-pw" onClick={togglePassword}>
              {toggleBtnText}
            </button>
          </label>
          {renderErrorMessage("password")}
        </div>

        <button id="submitBtn" type="submit" value="Check Card">
          Login
        </button>
      </Form>
    </Formik>
  );

  return (
    <>
      <h2>Welcome to your credit card checker!</h2>

      <div className="login-form">
        <div className="title">Sign In:</div>
        {isSubmitted ? (
          <>
            <div>User is successfully logged in</div>
            <HowCanWeHelp />{" "}
          </>
        ) : (
          renderForm
        )}
      </div>
    </>
  );
};
export default LoginComponent;
