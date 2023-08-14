import { Field, Form, Formik, useFormik } from "formik";
import { useState } from "react";
import '../css/loginComponent.css'

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

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setToggleBtnText("Hide");
      return;
    }
    setPasswordType("password");
    setToggleBtnText("Show");
  };

  return (
    <>
      <h2>Welcome to your credit card checker!</h2>
      <Formik
        initialValues={{ userName: "", password: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form onSubmit={manageState.handleSubmit}>
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
              />
            </label>
          </div>

          <div className="input-groups">
            <label>
              Password:{' '}
              <Field
                id="password"
                name="password"
                type={passwordType}
                placeholder="Enter your password"
                onChange={manageState.handleChange}
                value={manageState.values.password}
              />
              <button className="toggle-pw" onClick={togglePassword}>
                {toggleBtnText}
              </button>
              
            </label>
          </div>

          <button id="submitBtn" type="submit" value="Check Card">
            Login
          </button>
        </Form>
      </Formik>
    </>
  );
};
export default LoginComponent;
