import { Formik, Form, Field, useFormik } from "formik";
import "../css/cardBatchForm.css";

const CardBatchForm = () => {

  const manageState = useFormik({
    initialValues: {
      cardBatchNums: '',
    }, 
    onSubmit: values => {
      // SingleCardInputValidator(values);
    }, 
  });

  return (
    <>
      <Formik
        initialValues={{ cardBatchNums: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form onSubmit={manageState.handleSubmit}>
          <div className="input-groups">
            <label>
              Enter card numbers here:
              <Field
                id="cardBatchNums"
                name="cardBatchNums"
                type="text"
                placeholder="Enter batch of card numbers here"
                onChange={manageState.handleChange}
                value={manageState.values.cardBatchNums}

              />
            </label>
          </div>

          <button 
            id="submitBtn" 
            type="submit" 
            value="Check Card Batch"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default CardBatchForm;
