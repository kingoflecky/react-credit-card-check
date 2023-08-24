import { Formik, Field, Form } from "formik";

const RenderLoginFormComponent = ({
  handleSubmit,
  manageState,
  renderErrorMessage,
  passwordType,
  togglePassword,
  toggleBtnText,

}) => {

  return (
  <Formik
    initialValues={{ userName: "", password: "" }}
    onSubmit={async (values) => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      alert(JSON.stringify(values, null, 2));
    }}
  >
    <Form onSubmit={handleSubmit}>

    <h6 className="title">Please sign in:</h6>

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
  )
}

export default RenderLoginFormComponent