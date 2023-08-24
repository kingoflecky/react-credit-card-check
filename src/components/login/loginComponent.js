import { useFormik } from "formik";
import { useState } from "react";
import "../../css/loginComponent.css";
import HowCanWeHelp from "../../pages/formPages/howCanWeHelp";
import database from "./userDatabase";
import RenderLoginFormComponent from "./renderLoginFormComponent";

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
  const storedLoginStatus = localStorage.getItem("isLoggedIn");
  const [passwordType, setPasswordType] = useState("password");
  const [toggleBtnText, setToggleBtnText] = useState("toggle password");

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(storedLoginStatus);

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
        localStorage.setItem("isLoggedIn", true);
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

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsSubmitted(false);
  };

  return (
    <>
      <h2>Welcome to your credit card checker!</h2>

      <div className="login-form">
        {isSubmitted ? (
          <>
            <h5>User is successfully logged in</h5>
            <button onClick={handleLogout}>Sign Out</button>
            <HowCanWeHelp />{" "}
          </>
        ) : (
          <RenderLoginFormComponent
            handleSubmit={handleSubmit}
            manageState={manageState}
            renderErrorMessage={renderErrorMessage}
            passwordType={passwordType}
            togglePassword={togglePassword}
            toggleBtnText={toggleBtnText}
          />
        )}
      </div>
    </>
  );
};
export default LoginComponent;
