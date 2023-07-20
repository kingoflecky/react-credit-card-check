import { Formik, Form, Field, useFormik } from "formik";
import SingleCardInputValidator from "../../components/singleCardInputValidator";
import "../../css/singleCardForm.css";

const SingleCardForm = () => {

  const manageState = useFormik({
    initialValues: {
      fullName: '',
      bankName: '',
      cardNum: '',
    }, 
    onSubmit: values => {
      SingleCardInputValidator(values);
    }, 
  });

  return (
    <>
      <Formik
        initialValues={{ fullName: "", bankName: "", cardNum: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form onSubmit={manageState.handleSubmit}>
          <div className="input-groups">
            <label>
              Full Name:
              <Field
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                onChange={manageState.handleChange}
                value={manageState.values.fullName}

              />
            </label>
          </div>

          <div className="input-groups">
            <label>
              Your Bank:
              <Field
                id="bankName"
                name="bankName"
                type="text"
                placeholder="Enter the name of your bank"
                onChange={manageState.handleChange}
                value={manageState.values.bankName}
              />
            </label>
          </div>

          <div className="input-groups">
            <label>
              Card Number:
              <Field
                id="cardNum"
                name="cardNum"
                type="text"
                placeholder="Please enter your card number"
                onChange={manageState.handleChange}
                value={manageState.values.cardNum}
              />
            </label>
          </div>

          <button 
            id="submitBtn" 
            type="submit" 
            value="Check Card"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default SingleCardForm;
